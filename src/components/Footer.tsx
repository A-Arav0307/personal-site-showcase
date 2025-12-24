const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Aarav Gupta. All rights reserved.
        </p>
        <p className="text-sm text-white/80 mt-2">
          Designed & Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
