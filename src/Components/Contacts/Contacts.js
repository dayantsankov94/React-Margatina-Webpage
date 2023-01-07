const Contacts = () => {
    return (
        <section className="contacts my-5">
            <div className="container">
                <h1>Contacts</h1>
                <div className="contact-info">
                    <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
                        <span className="fa fa-2x fa-facebook m-3">Dayan Tsankov</span>
                    </a>
                    <a href="https://www.facebook.com/daqn.tsankov" target="_blank">
                        <span className="fa fa-2x fa-instagram m-3">@dcankov</span>
                    </a>
                    <span className="fa fa-3x fa-mobile  m-3"> 088 901 8853</span>
                    <span className="fa fa-2x fa-envelope m-3"> daqntsankov@gmail.com</span>
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/42%C2%B056'07.0%22N+24%C2%B046'51.2%22E/@42.9352778,24.7787002,17z/data=!3m1!4b1!4m9!1m2!2m1!1smargatina!3m5!1s0x0:0xe04c5f5a36523348!7e2!8m2!3d42.9352701!4d24.78089?hl=en-US"
                    >
                        <span className="fa fa-2x fa-map-marker m-3">
                            {" "}
                            Margatina, Belish, Troyan, Bulgaria
                        </span>
                    </a>
                </div>
                <img src="assets/images/Dentalign_contact_.png" alt="contacts" />
            </div>
        </section>

    )
}
export default Contacts;