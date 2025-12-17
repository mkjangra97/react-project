import React from 'react';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="badge">
                    New Version Arrived !
                </div>
                <h1 className="title">
                    Build faster with <span className="gradient-text">React & Vite</span>
                </h1>
                <p className="subtitle">
                    Experience the next generation of frontend tooling.
                    Instant server start, lightning fast HMR, and rich features.
                </p>
                <div className="actions flex">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary"><a href="https://github.com/mkjangra97/react-project">View Docs</a></button>
                </div>
            </div>

            <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .badge {
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-primary-glow);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--color-primary-glow) 0%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--color-text-dim);
          max-width: 600px;
        }

        .actions {
          margin-top: 1rem;
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-sm);
          border: none;
          font-weight: 600;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--color-text);
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255,255,255,0.1);
          font-weight: 600;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
        }
      `}</style>
        </section>
    );
};

export default Hero;
