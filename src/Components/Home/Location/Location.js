import { Link } from "react-router-dom";

const Location = () => {
    return (
        <section className="location">
            <h1 className="m-auto" style={{ textAlign: "center" }}>
                Location
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5">
                        <div className="location-map">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe
                                        width={500}
                                        height={500}
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=margatina&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder={0}
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                    />
                                    <Link to="https://2piratebay.org" />
                                    <br />
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                "\n                                    .mapouter {\n                                        position: relative;\n                                        text-align: right;\n                                        max-height: 500px;\n                                        max-width: 500px;\n                                    }\n                                "
                                        }}
                                    />
                                    <Link to="https://www.embedgooglemap.net">embedgooglemap.net</Link>
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                "\n                                    .gmap_canvas {\n                                        overflow: hidden;\n                                        background: none !important;\n                                        max-height: 500px;\n                                        max-width: 500px;\n                                    }\n                                "
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <div className="location-text">
                            <h3 className="my-3">Where is it?</h3>
                            <p>
                                The Villa is located in the Margatina hamlet at the end of the
                                village Belish. This is right at the foot of the Stara Planina
                                mountain only 13 km from Troyan. The road is in great condition
                                which allows the transportation throught out the hole year
                                regardless of the weather conditions. Unfortunately there is no
                                public transport sinse there are very few residents in the area.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Location;