import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export default class Welcome extends Component {
render() {
    return (
        <div className='first'>
            <div className='second'>
                <div className='third'>
                    <div >
                        <h1 data-aos="fade-left"
                            data-aos-duration="2000"  >Hello!</h1>
                        <h2 data-aos="fade-right"
                            data-aos-duration="2000" >Welcome to my portfolio website</h2>
                        <h2 data-aos="fade-left"
                            data-aos-duration="2000" > I'm Johnmary </h2>
                        <h3 data-aos="fade-right"
                            data-aos-duration="2000" >Frontend Developer</h3>
                    </div>
                    <div>
                        <div className='resu'>
                            <div className='mes'>
                                <h1>Get Resume</h1>
                                <a href='Nwanze Johnmary Resume.pdf' download="Nwanze Johnmary Resume.pdf">
                                    <button >Resume </button>
                                </a>
                            </div>
                        </div>
                        <div className='foot'>
                            <div className='inner'>
                                <SocialIcon data-aos="fade-left"
                                            data-aos-duration="2000"style={{ margin: "1rem", color: "white" }} url="https://www.facebook.com/nwanze.johnmary" />
                                <SocialIcon data-aos="fade-left"
                                            data-aos-duration="2000" style={{ margin: "1rem", color: "white" }} url="https://wa.me/2349032289003" />
                            <SocialIcon style={{margin:"1rem", color:"white"}} url="https://twitter.com/JohnmNwanze" />
                                <SocialIcon data-aos="fade-right"
                            data-aos-duration="2000" style={{ margin: "1rem", color: "white" }} url="https://www.instagram.com/johnpeter5097/" />
                                <SocialIcon data-aos="fade-right"
                            data-aos-duration="2000" style={{ margin: "1rem", color: "white" }} url="https://t.me/moneymaaade" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='enable'>
                <h1>this is to enable Nav</h1>
            </div>
        </div>
    );
}
}


// 
//  data-aos="fade-up-left"
// data-aos="fade-up-right"
//  data-aos="fade-up-left"