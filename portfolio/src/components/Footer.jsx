import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Work",
    href: "#work-history",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
        href: "https://github.com/Ksh07",

  },
  {
    label: "LinkedIn",
      href: "https://www.linkedin.com/in/kshitij-rattan-3976b9232/",

  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/kshcodes/",
  },
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2  mb-8 lg:max-w-[12ch] reveal-up">
            Thanks for visiting!
          </h2>
          
           <ButtonPrimary
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijrattan03@gmail.com"
  target="_blank"
  label="Connect"
  icon="chevron_right"
  classes="reveal-up flex items-center"
  iconClass="connectBtn"
/>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; {new Date().getFullYear()} <span className="text-zinc-200 reveal-up">Kshitij Rattan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
