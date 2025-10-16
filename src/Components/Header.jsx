const Header = () => {
  return (
    <div className="hero_area">
      <div
        className="container-fluid py-2 bg-dark"
      >
        <div className="d-flex justify-content-between align-items-center px-4 col-md-12">
          {/* Left Side - Contact with Image */}
          <div className="d-flex align-items-center gap-2">
            {/* Replace src with your image */}
            <img
              src="./assets/phone-p.png"
              alt="logo"
              style={{ width: "35px", height: "35px", objectFit: "contain", marginRight: "5px" }}
            />
            <a
              href="tel:91+ 8765432199"
              className="text-decoration-none text-light"
            >
              91+ 9876543219
            </a>
          </div>

          {/* Right Side - Email */}
          <div>

            <img
              src="./assets/mail-m.png"
              alt="logo"
              style={{ width: "35px", height: "35px", objectFit: "contain", marginRight: "5px" }}
            />
            <a
              href="mailto:workindia@gmail.com"
              className="text-decoration-none text-light"
            >
              workindia@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
