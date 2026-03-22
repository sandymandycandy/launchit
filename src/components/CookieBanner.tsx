import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('elit_cookies');
    if (!accepted) setTimeout(() => setVisible(true), 1500);
  }, []);

  const accept = () => {
    localStorage.setItem('elit_cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('elit_cookies', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  const isFr = i18n.language === 'fr';

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60] animate-slide-up">
      <div className="glass-card p-5 border border-brand/20 shadow-brand">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
            <Cookie size={18} className="text-brand" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm font-heading mb-1">
              {isFr ? '🍪 Cookies & Confidentialité' : '🍪 Cookies & Privacy'}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              {isFr
                ? 'Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre politique de confidentialité.'
                : 'We use cookies to improve your experience. By continuing, you accept our privacy policy.'}
            </p>
          </div>
          <button
            onClick={decline}
            className="shrink-0 text-slate-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 btn-primary text-xs py-2 px-4"
          >
            {isFr ? 'Accepter' : 'Accept'}
          </button>
          <button
            onClick={decline}
            className="flex-1 btn-secondary text-xs py-2 px-4"
          >
            {isFr ? 'Refuser' : 'Decline'}
          </button>
        </div>
      </div>
    </div>
  );
}
