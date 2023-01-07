import { Link } from "react-router-dom";


const Swing = () => {
    return (
        <div id="bed-swing-images">
            <div className="row">
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="bed-swing" to="assets/images/IMG_5094.jpg">
                        {" "}
                        <img src="assets/images/1650802801293748.jpg" alt="bed-swing" />
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="bed-swing" to="assets/images/IMG_6642.jpg">
                        {" "}
                        <img src="assets/images/IMG_3788.jpg" alt="bed-swing" />
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="bed-swing" to="assets/images/IMG_6537.jpg">
                        {" "}
                        <img src="assets/images/1658317780724706.jpg" alt="bed-swing" />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Swing;