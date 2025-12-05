import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("הטופס נשלח! נחזור אליך בהקדם.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <h1>צור קשר</h1>
      <p>אשמח לסייע גם לכם! מלאו את הטופס ואחזור אליכם בהקדם.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            שם
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            טלפון
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            אימייל
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          הודעה
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit" className="btn-primary">
          שלח
        </button>
      </form>
    </section>
  );
}

export default Contact;
