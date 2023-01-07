import { Link } from "react-router-dom";

const Horseriding = () => {
    return (
        <div id="horse-riding-images">
  <div className="row">
    <div className="col-lg-4 col-md-6 my-3">
      <Link data-fancybox="horse-riding" to="assets/images/IMG_5094.jpg">
        {" "}
        <img src="assets/images/IMG_5094.jpg" alt="horse" />
      </Link>
    </div>
    <div className="col-lg-4 col-md-6 my-3">
      <Link data-fancybox="horse-riding" to="assets/images/IMG_6537.jpg">
        {" "}
        <img src="assets/images/IMG_6537.jpg" alt="horse" />
      </Link>
    </div>
    <div className="col-lg-4 col-md-6 my-3 my-3">
      <Link data-fancybox="horse-riding" to="assets/images/IMG_6642.jpg">
        {" "}
        <img src="assets/images/IMG_6642.jpg" alt="horse" />
      </Link>
    </div>
  </div>
</div>

    )
}
export default Horseriding;