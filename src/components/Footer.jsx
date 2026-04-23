import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/purushothamanmernd',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/purushothamanlabi/',
    icon: FaGithub,
  },
  {
    label: 'Naukri',
    href: 'https://www.naukri.com/',
    image: '/social/naukri.png',
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 pt-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 border-y border-slate-700/25 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-end lg:py-12">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-300/70" />
              <span>Final note</span>
            </div>

            <h2 className="max-w-xl text-3xl font-black leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Let&apos;s build something useful together.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Open to full-stack products, cybersecurity platforms, SaaS work, and AI automation builds.
            </p>
          </div>

          <div className="md:text-right">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Connect
            </p>

            <ul className="flex flex-wrap gap-3 md:justify-end">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="group inline-flex h-11 items-center gap-3 rounded-full border border-slate-700/40 bg-slate-950/30 px-4 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-cyan-400/45 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4" />
                      ) : (
                        <span className="flex h-4 w-14 items-center">
                          <img
                            src={link.image}
                            alt=""
                            className="h-5 w-auto max-w-[3.75rem] object-contain"
                          />
                        </span>
                      )}
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="mailto:purushothamand.dev@gmail.com"
              className="mt-6 inline-flex text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
            >
              purushothamand.dev@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Designed and built by Purushothaman Abi</span>
          <span>Full-stack Developer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
