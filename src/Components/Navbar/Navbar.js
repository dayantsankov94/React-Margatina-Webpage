import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle';
const { Link } = require("react-router-dom")


const Nabvar = () => {
    const [showCollapsed, setShowCollapsed] = useState(false);

    const clickHandler = () => {
        setShowCollapsed(!showCollapsed);
    }
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
                        aria-controls="navmenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={clickHandler}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={showCollapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navmenu">
                        <ul className="navbar-nav ms-auto m-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" onClick={clickHandler}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link" onClick={clickHandler}>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/activities" className="nav-link" onClick={clickHandler}>
                                    Activities
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" onClick={clickHandler}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link" onClick={clickHandler}>
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