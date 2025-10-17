const Header = () => {
  return (
    <div className="hero_area">
      <div className="container-fluid py-2 bg-dark">
        <div
          className="d-flex justify-content-between align-items-center px-3 px-md-4 flex-wrap"
          style={{ rowGap: "4px" }}
        >
          {/* Left Side - Phone */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="./assets/phone-p.png"
              alt="phone"
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
              }}
            />
            <a
              href="tel:+919876543219"
              className="text-decoration-none text-light small"
            >
              +91 9876543219
            </a>
          </div>

          {/* Right Side - Email */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="./assets/mail-m.png"
              alt="mail"
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
              }}
            />
            <a
              href="mailto:workindia@gmail.com"
              className="text-decoration-none text-light small"
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
