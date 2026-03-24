import React from 'react';

const links = [
  {
    title: 'itch.io',
    subtitle: 'Play current releases and prototypes',
    href: 'https://solaraslight.itch.io/'
  },
  {
    title: 'Professional Portfolio',
    subtitle: 'Santhosh LE',
    href: 'https://www.santhoshle.dev/'
  },
  {
    title: 'Instagram',
    subtitle: 'Dev shots',
    href: 'instagram.com/solaraslight'
  },
  {
    title: 'Youtube',
    subtitle: 'Demos',
    href: 'https://www.youtube.com/@solaraslight'
  },
  {
    title: 'X / Twitter',
    subtitle: 'Dev updates',
    href: 'https://twitter.com/solaraslight'
  }
];

const Contact: React.FC = () => {
  return (
    <div className="bg-solaras-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          FIND <span className="text-solaras-accent">SOLARAS LIGHT</span>
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          This section now focuses on real public destinations instead of a non-functional contact form.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="block group p-6 bg-solaras-panel rounded-xl hover:bg-white/10 transition border border-white/10 hover:border-solaras-accent"
            >
              <h3 className="text-white font-bold text-lg group-hover:text-solaras-accent transition-colors">{link.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{link.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
