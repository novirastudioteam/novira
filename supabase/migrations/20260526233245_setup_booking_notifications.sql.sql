/*
  # Setup email notifications for booking requests

  1. New Functions
    - `notify_booking_request()` - Trigger function that logs new bookings
    - Nota: Per inviare email vere, serve integrare con un servizio email (Resend, SendGrid, etc.)
    
  2. Triggers
    - Trigger su `booking_requests` AFTER INSERT per notificare nuove richieste

  3. Notes
    - Per ora logga le richieste nelle sistema logs
    - Per attivare email vere: configurare un servizio email e aggiornare la funzione
*/

-- Create function to handle new booking notifications
CREATE OR REPLACE FUNCTION public.notify_booking_request()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
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

-- Create trigger
DROP TRIGGER IF EXISTS on_booking_request_created ON public.booking_requests;
CREATE TRIGGER on_booking_request_created
  AFTER INSERT ON public.booking_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_booking_request();

-- Add comment
COMMENT ON FUNCTION public.notify_booking_request() IS 'Notifica nuove richieste di consulenza';
