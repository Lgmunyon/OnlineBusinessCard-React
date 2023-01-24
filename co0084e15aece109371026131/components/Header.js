import React from "react"

function Header(){
    return (
        <div className="container-header">    
            <img src="./images/Headshot.jpg" className="headshot" />
            <h1 className="name">Levi Munyon</h1>
            <h4 className="position">Full-Stack Software Engineer</h4>
            <h5 className="website">https://levimunyon.netlify.app/</h5>
            <button className="email-btn" ><img src="./images/email-logo.png" className="email-icon" />Email</button>
        </div>
    )
}



export default Header