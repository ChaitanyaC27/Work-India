import { Link } from "react-router-dom";

const services = [
  {
    title: "Plumbers",
    img: "./assets/s3.png",
    description:
      "Expert Plumbers available for all your Plumbing needs. Get reliable and efficient service at your Doorstep.",
  },
  {
    title: "Electricians",
    img: "./assets/s2.png",
    description:
      "Skilled Electricians at your service for all electrical installations and repairs. Trust our experts for safe and reliable solutions.",
  },
  {
    title: "Painters",
    img: "./assets/new painter icon.jpg",
    description:
      "Enhance the beauty of your space with our professional painters. High-quality paintwork to give your property a fresh look.",
  },
  {
    title: "Carpenters",
    img: "./assets/new carpenter icon.jpg",
    description:
      "Skilled Carpenters for furniture repairs, custom-made designs, or any woodworking needs. Quality craftsmanship guaranteed.",
  },
  {
    title: "House Cleaners",
    img: "./assets/house cleaner icon.jpg",
    description:
      "Experienced house cleaners to keep your home sparkling clean. Avail top-notch cleaning services with just a call.",
  },
  {
    title: "Gardeners",
    img: "./assets/gardener icon.jpg",
    description:
      "Get your garden transformed by our expert gardeners. From landscaping to maintenance, we provide comprehensive services.",
  },
  {
    title: "Delivery Services",
    img: "./assets/delivery service icon.jpg",
    description:
      "Need a reliable delivery person? Our efficient couriers ensure your packages are delivered on time with utmost care.",
  },
];

const Services = () => {
  return (

    <section
      className="service_section py-5"
      style={{
        background: "linear-gradient(135deg, #f9fafc 0%, #eef2f7 100%)",
      }}
    >
      <div className="container">
        <div
          className="heading_container text-center mb-5"
          data-aos="fade-down"
        >
          <h2 className="fw-bold mb-3 text-primary">Our Services</h2>
          <p className="text-dark fs-5 lh-lg">
            Reliable professionals, top-quality work, and complete customer
            satisfaction, all in one place.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-sm-6 col-md-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-card text-center p-4 rounded-4 shadow-lg h-100">
                <div className="service-icon mb-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid service-img"
                  />
                </div>
                <h5 className="fw-bold mb-2 text-dark">{service.title}</h5>
                <p className="text-dark mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
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
    </section>
  );
};

export default Services;