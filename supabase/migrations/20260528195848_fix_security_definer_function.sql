/*
  # Fix Security Issues: SECURITY DEFINER Function

  1. Security Problem
    - Function `notify_booking_request()` is marked as SECURITY DEFINER
    - This means it runs with the privileges of the function owner (superuser)
    - Both `anon` and `authenticated` roles had EXECUTE permission
    - This allows unprivileged users to execute code with elevated privileges
    - Potential security vulnerability for privilege escalation

  2. Solution
    - Drop the trigger temporarily
    - Change function from SECURITY DEFINER to SECURITY INVOKER
    - Revoke EXECUTE permissions from anon and authenticated roles
    - Recreate trigger (it will now run with caller's privileges)
    - Function only logs to console, so SECURITY INVOKER is appropriate

  3. Impact
    - Function will now run with the privileges of the user calling it
    - This is safer and follows the principle of least privilege
    - Trigger will still work because it's called by the database itself
    - No functional changes - function only logs to console

  4. Notes
    - We're using Edge Functions for email notifications
    - This trigger function only logs to console for debugging
    - SECURITY INVOKER is the safest default for trigger functions
*/

-- Step 1: Drop the trigger temporarily
DROP TRIGGER IF EXISTS on_booking_request_created ON public.booking_requests;

-- Step 2: Recreate function with SECURITY INVOKER
CREATE OR REPLACE FUNCTION public.notify_booking_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path TO 'public'
AS $function$
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
$function$;

-- Step 3: Revoke all execute permissions from unprivileged roles
REVOKE ALL ON FUNCTION public.notify_booking_request() FROM anon;
REVOKE ALL ON FUNCTION public.notify_booking_request() FROM authenticated;
REVOKE ALL ON FUNCTION public.notify_booking_request() FROM PUBLIC;

-- Step 4: Recreate the trigger
CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON public.booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_booking_request();