const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 flex items-center justify-between md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Kshitij Rattan"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>
          Navbar
        </div>

        <a href="#contact">Contact Me</a>
      </div>
    </header>
  );
};

export default Header;
