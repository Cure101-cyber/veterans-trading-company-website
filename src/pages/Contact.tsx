import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Linkedin,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import { supabase } from '@/lib/supabase';

const INQUIRY_TYPES = [
  'General Inquiry',
  'Supplier Managed Inventory (SMI)',
  'On-Site Procurement (OSP)',
  'Customer Direct Procurement (CDP)',
  'MRO Supplies',
  'Supplier Relations',
  'Careers',
  'Other',
];

type FormState = {
  full_name: string;
  business_email: string;
  company_name: string;
  inquiry_type: string;
  message: string;
};

const EMPTY: FormState = {
  full_name: '',
  business_email: '',
  company_name: '',
  inquiry_type: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Contact Veterans Trading Company Inc. — call +1 385-715-1973, email info@veteranstradingcompanyinc.com, or submit an inquiry. Located at 15 West South Temple, Salt Lake City, UT 84101.',
    path: '/contact',
  });

  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
    if (!form.business_email.trim()) {
      e.business_email = 'Please enter your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.business_email)) {
      e.business_email = 'Please enter a valid email address.';
    }
    if (!form.inquiry_type) e.inquiry_type = 'Please select an inquiry type.';
    if (!form.message.trim()) {
      e.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        full_name: form.full_name.trim(),
        business_email: form.business_email.trim(),
        company_name: form.company_name.trim() || null,
        inquiry_type: form.inquiry_type,
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  const inputBase =
    'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500';
  const inputOk = 'border-slate-300';
  const inputErr = 'border-red-400 bg-red-50';

  return (
    <>
      <PageHeader
        title="Contact Veterans Trading Company"
        eyebrow="Get in Touch"
        description="Please include your direct contact information, including your main business phone number and extension if your inquiry is for a quote. You may also reach us via phone or email."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Contact info column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900">Contact Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Reach out via phone, email, or the form. Our team will respond promptly to your inquiry.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href={COMPANY.phoneHref}
                className="group flex items-start gap-4 rounded-xl border border-slate-200 p-5 transition-colors hover:border-navy-300 hover:bg-navy-50"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Phone</p>
                  <p className="mt-1 font-semibold text-navy-900 group-hover:text-navy-700">
                    {COMPANY.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-4 rounded-xl border border-slate-200 p-5 transition-colors hover:border-navy-300 hover:bg-navy-50"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Email</p>
                  <p className="mt-1 font-semibold text-navy-900 group-hover:text-navy-700 break-all">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                    Headquarters
                  </p>
                  <p className="mt-1 font-bold text-navy-900">{COMPANY.name}</p>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-slate-600">
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Company</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Service-Disabled Veteran-Owned Small Business &middot; SBA Certified HUBZone
                  </p>
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="card p-8 md:p-10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-500" />
                <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Thank you for your inquiry!</p>
                    <p className="mt-1 text-sm text-green-700">
                      Your message has been received. A member of our team will respond to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-red-800">Something went wrong.</p>
                    <p className="mt-1 text-sm text-red-700">
                      We couldn't submit your message. Please try again or email us directly at{' '}
                      <a href={`mailto:${COMPANY.email}`} className="font-semibold underline">
                        {COMPANY.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full_name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      value={form.full_name}
                      onChange={(e) => update('full_name', e.target.value)}
                      className={`${inputBase} ${errors.full_name ? inputErr : inputOk}`}
                      placeholder="Jane Doe"
                      disabled={status === 'submitting'}
                    />
                    {errors.full_name && (
                      <p className="mt-1 text-xs text-red-600">{errors.full_name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="business_email" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="business_email"
                      type="email"
                      value={form.business_email}
                      onChange={(e) => update('business_email', e.target.value)}
                      className={`${inputBase} ${errors.business_email ? inputErr : inputOk}`}
                      placeholder="jane@company.com"
                      disabled={status === 'submitting'}
                    />
                    {errors.business_email && (
                      <p className="mt-1 text-xs text-red-600">{errors.business_email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company_name" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Company Name
                    </label>
                    <input
                      id="company_name"
                      type="text"
                      value={form.company_name}
                      onChange={(e) => update('company_name', e.target.value)}
                      className={`${inputBase} ${inputOk}`}
                      placeholder="Your organization"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="mb-1.5 block text-sm font-semibold text-navy-800">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiry_type"
                      value={form.inquiry_type}
                      onChange={(e) => update('inquiry_type', e.target.value)}
                      className={`${inputBase} ${errors.inquiry_type ? inputErr : inputOk}`}
                      disabled={status === 'submitting'}
                    >
                      <option value="">Select an inquiry type...</option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.inquiry_type && (
                      <p className="mt-1 text-xs text-red-600">{errors.inquiry_type}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-y`}
                    placeholder="Tell us about your inquiry. Please include your main business phone number if requesting a quote."
                    disabled={status === 'submitting'}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
