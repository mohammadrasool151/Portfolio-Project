import React from 'react'
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <>
            <div className={projectcss.wholebox}>
                <h2 className={projectcss.topic}  >Project</h2>
                {/* style={{ "textAlign": "center" }} */}
                <div className={projectcss.box} >

                    <div className={projectcss.left}>
                        <div className={projectcss.insideLeft}>

                        Left
                        </div>
                    </div>
                    <div className={projectcss.right}>
                        right
                    </div>
                </div>
            </div>
        </>
    )
}
