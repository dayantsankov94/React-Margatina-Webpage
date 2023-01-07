import { useState } from "react";
import Horseriding from './HiddenActivities/Horseriding'
import Swimming from './HiddenActivities/Swimming'
import Cooking from './HiddenActivities/Cooking'
import Swing from './HiddenActivities/Swing'

const Activities = () => {
    const [hidden, SetHidden] = useState(true);
    const [activity, SetActivity] = useState('');
    const clickHandler = (e,value) =>{
        if (value == activity) {
            
            SetHidden(true)
        }
        else {
            SetHidden(false)
        }
        SetActivity(value)  
    }
    return (
        <section className="activities my-5">
            <h1>Activities</h1>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 m-auto my-3">
                        <h3>Horse Riding</h3>
                        <img src="assets/images/IMG_4754.jpg" alt="horse-riding" />
                        <div className="text-box">
                            <p>
                                We have four horses. Three of them are available for riding because
                                one of them is still very young. They are very kind, relaxed and
                                friendly so it doesn't matter if you never ridden a horse before.{" "}
                            </p>
                            <p>
                                <button onClick={e => clickHandler(e,'horse')}>View More Photos</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 m-auto my-3">
                        <h3>Swimming pool</h3>
                        <img src="assets/images/IMG_5210.jpg" alt="swimming-pool" />
                        <div className="text-box">
                            <p>
                                There is a swimming pool with bars where you can put your cocktail
                                and enjoy the beautiful view and the lovely weather. There are also
                                sun loungers so you can relax and get some tan as well.
                            </p>
                            <p>
                                <button onClick={e => clickHandler(e,'pool')}>View More Photos</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 m-auto my-3">
                        <h3>Amazing Cooking</h3>
                        <img src="assets/images/cooking1.jpg" alt="cooking" />
                        <div className="text-box">
                            <p>
                                We have an amazing furnace that you can use if you want to roast a
                                lamb, pig or chicken/turkey. It takes up to 2 hours to be heated.
                                You can cook a sach with different vegetables and meats as well.
                            </p>
                            <p>
                                <button onClick={e => clickHandler(e,'cooking')}>View More Photos</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 m-auto my-3">
                        <h3>Bed Swing</h3>
                        <img src="assets/images/IMG_3783.jpg" alt="bed-swing" />
                        <div className="text-box">
                            <p>
                                We have a lovely bed swing so you can have a nice nap during the
                                day. We are building an outdoor cinema so you can spend your evening
                                watching your favourite movie under the stars.{" "}
                            </p>
                            <p>
                                <button onClick={e => clickHandler(e,'swing')}>View More Photos</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {
                hidden == false &&
                <div className="hidden-images my-3">
                    <h2>More Photos</h2>
                    {activity == 'horse' && 
                        <Horseriding />
                    }
                    {activity == 'pool' && 
                        <Swimming />
                    }
                    {activity == 'cooking' && 
                        <Cooking />
                    }
                    {activity == 'swing' && 
                        <Swing />
                    }
                </div>
            }
        </section>

    )
}
export default Activities;