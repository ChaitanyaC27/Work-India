import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <>
      {/* Info Section */}
      <section className="info_section py-5" style={{ backgroundColor: "#dce9ff" }}>
        <div className="container text-center">
          <h4 className="fw-bold mb-4">Get In Touch</h4>

          {/* Contact Items */}
          <div className="row justify-content-center g-4">
            <div className="col-md-3 col-sm-6">
              <a href="#!" className="text-decoration-none text-dark">
                <div className="d-flex flex-column align-items-center gap-2 p-3 border rounded shadow-sm h-100">
                  <div className="img-box mb-2">
                    <img
                      src="./assets/Location (1).png"
                      alt="location"
                      className="img-fluid"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  <p className="mb-0 fw-semibold">At Your Doorstep</p>
                </div>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="tel:+021234567890" className="text-decoration-none text-dark">
                <div className="d-flex flex-column align-items-center gap-2 p-3 border rounded shadow-sm h-100">
                  <div className="img-box mb-2">
                    <img
                      src="./assets/phone-p.png"
                      alt="Call"
                      className="img-fluid"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  <p className="mb-0 fw-semibold">91+ 9876543219</p>
                </div>
              </a>
            </div>

            <div className="col-md-3 col-sm-6">
              <a href="mailto:workindia@gmail.com" className="text-decoration-none text-dark">
                <div className="d-flex flex-column align-items-center gap-2 p-3 border rounded shadow-sm h-100">
                  <div className="img-box mb-2">
                    <img
                      src="./assets/mail-m.png"
                      alt="Email"
                      className="img-fluid"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </div>
                  <p className="mb-0 fw-semibold">workindia@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-box mt-5">
            <h4 className="fw-bold mb-3">Follow Us</h4>
            <div className="d-flex justify-content-center gap-4 fs-4">
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src="./assets/facebook.png"
                  alt="Email"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>

              <a href="https://x.com/" target="_blank">
                <img
                  src="./assets/twitter-x.png"
                  alt="Email"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                <img
                  src="./assets/youtube.png"
                  alt="Email"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>

              <a href="https://www.instagram.com/" target="_blank">
                <img
                  src="./assets/instagram.png"
                  alt="Email"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section py-3 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">
            &copy; {year} <Link to={"/"} className="text-decoration-none text-white">Work India</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
