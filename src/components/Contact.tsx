import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from 'lucide-react';

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/* ── Shared input / select class ────────────────────────────────────────────── */

const INPUT_CLASS =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white ' +
  'placeholder-slate-500 focus:outline-none focus:border-brand/60 focus:ring-1 ' +
  'focus:ring-brand/30 transition-all font-body text-sm';

/* ── Component ──────────────────────────────────────────────────────────────── */

export default function Contact() {
  const { t } = useTranslation('common');

  /* Form state */
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  /* UI state */
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  /* Handlers */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulate a brief sending state, then show success
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  }

  /* ── Render ─────────────────────────────────────────────────────────────── */

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-white/[0.018] overflow-hidden"
    >
      {/* ── Background radial brand glow ──────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-brand/8 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('nav.contact')}
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            <span className="text-gradient">{t('contact.headline')}</span>
          </h2>
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('contact.subheadline')}
          </p>
        </div>

        {/* ── Two-column grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── LEFT — Contact Form ──────────────────────────────────────── */}
          <div data-aos="fade-left" data-aos-duration="800">
            <div className="glass-card p-8">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <CheckCircle2 size={48} className="text-brand" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {t('contact.success_title')}
                  </h3>
                  <p className="section-sub text-sm max-w-sm leading-relaxed">
                    {t('contact.success_desc')}
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-semibold text-slate-400 font-body uppercase tracking-wider"
                      >
                        {t('contact.name')}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder={t('contact.name_placeholder')}
                        required
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-semibold text-slate-400 font-body uppercase tracking-wider"
                      >
                        {t('contact.email')}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder={t('contact.email_placeholder')}
                        required
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="text-xs font-semibold text-slate-400 font-body uppercase tracking-wider"
                      >
                        {t('contact.phone')}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={fields.phone}
                        onChange={handleChange}
                        placeholder={t('contact.phone_placeholder')}
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-service"
                        className="text-xs font-semibold text-slate-400 font-body uppercase tracking-wider"
                      >
                        {t('contact.service')}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={fields.service}
                        onChange={handleChange}
                        className={INPUT_CLASS}
                      >
                        <option value="" disabled>
                          {t('contact.service_placeholder')}
                        </option>
                        <option value="web">{t('contact.service_web')}</option>
                        <option value="mobile">{t('contact.service_mobile')}</option>
                        <option value="ecommerce">{t('contact.service_ecommerce')}</option>
                        <option value="software">{t('contact.service_software')}</option>
                        <option value="other">{t('contact.service_other')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-slate-400 font-body uppercase tracking-wider"
                    >
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      placeholder={t('contact.message_placeholder')}
                      required
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT — Contact Info ─────────────────────────────────────── */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Info card */}
            <div className="glass-card p-6 flex flex-col gap-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {t('contact.info_title')}
                </h3>
                <p className="section-sub text-sm leading-relaxed">
                  {t('contact.info_desc')}
                </p>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-4">
                {/* Address */}
                <InfoRow
                  icon={<MapPin size={18} strokeWidth={1.5} />}
                  text={t('contact.address')}
                />
                {/* Phone */}
                <InfoRow
                  icon={<Phone size={18} strokeWidth={1.5} />}
                  text={t('contact.phone_num')}
                />
                {/* Email */}
                <InfoRow
                  icon={<Mail size={18} strokeWidth={1.5} />}
                  text={t('contact.email_addr')}
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/33651990642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-xl px-5 py-3.5 font-semibold text-white text-sm font-body transition-all duration-200 hover:brightness-110 shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                {t('contact.whatsapp')}
              </a>
            </div>

            {/* Hours card */}
            <div className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand/10 rounded-lg p-2 text-brand">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">
                  {t('contact.hours_title')}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-slate-400 font-body text-sm leading-relaxed">
                  {t('contact.hours_weekdays')}
                </p>
                <p className="text-slate-400 font-body text-sm leading-relaxed">
                  {t('contact.hours_weekend')}
                </p>
              </div>
            </div>
          </div>
          {/* ── END RIGHT ───────────────────────────────────────────────── */}

        </div>
      </div>
    </section>
  );
}

/* ── Sub-component: info row ─────────────────────────────────────────────── */

interface InfoRowProps {
  icon: React.ReactNode;
  text: string;
}

function InfoRow({ icon, text }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-brand/10 rounded-lg p-2 text-brand flex-shrink-0">
        {icon}
      </div>
      <span className="text-slate-300 font-body text-sm leading-relaxed pt-1">
        {text}
      </span>
    </div>
  );
}
