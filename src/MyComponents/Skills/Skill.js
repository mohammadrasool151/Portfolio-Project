import React from 'react'
import skillcss from './Skill.module.css'
import snowimg from './Snow8s.webm'

export const Skill = () => {
    return (
        <div className={skillcss.box} id='skill'>

            <div className={skillcss.snowvid}>
                <video className={skillcss.snowvidd} src={snowimg} loop autoPlay muted></video>
            </div>
            <div className={skillcss.box2}>
                <div className={skillcss.topic}>
                    <p>Skill</p>

                </div>
                <div className={skillcss.insidebox}>
                    <div className={skillcss.container}>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(70%)" }} className={skillcss.layerabove}> <p className={skillcss.layerabovename}>React Js</p> </div>
                            <p>75%</p>

                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(80%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>Javascript</p> </div>
                            <p>75%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(60%)" }} className={skillcss.layerabove}> <p className={skillcss.layerabovename}>Tailwind CSS</p></div>
                            <p>90%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(85%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>CSS</p></div>
                            <p>85%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(55%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>Mongo DB</p></div>
                            <p>50%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(95%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>HTML</p></div>
                            <p>97%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(70%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>SQL</p></div>
                            <p>70%</p>
                        </div>
                        <div className={skillcss.layer}>
                            <div style={{ "width": "calc(60%)" }} className={skillcss.layerabove}><p className={skillcss.layerabovename}>C++</p></div>
                            <p>70%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
