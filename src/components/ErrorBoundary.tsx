import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertOctagon, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in VERY+ Application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#F4F0EA'
        }}>
          <div className="nb-card" style={{ maxWidth: '560px', width: '100%', padding: '2.5rem', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#FF5A36',
              color: '#FFFFFF',
              border: '4px solid #000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '4px 4px 0px #000'
            }}>
              <AlertOctagon size={36} />
            </div>

            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              APPLICATION ERROR
            </h1>
            <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              An unexpected condition occurred. Your saved words and vocabulary bank remain safe in your local browser storage.
            </p>

            <button
              className="nb-btn nb-btn-yellow"
              style={{ width: '100%' }}
              onClick={() => window.location.reload()}
            >
              <RotateCcw size={18} />
              RELOAD APPLICATION
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
