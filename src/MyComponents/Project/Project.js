import React from 'react'
import projectcss from './Project.module.css'
import s1 from './gallery/s1.png'
import s2 from './gallery/s2.png'
import s3 from './gallery/s3.png'
import s4 from './gallery/s4.png'

export const Project = () => {
    return (
        <>
            <div className={projectcss.wholebox} id='project'>
                <h2 style={{ "textAlign": "center" }} className={projectcss.topic}>Project</h2>

                <div className={projectcss.box} >

                    <div className={projectcss.left}>

                        <div className={projectcss.insideLeft}>
                            <p className={projectcss.chatapptopic}>Web Chat App</p>
                            <div className={projectcss.chatappbox}>
                                <div className={projectcss.chatappupperbox}>
                                    <div className={projectcss.allcircle}>
                                        <div className={projectcss.singlecircle}></div>
                                        <div className={projectcss.singlecircle}></div>
                                        <div className={projectcss.singlecircle}></div>
                                    </div>
                                </div>
                                <img className={projectcss.chatappimg} src={s1} alt="s1" />
                                <img className={projectcss.chatappimg} src={s2} alt="s2" />
                            </div>
                            <div className={projectcss.chatappbutton} >
                                <a href="https://tasktracker-198cf.web.app/">

                                    <button className={projectcss.btn1}>TRY DEMO</button>
                                </a>
                                {/* <button className={projectcss.btn2}>READ DESCRIPTION </button> */}
                            </div>



                        </div>
                    </div>


                    <div className={projectcss.right}>
                        <div className={projectcss.insideLeft}>
                            <p className={projectcss.chatapptopic}>Task Tracker</p>
                            <div className={projectcss.chatappbox}>
                                <div className={projectcss.chatappupperbox}>
                                    <div className={projectcss.allcircle}>
                                        <div className={projectcss.singlecircle}></div>
                                        <div className={projectcss.singlecircle}></div>
                                        <div className={projectcss.singlecircle}></div>
                                    </div>
                                </div>
                                <img className={projectcss.chatappimg} src={s3} alt="s3" />
                                <img className={projectcss.chatappimg} src={s4} alt="s4" />
                            </div>
                            <div className={projectcss.chatappbutton} >
                                <a href="https://zzchat-app.netlify.app/">

                                    <button className={projectcss.btn1}>TRY DEMO</button>
                                </a>
                                {/* <button className={projectcss.btn2}>READ DESCRIPTION </button> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}