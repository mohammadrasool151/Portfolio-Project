import React, { useState } from 'react'
import Navbarcss from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Navbar = ({buttondone,setButtondone}) => {
    
    return (
        <>
            <div className={Navbarcss.box}>
                <div className={Navbarcss.left}>
                    <p>Portfolio</p>
                </div>
                <div className={Navbarcss.right}>
                    <div className={Navbarcss.insideright}>
                        <div className={Navbarcss.layerofbtn}>
                            <Link className={Navbarcss.btn} to='home' spy={true} smooth={true} offset={-50} duration={500}><p>Home</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn}>
                            <Link className={Navbarcss.btn} to='project' hspy={true} smooth={true} offset={-50} duration={500}><p>Project</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn}>
                            <Link className={Navbarcss.btn} to='skill' spy={true} smooth={true} offset={-50} duration={500}><p>Skill</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn}>
                            <Link className={Navbarcss.btn} to='contact' spy={true} smooth={true} offset={-50} duration={500}><p>Contact</p></Link >

                        </div>


                    </div>
                </div>

            </div>
            {buttondone === true ? null : <div className={Navbarcss.upleft2}>
                <FontAwesomeIcon onClick={() => setButtondone(!buttondone)} className={Navbarcss.bar} icon={faBars} />
            </div>
            }
            {buttondone && <div className={Navbarcss.box2}>
                <div className={Navbarcss.left2}>
                    <div className={Navbarcss.forhiding} />

                    {/* <p></p> */}
                    <FontAwesomeIcon onClick={() => setButtondone(!buttondone)} className={Navbarcss.xmark} icon={faXmark} />
                </div>
                <div className={Navbarcss.right2}>
                    <div className={Navbarcss.insideright2}>
                        <div className={Navbarcss.layerofbtn2}>
                            <Link className={Navbarcss.btn2} to='home' spy={true} smooth={true} offset={-50} duration={500}><p onClick={() => setButtondone(!buttondone)}>Home</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn2}>
                            <Link className={Navbarcss.btn2} to='project' spy={true} smooth={true} offset={-50} duration={500}><p onClick={() => setButtondone(!buttondone)}>Project</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn2}>
                            <Link className={Navbarcss.btn2} to='skill' spy={true} smooth={true} offset={-50} duration={500}><p onClick={() => setButtondone(!buttondone)} >Skill</p></Link >

                        </div>
                        <div className={Navbarcss.layerofbtn2}>
                            <Link className={Navbarcss.btn2} to='contact' spy={true} smooth={true} offset={-10} duration={500}><p onClick={() => setButtondone(!buttondone)} >Contact</p></Link >

                        </div>


                    </div>
                </div>


            </div>
            }

        </>
    )
}
