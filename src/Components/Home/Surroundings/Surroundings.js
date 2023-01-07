const Surroundings = () => {
    return (
        <section className="surroundings">
            <h1 className="my-3">Surroundings</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-3">
                        <div className="surrounding-image">
                            <img src="assets/images/monastery.jpg" alt="monastery" />
                        </div>
                    </div>
                    <div className="col-lg-6 my-3">
                        <div className="surrounding-text">
                            <h4>Troyan Monastery</h4>
                            <p>
                                The Monastery of the Dormition of the Most Holy Mother of God
                                (Bulgarian: Троянски манастир „Успение Богородично“) or, as it is
                                more commonly called, the Troyan Monastery is the third largest
                                monastery in Bulgaria. It is located in the northern part of the
                                country in the Balkan mountains and was founded no later than the
                                end of the 16th century. The monastery is situated on the banks of
                                the Cherni Osam near Oreshak, a village 10 km from Troyan in Lovech
                                Province, and is a popular tourist destination.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row d-flex">
                    <div className="col-lg-6 my-3 order-1 order-lg-2">
                        <div className="surrounding-image">
                            <img src="assets/images/museum.jpg" alt="museum" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1 ">
                        <div className="surrounding-text">
                            <h4>Troyan Museum</h4>
                            <p>
                                The Museum of Traditional Crafts and Applied Arts in Troyan is
                                unique for the country and is the only one in whose expositions are
                                displayed in details the craft products as well as the tools, the
                                different shapes and the functional purpose of the products and the
                                various decoration techniques. In ten halls are presented exhibits
                                of the most specific Troyan crafts - pottery, forest craft, making
                                of wine vessels, wood-carving, blacksmithing, coppersmithing,
                                weaving, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 my-3">
                        <div className="surrounding-image">
                            <img src="assets/images/spa.jpg" alt="spa" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="surrounding-text">
                            <h4>Chiflik and Shipkovo</h4>
                            <p>
                                The small village of Chiflik, located 14 km south-west of Troyan, at
                                the source of Beli Osam river, quickly gets popularity as a
                                balneological complex of national importance. Besides the
                                opportunity for complete recreation amidst incredible nature and
                                fresh air, Chiflik offers its visitors a chance to take the
                                advantage of the healing power of several hot mineral springs,
                                coming out from more than 1000 m depth, with temperatures reaching
                                55 ° C.
                            </p>
                            <p>
                                {" "}
                                The use of mineral water and spa in Spa resort "Shipkovski Mineral
                                Baths" has a history of more than a hundred years and is closely
                                related to the development of the village of Shipkovo. The resort is
                                situated about 2 km of the same named village and about 18 km. west
                                of Troyan.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row d-flex">
                    <div className="col-lg-6 my-3 order-1 order-lg-2">
                        <div className="surrounding-image">
                            <img src="assets/images/ski.jpg" alt="Ski Resort" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="surrounding-text">
                            <h4>Ski Resort "Beklemeto"</h4>
                            <p>
                                Ski Resort "Beklemeto" is located 1320 meters above sea level, about
                                20 km away from the town of Troyan. It is part of the Central Balkan
                                National Park. Snow days are about 170 a year. Here are the best
                                Bulgarian biathlon and cross-country ski runs of 2 km, 3, 5 km, 7 km
                                and 10 km, approved by the international biathlon and FIBA and FIS
                                ski organizations. The Beklemeto also has three alpine ski lifts.
                                The resort has a "Mountain Center" where you can rent skis, shoes,
                                sledges, as well as other winter sports facilities.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 my-3">
                        <div className="surrounding-image">
                            <img src="assets/images/hija.jpg" alt="hut" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="surrounding-text">
                            <h4>Central Balkan Huts</h4>
                            <p>
                                Troyan is located near Central Balkan where the nature is
                                amazing.There are 3 national parks in the area. It is the perfect
                                location for hikes in the mountain. There are lots of eco trails and
                                huts where you can rest and enjoy the beautiful views that those
                                places have to offer. One of the most famous huts are Hut "Rai" ,
                                Hut "Mazalat", Hut "Ambaritsa", Hut "Pleven",Hut "Eho", Hut
                                "Dermenka", Hut "Dobrila", Hut "Koze Stena" and many others. Each of
                                them takes different time to be reached.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Surroundings;