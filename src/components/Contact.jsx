import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  const sendEmail = (formData) => {
    setButtonText("Sending...");
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          formRef.current.reset();
          setButtonText("Send");
          setStatus({ success: true, message: "Message sent successfully!" });
          setTimeout(() => setStatus({}), 5000);
          console.log("SUCCESS!");
        },
        (error) => {
          setButtonText("Send");
          setStatus({ success: false, message: `Error: ${error.text}` });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form ref={formRef} onSubmit={handleSubmit(sendEmail)}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <p className="error">First Name is required.</p>
                  )}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <p className="error">Last Name is required.</p>
                  )}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="error">Email is required.</p>}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  {errors.phone && (
                    <p className="error">Phone No. is required.</p>
                  )}
                  {errors.phone && errors.phone.type === "type" && (
                    <p className="error">Invalid phone number.</p>
                  )}
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p className="error">Message is required.</p>
                  )}
                  <div className="button-status-response">
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                    {status.message && (
                      <p className={status.success ? "success" : "error"}>
                        {status.message}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
