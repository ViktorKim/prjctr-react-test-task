export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My notes
          </a>

          <div className="col-6 col-sm-5 col-md-4 col-lg-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <button className="btn btn-success" type="button">
                <i className="bi bi-search" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
