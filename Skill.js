import React, { Component } from 'react'
import './resume.css'
import css from './pix/css.png';
import js from './pix/js.png';
import Rt from './pix/react.png';
import htm from './pix/html.png';
import boot from './pix/Bootstrap.png';


export default class Skill extends Component {
  render() {
    return (
      <div className="containn">
                        <br />
                <br />
                                <br />
                <br />
        <div pull>
          <h1 className='abm'>Skills</h1>
          <div className='fle'>
            <div className='line'></div>
          </div>
        </div>
        <div className='holder'>
          <div className='gro'><div className="box"></div></div>
          <div className='gro'><div className="box1"></div></div>
          <div className='gro'><div className="box3"></div></div>
          <div className='gro'><div className="box4"></div></div>
          <div className='gro'><div className="box5"></div></div>
          <div className='gro'><div className="box6"></div></div>
        </div>
      </div>
    );
  }
}
