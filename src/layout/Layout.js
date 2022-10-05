const Layout = ({ title, children }) => {
  return (
    <main className="container-wrapper">
      <nav>{title}</nav>
      <section className="container">{children}</section>
    </main>
  );
};

export default Layout;
