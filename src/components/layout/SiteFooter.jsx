export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>&copy; {new Date().getFullYear()} DashRush</p>
        <p>Your next game starts here.</p>
      </div>
    </footer>
  );
}
