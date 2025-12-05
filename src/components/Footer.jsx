import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>פרטי התקשרות</h4>
          <p>טלפון: 052-0000000</p>
          <p>אימייל: ela@example.com</p>
          <p>כתובת: רמת גן</p>
        </div>

        <div>
          <h4>קישורים מהירים</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">בית</Link>
            </li>
            <li>
              <Link to="/workshops">סדנאות</Link>
            </li>
            <li>
              <Link to="/therapy">טיפול אישי</Link>
            </li>
            <li>
              <Link to="/articles">מאמרים</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © כל הזכויות שמורות לאלה מלניקוב
      </div>
    </footer>
  );
}

export default Footer;
