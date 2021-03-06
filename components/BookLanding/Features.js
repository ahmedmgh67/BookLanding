import React, { Component } from 'react';
import {finalPath} from '../../pages/index';

class Features extends Component {
    render() {
        return (
            <section className="features-area book-features ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-print"></i>
                                </div>
                                <h3>POTĘŻNE NARZĘDZIA </h3>
                                <p>Jeśli szukasz łatwych rozwiązań, tu ich nie znajdziesz.  Jeśli szukasz miłych i ‘’obiecujących złote góry’’ porad, jak stać się szczęśliwym w zaledwie 5 minut… Nie kupuj tej książki. To narzędzie pomoże Ci wykreować życie, o jakim marzysz, ale wymaga również Twojej pracy.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-ui-edit"></i>
                                </div>
                                <h3>PRAWDA</h3>
                                <p>Nie napisałem tej książki po to, by mówić ludziom to, co chcą usłyszeć. 
Napisałem ją, by Ci, którzy są otwarci na duchowy samorozwój, poznali potężne narzędzia, dzięki którym rzeczywistość zacznie być ich największym dziełem.
</p>
                        
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="icofont-vehicle-delivery-van"></i>
                                </div>
                                <h3>TAJNA WIEDZA </h3>
                                <p>SEKRETY ROZWOJU OSOBISTEGO to książka tylko dla osób, które chcą dokonywać w sobie prawdziwych zmian i chcą odkryć prawdy, o których mało kto mówi. Tajna wiedza, którą powinien poznać każdy człowiek na drodze do samoświadomości.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-win-trophy"></i>
                                        </div>
                                        <h3>More than 5+ award achived</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-responsive"></i>
                                        </div>
                                        <h3>Read On Any Device</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-verification-check"></i>
                                        </div>
                                        <h3>Very high resolution (4K)</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <img src={finalPath + '/images/features-img1.png'} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shape7"><img src={finalPath +  '/images/shape7.png'} alt="shape" /></div>
                <div className="shape3"><img src={finalPath + '/images/shape3.png'} alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src={finalPath + '/images/shape6.png'} alt="img" /></div>
                <div className="shape8 rotateme"><img src={finalPath + '/images/shape8.svg'} alt="shape" /></div>
                <div className="shape9"><img src={finalPath + '/images/shape9.svg'} alt="shape" /></div>
                <div className="shape10"><img src={finalPath + '/images/shape10.svg'} alt="shape" /></div>
                <div className="shape11 rotateme"><img src={finalPath + '/images/shape11.svg'} alt="shape" /></div>
            </section>
        );
    }
}

export default Features;
