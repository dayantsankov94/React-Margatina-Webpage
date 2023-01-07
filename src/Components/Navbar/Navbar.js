const { Link } = require("react-router-dom")


const Nabvar = () => {
    return (
        <>
            <div className="logo-image m-auto">
                <Link to="/">
                    <img src="assets/images/logo.png" alt="Logo" />
                </Link>
            </div>
            {/*Navbar*/}
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark d-flex">
                    <button
                        className="navbar-toggler m-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto m-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/activities" className="nav-link">
                                    Activities
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Nabvar;