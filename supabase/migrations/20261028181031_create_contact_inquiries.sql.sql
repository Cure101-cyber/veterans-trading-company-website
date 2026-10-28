/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — sender's full name
  - `business_email` (text, not null) — sender's business email
  - `company_name` (text) — optional company name
  - `inquiry_type` (text, not null) — type of inquiry (General, SMI, OSP, CDP, MRO, Careers, Other)
  - `message` (text, not null) — the inquiry message body
  - `status` (text, default 'new') — processing status for internal tracking
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_inquiries`.
- Grant INSERT to anon + authenticated so public visitors can submit the form.
- No SELECT/UPDATE/DELETE grants for anon/authenticated — inquiries are write-only from the client.
- INSERT policy allows anyone (anon + authenticated) to submit — the form is public.
  No SELECT policy is created, so submitted data cannot be read back via the Data API.

3. Notes
- This table is write-only from the frontend. Internal staff with service_role access
  (via Supabase dashboard or edge functions) can read and manage inquiries.
- No user_id column or auth dependency — this is a public contact form.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business_email text NOT NULL,
  company_name text,
  inquiry_type text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Write-only: only INSERT is granted to public roles.
-- No SELECT grant means submitted inquiries cannot be read via the Data API.
GRANT INSERT ON contact_inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_inquiries" ON contact_inquiries;
CREATE POLICY "public_insert_contact_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
