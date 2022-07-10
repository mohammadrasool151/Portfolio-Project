import React from 'react'
import Homecss from './Home.module.css'
// import shape from './shape.png'
import ashpic from './ashpic2.png'
import sb from './shapeblue.png'


export const Home = () => {
    return (
        <div className={Homecss.box} id='home' >
            <div className={Homecss.left}>
                <div className={Homecss.insideLeft}>
                    <p className={Homecss.textt}>Hi,</p>
                    <p className={Homecss.textt}>I'm Mohammad Rasool</p>
                    <div className={Homecss.boxDesign}>

                        <p className={Homecss.design} >WEB DESIGNER</p>
                        <p className={Homecss.design}>Full-STACK DEVELOPER</p>
                        <p className={Homecss.design}>MERN DEVELOPER</p>
                        <p className={Homecss.design}>FRONT-END DEVELOPER</p>
                    </div>

                </div>
            </div>
            <div className={Homecss.right}>
                <div className={Homecss.insideright}>

                    <div className={Homecss.insiderightup}>

                        {/* <h1>right</h1> */}
                        <img className={Homecss.imageup} src={sb} alt="" />

                    </div>
                    <div className={Homecss.insiderightdown}>

                        <img className={Homecss.imagedown} src={ashpic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
