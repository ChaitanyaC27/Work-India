import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  // 👉 Paste your Google Apps Script Web App URL here
  const scriptURL = "https://script.google.com/macros/s/AKfycbz9PbfH1AZXZo7b-ejTd45XYxRKL6ZviREEW3gYSLu5gdq5DrC2lKtji8IEnHD3SsklEQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us. We'll get back to you soon 😊",
          confirmButtonColor: "#3085d6",
        });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet connection and try again.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="fw-bold mb-3 text-primary text-center">Book a Service</h2>
        <p className="text-dark fs-5 lh-lg text-center">Tell us what you need, Our skilled professionals will reach you soon!</p>

        <div className="row g-5 mt-2">
          {/* 📨 Contact Form */}
          <div className="col-md-6">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="form-control mb-3"
                type="tel"
                name="phone"
                placeholder="Phone"
                required
              />
              <input
                className="form-control mb-3"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="form-control mb-3"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>

              <button
                className="btn btn-primary w-100"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* 🗺️ Google Map (Pune) */}
          <div className="col-md-6">
            <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.955426501548!2d73.85674337590353!3d18.52043067102224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06b3f0a8f77%3A0xdea9b0a3ecaa9a43!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1661762922435!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pune Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
