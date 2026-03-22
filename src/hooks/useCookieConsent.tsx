import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type ConsentState = 'pending' | 'accepted' | 'declined';

interface ConsentCtx {
  consent: ConsentState;
  accept: () => void;
  decline: () => void;
}

const CookieConsentContext = createContext<ConsentCtx>({
  consent: 'pending',
  accept: () => {},
  decline: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const stored = localStorage.getItem('elit_cookies');
    if (stored === 'accepted') return 'accepted';
    if (stored === 'declined') return 'declined';
    return 'pending';
  });

  const accept = useCallback(() => {
    localStorage.setItem('elit_cookies', 'accepted');
    setConsent('accepted');
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem('elit_cookies', 'declined');
    setConsent('declined');
  }, []);

  // Inject / remove analytics based on consent
  useEffect(() => {
    const SCRIPT_ID = 'vercel-analytics';

    if (consent === 'accepted') {
      // Inject Vercel Web Analytics (or any analytics script)
      if (!document.getElementById(SCRIPT_ID)) {
        const s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.defer = true;
        s.src = '/_vercel/insights/script.js';
        document.head.appendChild(s);
      }
    } else {
      // Remove analytics script if it was injected
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
    }
  }, [consent]);

  return (
    <CookieConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
