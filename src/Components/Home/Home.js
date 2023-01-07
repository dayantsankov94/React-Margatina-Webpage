import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <section className="carousel">
                <div className="container">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="true"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                style={{ backgroundImage: 'url("assets/images/IMG_1889.jpg")' }}
                            >
                                
                            </div>
                            <div
                                className="carousel-item"
                                style={{ backgroundImage: 'url("assets/images/IMG_3784.jpg")' }}
                            >
                                
                            </div>
                            <div
                                className="carousel-item"
                                style={{ backgroundImage: 'url("assets/images/IMG_3783.jpg")' }}
                            >
                                
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            {/*Info*/}
            <section className="info my-4">
                <div className="container">
                    <div id="info-title">
                        <h3>Informantion</h3>
                        <p>
                            Discover the region,the surroundings,the lociton of the villa and how
                            to reach it.
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="assets/images/tourism.jpg" alt="Surroundings" />
                                <div className="info-box-body">
                                    <h4>Surroundings</h4>
                                    <p className="info-box-info">
                                        Sinse Margatina is located near Troyan there are lots of places
                                        you can visit. In the area there are museums ,eco trails, spa
                                        complexes with hot spring water and many other ...
                                    </p>
                                    <p>
                                        <Link to="/surroundings" className="btn">
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="assets/images/location.png" alt="Surroundings" />
                                <div className="info-box-body">
                                    <h4>Location</h4>
                                    <p className="info-box-info">
                                        The villa is an area called Margatina that is located in the
                                        small village Belish which is near Troyan .It is about 15 km
                                        away from the town center. You can go there by a car...
                                    </p>
                                    <p>
                                        <Link to="/location" className="btn">
                                            Check Map
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;