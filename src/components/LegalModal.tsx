import { useState } from 'react';
import { ShieldCheck, Scale, Eye, FileText, AlertTriangle, X, Check } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'terms' | 'privacy' | 'ada' | 'disclaimer';
}

export function LegalModal({ isOpen, onClose, initialTab = 'terms' }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'ada' | 'disclaimer'>(initialTab);

  if (!isOpen) return null;

  return (
    <div 
      className="nb-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="nb-modal-content" 
        style={{ maxWidth: '780px', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="nb-modal-header" style={{ backgroundColor: 'var(--yellow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Scale size={24} strokeWidth={2.5} />
            <div>
              <h2 id="legal-modal-title" style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase' }}>
                LEGAL & COMPLIANCE CENTER
              </h2>
              <span className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 700 }}>
                PROTECTED UNDER GLOBAL FAIR USE & LIMITATION OF LIABILITY STATUTES
              </span>
            </div>
          </div>
          <button 
            className="input-clear-btn" 
            style={{ position: 'static', transform: 'none' }}
            onClick={onClose}
            aria-label="Close legal modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Legal Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          borderBottom: '3px solid #000', 
          backgroundColor: '#EDE8DF',
          overflowX: 'auto',
          flexShrink: 0
        }}>
          <button 
            className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <FileText size={15} />
            TERMS OF SERVICE
          </button>
          <button 
            className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <ShieldCheck size={15} />
            PRIVACY (GDPR/CCPA)
          </button>
          <button 
            className={`legal-tab-btn ${activeTab === 'ada' ? 'active' : ''}`}
            onClick={() => setActiveTab('ada')}
          >
            <Eye size={15} />
            ADA / WCAG ACCESSIBILITY
          </button>
          <button 
            className={`legal-tab-btn ${activeTab === 'disclaimer' ? 'active' : ''}`}
            onClick={() => setActiveTab('disclaimer')}
          >
            <AlertTriangle size={15} />
            DISCLAIMERS & INDEMNITY
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="nb-modal-body" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#1A1A1A' }}>
          
          {/* TAB 1: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="legal-notice-box">
                <strong>IMPORTANT:</strong> PLEASE READ THESE TERMS CAREFULLY. BY USING "VERY +", YOU AGREE TO BE FULLY BOUND BY THESE LEGAL PROVISIONS, INCLUDING AN EXPRESS BINDING ARBITRATION AND CLASS ACTION WAIVER.
              </div>

              <h3 className="legal-section-h">1. ACCEPTANCE OF TERMS</h3>
              <p>
                By accessing, browsing, or interacting with <strong>VERY + // VOCAB AMPLIFIER</strong> ("the Application"), you ("the User") enter into a legally binding contract with the developers, operators, and hosting entities ("the Providers"). If you do not consent to any part of these terms, you must discontinue all use immediately.
              </p>

              <h3 className="legal-section-h">2. "AS IS" AND "AS AVAILABLE" WARRANTY DISCLAIMER</h3>
              <p style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '0.82rem', background: '#F5F5F0', padding: '0.75rem', border: '2px solid #000' }}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS PROVIDED STRICTLY ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS, DEFECTS, ERRORS, AND OMISSIONS. THE PROVIDERS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT.
              </p>

              <h3 className="legal-section-h">3. STRICT LIMITATION OF LIABILITY</h3>
              <p>
                UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL THE PROVIDERS, AFFILIATES, AGENTS, CONTRIBUTORS, OR REPOSITORIES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF ACADEMIC STANDING, TEST SCORES, CONTRACT TERMINATION, JOB PROMOTION DENIAL, EMBARRASSMENT AT DINNER PARTIES, OR COMPUTER SYSTEM GLITCHES) ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE APPLICATION OR ANY SUGGESTED VOCABULARY.
              </p>
              <p>
                IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF THE PROVIDERS EXCEED THE AMOUNT PAID BY YOU TO ACCESS THIS FREE WEB APPLICATION (EXACTLY $0.00 USD).
              </p>

              <h3 className="legal-section-h">4. BINDING INDIVIDUAL ARBITRATION & CLASS ACTION WAIVER</h3>
              <p>
                ANY DISPUTE, CONTROVERSY, OR CLAIM ARISING OUT OF OR RELATING TO THIS SOFTWARE SHALL BE RESOLVED EXCLUSIVELY BY FINAL AND BINDING ARBITRATION ON AN INDIVIDUAL BASIS. YOU EXPRESSLY AND IRREVOCABLY WAIVE ANY RIGHT TO COMMENCE, JOIN, OR PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING AGAINST THE PROVIDERS.
              </p>

              <h3 className="legal-section-h">5. GOVERNING LAW</h3>
              <p>
                These terms shall be governed by, construed, and enforced in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </div>
          )}

          {/* TAB 2: PRIVACY (GDPR & CCPA COMPLIANCE) */}
          {activeTab === 'privacy' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="legal-notice-box" style={{ backgroundColor: 'var(--lime)' }}>
                <strong>ZERO SURVEILLANCE COMMITMENT:</strong> We do not track you, sell your information, use third-party advertising trackers, or fingerprint your hardware.
              </div>

              <h3 className="legal-section-h">1. ZERO PERSONAL DATA COLLECTION</h3>
              <p>
                The Application operates as an offline-first, client-side utility. We do not collect, process, record, or transmit:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Your name, email address, physical address, or phone number.</li>
                <li>Biometric, financial, location, or demographic data.</li>
                <li>IP addresses or persistent user identifiers.</li>
              </ul>

              <h3 className="legal-section-h">2. LOCAL CLIENT-SIDE STORAGE</h3>
              <p>
                Features such as your <strong>Saved Words</strong> and compliance banner preferences are stored exclusively on your local device via standard browser <code>localStorage</code>. No telemetry or word usage patterns are synchronized with external servers. You maintain total custody and can purge all stored data anytime using the "Clear All" button or browser settings.
              </p>

              <h3 className="legal-section-h">3. THIRD-PARTY API DICTIONARY QUERIES</h3>
              <p>
                When you input a word not found in the offline database, the browser initiates a direct client-to-server HTTPS lookup to publicly accessible lexicographical APIs (Datamuse and the Free Dictionary API). These lookups transmit only the query token and contain zero Personally Identifiable Information (PII).
              </p>

              <h3 className="legal-section-h">4. GDPR (EU 2016/679) & CCPA/CPRA RIGHTS</h3>
              <p>
                Because no personal data is ever collected or retained by our servers, there is no personal profile to access, rectify, port, or erase. You are fundamentally anonymous.
              </p>

              <h3 className="legal-section-h">5. 100% FREE & AD-FREE COMMITMENT</h3>
              <p>
                The Application is 100% free of charge and strictly ad-free. No commercial ad networks, third-party advertising cookies, sponsored tracking pixels, or behavioral profiles are utilized.
              </p>
            </div>
          )}

          {/* TAB 3: ADA & WCAG 2.1 AA/AAA ACCESSIBILITY STATEMENT */}
          {activeTab === 'ada' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="legal-notice-box" style={{ backgroundColor: 'var(--cyan)' }}>
                <strong>ADA TITLE III COMPLIANCE PLEDGE:</strong> Designed to meet and exceed Web Content Accessibility Guidelines (WCAG) 2.1 Levels A, AA, and AAA standards to ensure universal digital access.
              </div>

              <h3 className="legal-section-h">1. ACCESSIBILITY ARCHITECTURE</h3>
              <p>
                To provide barrier-free access for individuals with visual, motor, auditory, and cognitive disabilities, the Application incorporates:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li><strong>Semantic HTML5 Landmarks:</strong> Strict <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> hierarchy.</li>
                <li><strong>Keyboard Focus Management:</strong> Full keyboard tab navigation with high-visibility <code>3px solid #000</code> focus rings and interactive skip-to-content links.</li>
                <li><strong>Ultra-High Contrast:</strong> Black-on-Yellow (14.5:1 ratio) and Black-on-White (21:1 ratio) far exceeding the WCAG AAA requirement (7:1).</li>
                <li><strong>Dynamic Screen Reader Feedback:</strong> <code>aria-live="polite"</code> regions and explicit <code>aria-label</code> tags on all interactive buttons.</li>
                <li><strong>Native Audio Pronunciation:</strong> Integrated Web Speech API for users requiring auditory reinforcement.</li>
              </ul>

              <h3 className="legal-section-h">2. ACCESSIBILITY REMEDIATION COMMITMENT</h3>
              <p>
                If you encounter any accessibility barrier or have difficulty accessing any element of this application, please submit an issue or remediation notice to the open-source repository. We will remediate verified accessibility issues within fourteen (14) business days.
              </p>
            </div>
          )}

          {/* TAB 4: DISCLAIMERS & FAIR USE */}
          {activeTab === 'disclaimer' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="legal-notice-box" style={{ backgroundColor: '#FFD2CC' }}>
                <strong>NO PROFESSIONAL ADVICE / EDUCATIONAL PURPOSES ONLY:</strong> This software is an informational language exploration tool.
              </div>

              <h3 className="legal-section-h">1. NO PROFESSIONAL, ACADEMIC, OR LEGAL ADVICE</h3>
              <p>
                The substitutions provided (e.g. replacing "very big" with "colossal") are suggestions intended for stylistic prose enhancement. Substituting words does not guarantee improved grades, professional writing standards, courtroom persuasion, or diplomatic accuracy. The Providers are not responsible for unintended connotations or linguistic misunderstandings resulting from automated synonym replacements.
              </p>

              <h3 className="legal-section-h">2. FAIR USE & OPEN LEXICAL ATTRIBUTION</h3>
              <p>
                Definitions, phonetics, and contextual examples are curated under Fair Use (17 U.S.C. § 107) for transformative educational purposes, supplemented by the public domain and openly licensed APIs (Datamuse API and Free Dictionary API). All trademarks, service marks, and trade names referenced remain the property of their respective owners.
              </p>

              <h3 className="legal-section-h">3. DMCA SAFE HARBOR COMPLIANCE (17 U.S.C. § 512)</h3>
              <p>
                In compliance with the Digital Millennium Copyright Act (DMCA), if you believe in good faith that any content hosted or displayed in this Application infringes upon your copyright, you may submit a formal takedown notice specifying the copyrighted work and infringing URL for immediate review.
              </p>

              <h3 className="legal-section-h">4. FULL INDEMNIFICATION</h3>
              <p>
                You agree to defend, indemnify, and hold harmless the Providers and their contributors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of these terms or misuse of the Application.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div style={{ 
          padding: '1rem 1.5rem', 
          borderTop: '3px solid #000', 
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
            REVISION 2026.10 // LEGAL HARDENED
          </span>
          <button 
            className="nb-btn nb-btn-sm nb-btn-yellow"
            onClick={onClose}
          >
            <Check size={16} />
            I UNDERSTAND & ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
