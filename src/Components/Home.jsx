import { Link } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"


const Home = () => {
  return (
    <>
      <section
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundColor: "#dce9ff",
          minHeight: "85vh",
          overflow: "hidden",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center justify-content-between">
            {/* LEFT CONTENT */}
            <div className="col-md-6 mb-5 mb-md-0">
              <h1
                className="fw-bold text-primary mb-3"
                style={{ fontSize: "2.7rem", lineHeight: "1.3" }}
              >
                Get Professional Workers at Your Doorstep
              </h1>
              <p className="text-dark mb-4 fs-5">
                Find skilled Plumbers, Electricians, Painters, and more for all
                your Household Needs.
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

            {/* RIGHT IMAGE */}
            <div className="col-md-5 text-center">
              <img
                src="./assets/slider-img.png"
                alt="Handyman"
                className="img-fluid hero-img"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                  marginBottom: "-80px", // pushes image down to match screenshot
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============== SERVICE CARDS SECTION =============== */}
      <section
        className="service-section pb-5"
        style={{
          backgroundColor: "#ffffff",
          marginTop: "-70px", // overlap effect
          position: "relative",
          zIndex: "5",
        }}
      >
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            {/* REPAIR */}
            <div className="col-md-4 col-sm-6">
              <div className="card service-card border-0 shadow-lg p-4 rounded-3">
                <div className="card-body">
                  <img
                    src="./assets/repair (1).png"
                    alt="Repair"
                    className="img-fluid mb-3"
                    style={{ width: "80px" }}
                  />
                  <h5 className="fw-bold text-primary mt-2">REPAIR</h5>
                  <p className="text-muted mt-2">
                    Quick and efficient repair solutions for your home and
                    appliances.
                  </p>
                </div>
              </div>
            </div>

            {/* IMPROVE */}
            <div className="col-md-4 col-sm-6">
              <div className="card service-card border-0 shadow-lg p-4 rounded-3" style={{ backgroundColor: "#ffeed1ff" }} >
                <div className="card-body">
                  <img
                    src="./assets/Repair.png"
                    alt="Repair"
                    className="img-fluid mb-3"
                    style={{ width: "80px" }}
                  />
                  <h5 className="fw-bold text-primary mt-2">IMPROVE</h5>
                  <p className="text-dark mt-2">
                    Professional improvement services to enhance your living
                    space.
                  </p>
                </div>
              </div>
            </div>


            {/* MAINTAIN */}
            <div className="col-md-4 col-sm-6">
              <div className="card service-card border-0 shadow-lg p-4 rounded-3">
                <div className="card-body">
                  <img
                    src="./assets/repair (2).png"
                    alt="Maintain"
                    className="img-fluid mb-3"
                    style={{ width: "80px", borderRadius: "15px" }}
                  />
                  <h5 className="fw-bold text-primary mt-2">MAINTAIN</h5>
                  <p className="text-muted mt-2">
                    Keep your home in top condition with regular maintenance and
                    expert support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
    </>

  )
}

export default Home