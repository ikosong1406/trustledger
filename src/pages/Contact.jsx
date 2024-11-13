import "../styles/Contact.css";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  // const userCollectionRef = collection(db, "contactdata");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   addDoc(userCollectionRef, {
  //     name: name,
  //     email: email,
  //     subject: subject,
  //     message: message,
  //   })
  //     .then(() => {
  //       alert("form submitted Successfully");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const mapRef = useRef(null);

  return (
    <div className="contactMain">
      <div className="contactDiv1">
        <h1>Contact Us</h1>
        <h3>
          13th floor, Gold & Silver commercial building, nos. 12-18 Mercer
          street, Hong Kong
        </h3>
        <h3>
          17th floor, 800 #rd Ave Suite 2800, New York, NY 10022, United States
        </h3>
        <h3>
          Australia HQ Melbourne Level 3, 1 Collins Street Melbourne
          VIC 3000 Australia
        </h3>
        <div className="contactDiv11">
          <div className="contactDiv111">
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="contactDiv112">
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required
            />
          </div>
          <div className="contactDiv113">
            <textarea
              placeholder="Message"
              name="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="contactDiv114">
            <button className="flat-button"> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
