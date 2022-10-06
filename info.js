import React, { Component } from 'react'
import prof from './pix/prof.jpg'
// import Welcome from './Welcome.'


export default class Info extends Component {
render() {
    return (
        <div
            data-aos="fade-left"
            data-aos-offset="1000"
            // data-aos-easing="ease-in-sine"
            className='info'>
            {/* <h1 >RESUME</h1> */}
            <div className='mark'>
                <h1 className='res'>PROFESSIONAL DETAILS</h1>
                <br></br>
                <img className='cardinfo' src={prof} alt='Profile pics' />
                <h3>Name:Nwanze Johnmary Ngozi</h3>
                <h3>Age:26</h3> 
                <h3>Location:Lagos State</h3>
                <h3>Experience:A Year</h3>
                <h3>Degree:Bsc</h3> 
            </div>
        </div>
    );
}
}
