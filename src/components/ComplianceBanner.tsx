import { useState, useEffect } from 'react';
import { ShieldCheck, Check, Info } from 'lucide-react';

interface ComplianceBannerProps {
  onOpenLegal: (tab: 'terms' | 'privacy' | 'ada' | 'disclaimer') => void;
}

export function ComplianceBanner({ onOpenLegal }: ComplianceBannerProps) {
  const [isDismissed, setIsDismissed] = useState<boolean>(true);

  useEffect(() => {
    try {
      const consented = localStorage.getItem('very_vocab_consent');
      if (!consented) {
        setIsDismissed(false);
      }
    } catch {
      setIsDismissed(false);
    }
  }, []);

  const handleAccept = () => {
    setIsDismissed(true);
    try {
      localStorage.setItem('very_vocab_consent', 'true');
    } catch {
      // ignore
    }
  };

  if (isDismissed) return null;

  return (
    <aside 
      className="compliance-banner"
      role="region"
      aria-label="Privacy and Local Storage Notice"
    >
      <div className="compliance-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShieldCheck size={20} strokeWidth={2.5} />
          <span style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            ZERO COOKIES, ZERO WEIRD TRACKING:
          </span>
        </div>
        <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0, color: '#111' }}>
          Real talk: this site runs 100% in your browser. We don't track you, we don't sell your data, and we don't even have a database. Your saved words stay on your own device. Peep our{' '}
          <button 
            type="button" 
            className="legal-inline-link"
            onClick={() => onOpenLegal('terms')}
          >
            Terms of Use
          </button>
          {' '}and{' '}
          <button 
            type="button" 
            className="legal-inline-link"
            onClick={() => onOpenLegal('privacy')}
          >
            Privacy Policy
          </button>
          {' '}if you want the boring details.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
        <button 
          className="nb-btn nb-btn-sm"
          style={{ padding: '0.4rem 0.65rem', fontSize: '0.75rem' }}
          onClick={() => onOpenLegal('disclaimer')}
        >
          <Info size={14} />
          BORING LEGAL STUFF
        </button>
        <button 
          className="nb-btn nb-btn-sm nb-btn-yellow"
          style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
          onClick={handleAccept}
        >
          <Check size={14} />
          BET / GOT IT 👍
        </button>
      </div>
    </aside>
  );
}
