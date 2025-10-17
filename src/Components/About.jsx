import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        className="about_section py-5"
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="detail-box pe-lg-5">
                <h2 className="fw-bold mb-3 text-primary">About Us</h2>
                <p
                  className="text-dark fs-5 lh-lg"
                  style={{ textAlign: "justify" }}
                >
                  <strong>Work India</strong> is a professional service provider
                  dedicated to making your life easier by offering a complete
                  range of skilled workers right at your doorstep. From
                  experienced Plumbers and Electricians to House Cleaners,
                  Gardeners, Painters, Carpenters and Delivery Experts, we
                  ensure reliable and timely services for your every household
                  and professional need.
                </p>
                <p
                  className="text-secondary fs-6"
                  style={{ textAlign: "justify" }}
                >
                  We value your time and trust, that’s why our workers are
                  verified, skilled, and dedicated to providing the best
                  experience possible.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-6 col-md-6">
              <div className="img-box text-center">
                <img
                  src="./assets/about-img.jpg"
                  alt="About Work India"
                  className="img-fluid rounded shadow-lg"
                  style={{
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 text-center">
              <img
                src="./assets/professional-img.png"
                alt="Worker"
                className="img-fluid worker-image"
              />
            </div>

            {/* Right Text */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-3 text-primary">
                WE PROVIDE ALL TYPES OF PROFESSIONAL WORKERS
              </h2>
              <p
                className="text-dark fs-5 lh-lg"
                style={{ textAlign: "justify" }}
              >
                In India our team is dedicated to providing top-notch services
                that meet all your needs. We believe in providing quality
                workmanship and excellent customer service, ensuring that you
                are satisfied with every job we do. Contact us today to
                experience the convenience of having professional workers come
                to you.
              </p>
              <Link
                to={"/book-service"}
                onClick={() => window.scrollTo(0, 0)} // 👈 this line ensures scroll top
              >
                <button
                  className="btn btn-warning text-white fw-bold px-4 py-2 shadow-sm"
                  style={{ borderRadius: "6px" }}
                >
                  Book a Service
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
