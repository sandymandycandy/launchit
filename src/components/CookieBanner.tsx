import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';

export default function CookieBanner() {
  const { t } = useTranslation('common');
  const { consent, accept, decline } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent === 'pending') {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    setVisible(false);
  }, [consent]);

  const handleAccept = () => {
    accept();
    setVisible(false);
  };

  const handleDecline = () => {
    decline();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60] animate-slide-up">
      <div className="glass-card p-5 border border-brand/20 shadow-brand">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
            <Cookie size={18} className="text-brand" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm font-heading mb-1">
              {t('cookie.title')}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t('cookie.desc')}
            </p>
          </div>
          <button
            onClick={handleDecline}
            className="shrink-0 text-slate-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-3">
          <button onClick={handleAccept} className="flex-1 btn-primary text-xs py-2 px-4">
            {t('cookie.accept')}
          </button>
          <button onClick={handleDecline} className="flex-1 btn-secondary text-xs py-2 px-4">
            {t('cookie.decline')}
          </button>
        </div>
      </div>
    </div>
  );
}
