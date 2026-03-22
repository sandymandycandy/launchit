import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation('common');

  const quickLinks = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' },
  ];

  const serviceLinks = [
    { key: 'solutions_web', href: '#services' },
    { key: 'solutions_mobile', href: '#services' },
    { key: 'solutions_ecommerce', href: '#services' },
    { key: 'solutions_software', href: '#services' },
  ];

  return (
    <footer className="relative bg-dark-surface border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/elit-logo.png" alt="ELIT Logo" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-heading font-bold text-white text-xl tracking-tight">
                E-<span className="text-gradient">LaunchIT</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors duration-200" />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('footer.our_services')}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors duration-200" />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('footer.contact_us')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand shrink-0" />
                <a href={`tel:${t('footer.phone')}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand shrink-0" />
                <a href={`mailto:${t('footer.email')}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors flex items-center gap-1.5">
              <ExternalLink size={12} />
              {t('footer.legal')}
            </a>
            <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors flex items-center gap-1.5">
              <ExternalLink size={12} />
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
