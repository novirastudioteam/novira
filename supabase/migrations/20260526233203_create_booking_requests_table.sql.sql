/*
  # Create booking_requests table

  1. New Tables
    - `booking_requests`
      - `id` (uuid, primary key)
      - `name` (text, nome del richiedente)
      - `email` (text, email del richiedente)
      - `instagram` (text, handle Instagram)
      - `business_type` (text, tipo di attivita)
      - `message` (text, messaggio opzionale)
      - `status` (text, stato della richiesta: new, contacted, closed)
      - `created_at` (timestamp, data creazione)

  2. Security
    - Enable RLS on `booking_requests` table
    - Add policy for public insert (per permettere invio form)
    - Add policy for authenticated read (per permettere lettura admin)

  3. Notes
    - La tabella salva le richieste di consulenza gratuita
    - Ogni richiesta ha uno stato per tracciare il follow-up
    - Gli indici migliorano le query per stato e data
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  instagram text NOT NULL,
  business_type text NOT NULL,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow public insert (form submission)
CREATE POLICY "Anyone can submit booking request"
  ON booking_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read (admin access)
CREATE POLICY "Authenticated users can view booking requests"
  ON booking_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS idx_booking_requests_status ON booking_requests(status);
CREATE INDEX IF NOT EXISTS idx_booking_requests_created_at ON booking_requests(created_at DESC);

-- Add comment
COMMENT ON TABLE booking_requests IS 'Richieste di consulenza gratuita da novira.studio';
