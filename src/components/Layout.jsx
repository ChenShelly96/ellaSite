import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main className="site-main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
