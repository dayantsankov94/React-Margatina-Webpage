import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
  <div className="container">
    <footer className="d-flex flex-wrap py-2 bg-dark  border-top">
      <div className="col-12 col-md-4 justify-content-center justify-content-lg-center d-flex my-lg-0">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span className="mb-3 mb-md-0">© Personal Villa Webpage, 2023</span>
      </div>
      <div className="col-12 col-md-4 justify-content-center justify-content-lg-center d-flex my-lg-0">
        <div className="logo">
          <Link to="/">
            <img src="assets/images/logo.png" alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-4 justify-content-center justify-content-lg-center d-flex my-lg-0">
        <ul className="nav col-lg-4 col-md-6 col-sm-12 justify-content-end d-flex">
          <li>
            <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
              <span className="fa fa-2x fa-facebook m-2" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
              <span className="fa fa-2x fa-instagram m-2" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</div>

    )
}
export default Footer;