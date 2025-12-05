import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
  <div className="header-top-border" />

  <div className="container header-inner">
    {/* לוגו בצד ימין */}
    <div className="header-logo">
      <img src="/images/logo.png" alt="אלה מלניקוב לוגו" />
      <div className="logo-text">
        <span className="logo-name">אלה מלניקוב, MA</span>
        <span className="logo-sub">פסיכותרפיסטית</span>
      </div>
    </div>

    {/* תפריט ניווט במרכז */}
    <nav className="main-nav main-nav-centered">
      <NavLink to="/" end>
        בית
      </NavLink>
      <NavLink to="/about">אודות</NavLink>
      <NavLink to="/therapy">טיפול אישי</NavLink>
      <NavLink to="/workshops">סדנאות</NavLink>
      <NavLink to="/testimonials">ממליצים</NavLink>
      <NavLink to="/articles">מאמרים</NavLink>
      <NavLink to="/contact">צור קשר</NavLink>
    </nav>
  </div>
</header>

  );
}

export default Header;
