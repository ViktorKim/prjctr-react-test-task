export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <span className="text-muted">&copy; {CURRENT_YEAR} My notes</span>
      </div>
    </footer>
  );
};
