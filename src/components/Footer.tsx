const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-display font-bold tracking-tighter">
          <span className="gradient-text">TECHNO</span>
          <span className="text-foreground">VATE</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechnovAte. Built by developers, for developers.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {["GitHub", "Twitter", "Discord"].map((link) => (
            <a key={link} href="#" className="hover:text-primary transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
