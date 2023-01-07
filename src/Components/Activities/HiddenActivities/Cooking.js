import { Link } from "react-router-dom";


const Cooking = () => {
    return (
<div id="cooking-images">
  <div className="row">
    <div className="col-lg-4 col-md-6 my-3">
      <Link data-fancybox="cooking-images" to="assets/images/IMG_1713.jpg">
        {" "}
        <img src="assets/images/IMG_1713.jpg" alt="cooking" />
      </Link>
    </div>
    <div className="col-lg-4 col-md-6 my-3">
      <Link data-fancybox="cooking-images" to="assets/images/IMG_1656.jpg">
        {" "}
        <img src="assets/images/IMG_1656.jpg" alt="cooking" />
      </Link>
    </div>
    <div className="col-lg-4 col-md-6 my-3">
      <Link data-fancybox="cooking-images" to="assets/images/IMG_3531.jpg">
        {" "}
        <img src="assets/images/IMG_3531.jpg" alt="cooking" />
      </Link>
    </div>
  </div>
</div>

    )
}
export default Cooking;