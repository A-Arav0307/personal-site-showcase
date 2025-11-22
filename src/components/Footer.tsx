const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Alex Johnson. All rights reserved.
        </p>
        <p className="text-sm text-primary-foreground/80 mt-2">
          Designed & Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
