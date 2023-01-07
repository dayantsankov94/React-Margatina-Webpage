import { Link } from "react-router-dom";


const Swimming = () => {
    return (
        <div id="swimming-pool-images">
            <div className="row">
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="swimming-pool" to="assets/images/IMG_5195.JPG">
                        {" "}
                        <img src="assets/images/IMG_5195.JPG" alt="swimming-pool" />
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="swimming-pool" to="assets/images/IMG_5220.jpg">
                        {" "}
                        <img src="assets/images/IMG_5220.jpg" alt="swimming-pool" />
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 my-3">
                    <Link data-fancybox="swimming-pool" to="assets/images/IMG_5216.jpg">
                        {" "}
                        <img src="assets/images/IMG_5216.jpg" alt="swimming-pool" />
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Swimming;