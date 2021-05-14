import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

<<<<<<< HEAD
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("You message has been sent!!!");
    }
  };
=======
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!formdata.name) {
  //     setError(true);
  //     setMessage("Name is required");
  //   } else if (!formdata.email) {
  //     setError(true);
  //     setMessage("Email is required");
  //   } else if (!formdata.subject) {
  //     setError(true);
  //     setMessage("Subject is required");
  //   } else if (!formdata.message) {
  //     setError(true);
  //     setMessage("Message is required");
  //   } else {
  //     setError(false);
  //     setMessage("You message has been sent!!!");
  //   }
  // };
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // Reconstructed handleChange in the works
  // function handleChange(e) {
  //   setFormdata((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  // const submitEmail = async (e) => {
  //   e.preventDefault();
  //   console.log({ formdata });
  //   const response = await fetch("http://localhost:3001/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ formdata }),
  //   })
  //     .then((res) => res.json())
  //     .then(async(res) => {
  //       const resData = await res;
  //       console.log(resData);
  //       if (resData.status === "success") {
  //         alert("Message Sent");
  //       } else if (resData.status === "fail") {
  //         alert("Message failed to send");
  //       }
  //     })
  //     .then (() => {
  //       setFormdata({
  //         email: "",
  //         name: "",
  //         subject: "",
  //         message: "",
  //       });
  //     });
  // };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ formdata });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formdata }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
<<<<<<< HEAD
          alert("Message Sent");
=======
          setMessage("Message Sent!");
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setFormdata({
<<<<<<< HEAD
          email: "",
          name: "",
=======
          name: "",
          email: "",
          subject: "",
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
          message: "",
        });
      });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact Page"
        />
      </Helmet>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form
                  
<<<<<<< HEAD
                  action="#"
=======
                  // action="#"
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
                  className="mi-form mi-contact-form"
                  onSubmit={submitEmail}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formdata.name}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Enter your email*
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      Enter your subject*
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formdata.subject}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      Enter your Message*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}
                      required
                    ></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {/* {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map((phoneNumber) => (
                        <p key={phoneNumber}>
                          <a href={numberFormatter(phoneNumber)}>
                            {phoneNumber}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                )} */}
                {/* {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map((email) => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )} */}
                {/* {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
