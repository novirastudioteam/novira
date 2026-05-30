/*
  # Fix security issues in booking system

  1. Security Fixes
    - Fix search_path in notify_booking_request() function
    - Update INSERT policy to properly validate data instead of allowing all
    - Revoke EXECUTE permissions from anon and authenticated on trigger function
    - Ensure SECURITY DEFINER function is not publicly executable

  2. Changes
    - Set search_path to 'public' in function definition
    - Add proper WITH CHECK validation on INSERT policy
    - Revoke EXECUTE on notify_booking_request() from anon and authenticated
    - Function remains SECURITY DEFINER but only executable by postgres

  3. Security Notes
    - The trigger function is now only executable by postgres (database itself)
    - INSERT policy validates that required fields are provided
    - Search path is fixed to prevent search_path attacks
*/

-- Drop existing function and recreate with security fixes
DROP FUNCTION IF EXISTS public.notify_booking_request() CASCADE;

-- Recreate function with fixed search_path and revoked permissions
CREATE OR REPLACE FUNCTION public.notify_booking_request()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log to console (visible in Supabase logs)
  RAISE NOTICE '=== NUOVA RICHIESTA CONSULENZA ===';
  RAISE NOTICE 'Nome: %', NEW.name;
  RAISE NOTICE 'Email: %', NEW.email;
  RAISE NOTICE 'Instagram: %', NEW.instagram;
  RAISE NOTICE 'Attività: %', NEW.business_type;
  RAISE NOTICE 'Messaggio: %', COALESCE(NEW.message, 'Nessuno');
  RAISE NOTICE 'Data: %', NEW.created_at;
  RAISE NOTICE '================================';
  
  RETURN NEW;
END;
$$;

-- Revoke EXECUTE from anon and authenticated (only postgres should execute triggers)
REVOKE ALL ON FUNCTION public.notify_booking_request() FROM anon;
REVOKE ALL ON FUNCTION public.notify_booking_request() FROM authenticated;

-- Drop and recreate the INSERT policy with proper validation
DROP POLICY IF EXISTS "Anyone can submit booking request" ON public.booking_requests;

-- Create new INSERT policy with actual validation
CREATE POLICY "Public can submit valid booking requests"
  ON public.booking_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate required fields are not empty
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(instagram)) > 0 AND
    length(trim(business_type)) > 0 AND
    -- Validate email format (basic check)
    email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
  );

-- Re-create trigger
DROP TRIGGER IF EXISTS on_booking_request_created ON public.booking_requests;
CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON public.booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_booking_request();

-- Add comment
COMMENT ON FUNCTION public.notify_booking_request() IS 'Notifica nuove richieste di consulenza - solo per uso interno del database';
