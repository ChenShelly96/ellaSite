import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// קרוסלת המלצות – טקסטואלית
const testimonialsData = [
  {
    text: "הגעתי עם תחושת עומס ושחיקה מתמשכת. היום יש לי ארגז כלים שמאפשר לי לשמור על שקט פנימי גם בתקופות מאתגרות.",
    name: "אורן",
    role: "מטופל",
  },
  {
    text: "הסדנה עם אלה הייתה חווייה משמעותית לצוות. העובדים יצאו רגועים יותר עם כלים מעשיים להתמודדות עם סטרס.",
    name: "יעל",
    role: "מנהלת צוות",
  },
  {
    text: "בטיפול האישי אצל אלה הרגשתי לראשונה שמקשיבים לי באמת. היא יצרה עבורי מרחב מכיל, שקט ובטוח.",
    name: "שירי",
    role: "מטופלת",
  },
  {
    text: "התרגולים שלמדתי אצלך מלווים אותי גם בעבודה וגם בבית. אני הרבה יותר רגועה ופחות מוצפת.",
    name: "דנה",
    role: "משתתפת בסדנה",
  },
];

function Home() {
  // טופס יצירת קשר בעמוד הבית
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // אינדקס של ההמלצה הפעילה בקרוסלה
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // גלגל אוטומטי של המלצות כל כמה שניות
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % testimonialsData.length
      );
    }, 8000); // כל 8 שניות

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Home contact form submitted:", formData);
    alert("הטופס נשלח! נחזור אליך בהקדם.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev + 1) % testimonialsData.length
    );
  };

  const activeTestimonial = testimonialsData[currentTestimonial];

  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-text">
          <h1>אלה מלניקוב | פסיכותרפיסטית</h1>
          <h2>סדנאות וטיפולים להפחתת סטרס ולחיזוק החוסן הנפשי</h2>

          {/* נעים להכיר + תמונה */}
          <div className="hero-intro-card">
            <div className="hero-intro-image">
              {/* ניתן להחליף לתמונה אמיתית של אלה */}
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg"
                alt="אלה מלניקוב"
              />
            </div>

            <div className="hero-intro-content">
              <h3>נעים להכיר,</h3>
              <p>
                אני אלה מלניקוב, MA, פסיכותרפיסטית. מטפלת במצבי משבר, לחץ ודחק,
                יועצת זוגית ומשפחתית ומנחת קבוצות. מפתחת סדנת עוצמת המיקוד
                הפנימי.
              </p>
              <p>
                מזמינה אתכם לסדנאות חווייתיות או למפגשים פרטניים שיסייעו להפחית
                סטרס, להגביר חוסן נפשי ולשפר את איכות החיים.
              </p>

              <Link to="/about" className="btn-secondary">
                עוד עלי...
              </Link>
            </div>
          </div>

          {/* הטקסט שמתחת לנעים להכיר */}
          <div className="hero-body-text">
            <p>עם השנים, העולם הופך יותר ויותר דינמי, תחרותי ותובעני בכל תחומי החיים. לתופעה זו השלכה ישירה על המצב הנפשי של כולנו. אנו מרגישים צורך פנימי להיות יותר, להשיג יותר, להרשים יותר ולהתאים את עצמנו לסטנדרטים ולמצבים משתנים מדי יום. כתוצאה, לחץ, סטרס וחרדה הפכו להיות חלק בלתי נפרד משגרת חיינו. כאשר נוספים לכך מצבי חרום (ביטחוני/ כלכלי/ בריאותי) – רמת הסטרס גוברת במיוחד ופוגעת בחוסן הנפשי ובתפקוד היומיומי.
            </p>

            <p>איך מתפקדים בחוויה של סטרס יומיומי? איך מחזירים לעצמנו את השקט הנפשי, החיוניות ושמחת החיים?
כיום, העולם המערבי מבין, יותר ויותר, את הקשר ההדוק בין גוף ונפש, וכאן טמון הפתרון. אנו יודעים לשלב ידע מדעי מתקדם עם החוכמה העתיקה של תרבויות המזרח ואלה מספקים לנו מגוון כלים ליצירת שקט פנימי ולחיזוק הגוף והנפש. 

            </p>
          </div>
        </div>
      </div>

      <section className="services-section">
  <div className="service-card">
    <img
        src="/images/icons8-workshop-64.png"
      alt="אייקון סדנאות"
      className="service-icon"
    />

    <h3>סדנאות</h3>

    <p>
      סדנאות חווייתיות להורדת סטרס, חיזוק חוסן נפשי והעצמה קבוצתית.  
      מותאם לארגונים, צוותים וחברות.
    </p>

    <Link to="/workshops" className="service-btn">
      מידע על סדנאות
    </Link>
  </div>

  <div className="service-card">
    <img
       src="/images/icons8-therapy-48.png"
      alt="אייקון טיפול אישי"
      className="service-icon"
    />

    <h3>טיפול אישי</h3>

    <p>
      פסיכותרפיה אישית בגישה רגישה ומעמיקה, המסייעת להפחתת חרדה,  
      התמודדות רגשית ויצירת בהירות פנימית.
    </p>

    <Link to="/therapy" className="service-btn">
      מידע על טיפול אישי
    </Link>
  </div>
</section>


      {/* קרוסלת המלצות – טקסטואלית */}
      <section className="testimonials-preview">
        <h2>לקוחות מספרים</h2>
        <p className="testimonials-subtitle">
          חלק קטן מהחוויות של משתתפים ומטופלים שעברו תהליך עם אלה.
        </p>

        <div className="testimonials-slider">
          <button
            type="button"
            className="testimonial-nav-btn"
            onClick={handlePrevTestimonial}
            aria-label="המלצה קודמת"
          >
            ‹
          </button>

          <div className="testimonial-slide">
            <p className="testimonial-text">“{activeTestimonial.text}”</p>
            <p className="testimonial-name">־ {activeTestimonial.name}</p>
            <p className="testimonial-role">{activeTestimonial.role}</p>
          </div>

          <button
            type="button"
            className="testimonial-nav-btn"
            onClick={handleNextTestimonial}
            aria-label="המלצה הבאה"
          >
            ›
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === currentTestimonial
                  ? "testimonial-dot active"
                  : "testimonial-dot"
              }
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`הצג המלצה מספר ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* טופס יצירת קשר בתחתית העמוד – בתוך בלוק נפרד */}
      <section className="home-contact-section">
        <div className="home-contact-card">
          <h2>אשמח לסייע גם לכם!</h2>
          <p>מלאו את הפרטים ואחזור אליכם בהקדם.</p>

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
        </div>
      </section>
    </section>
  );
}

export default Home;
