import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [images, setImages] = useState([]);

    const scriptURL = "https://script.google.com/macros/s/AKfycbzLRlrIF8rZp92pkhJlZyfjHsw1wiBzx8-LqcO04QVkIn9FAz_qEJQ43X6T-9fhmPCrHw/exec"; // Replace with your web app URL

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        // Convert images to Base64
        const base64Images = await Promise.all(
            images.map(
                (file) =>
                    new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    })
            )
        );

        data.images = base64Images;

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.status === "success") {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    text: "Your details have been submitted successfully 🎉",
                    confirmButtonColor: "#3085d6",
                });
                formRef.current.reset();
                setImages([]);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Please check your internet connection.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="py-5" id="worker-register">
            <div className="container">
                <h2 className="fw-bold mb-3 text-primary text-center">Join as Worker</h2>
                <p className="text-dark fs-5 lh-lg text-center">Show your skills and join our team to get trusted work opportunities!</p>
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-4">
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

                            />
                            <input
                                className="form-control mb-3"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                required
                            />
                            <select className="form-control mb-3" name="role" required>
                                <option value="">Select Your Role</option>
                                <option value="Painter">Painter</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Plumber">Plumber</option>
                                <option value="House Cleaner">House Cleaner</option>
                                <option value="Gardener">Gardener</option>
                                <option value="Delivery Service">Delivery Service</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                className="form-control mb-3"
                                name="message"
                                placeholder="City / Address"
                                rows="4"
                                required

                            ></textarea>
                            
                            <p className="text-dark">Upload Your Work</p>
                            <input
                                className="form-control mb-3"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                                required
                            />

                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
