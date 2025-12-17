import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'Instant Server Start',
            desc: 'On demand file serving over native ESM, no bundling required!',
            icon: '⚡'
        },
        {
            title: 'Lightning Fast HMR',
            desc: 'Hot Module Replacement that stays fast regardless of app size.',
            icon: '🔥'
        },
        {
            title: 'Rich Features',
            desc: 'Out-of-the-box support for TypeScript, MAX, CSS Modules, and more.',
            icon: '🛠️'
        }
    ];

    return (
        <section className="features container">
            <div className="grid grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="card">
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>

            <style>{`
        .grid-cols-3 {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card {
          background: var(--color-surface);
          padding: 2rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 40%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .card:hover::before {
          opacity: 1;
        }

        .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        p {
          color: var(--color-text-dim);
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Features;
