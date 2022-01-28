import React from 'react'
import './Projects.css'
import './Home.css'
import './Contact.css'
import dtcLogo from '../Assets/dtcLogo.png';
import eduLogo from '../Assets/eduLogo.png';
import helpmateLogo from '../Assets/helpmateLogo.png';
import portfolio from '../Assets/portfolio.png';
import quietLogo from '../Assets/quietLogo.jpg';
import todoLogo from '../Assets/todo.jpg';

export default function Projects() {
    return (
        <section className="bgImg" style={{ padding: "5%" }}>
            <h1 className="text-center">My Projects</h1>
            <div class="card-group" >
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.dtc.inout2020_aimers" target='_blank'>
                        <img src={dtcLogo} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <h3 class="card-title  text-center card-title-project">Dare2Change</h3>
                            <p class="card-text text-center card-text-project" style={{ fontSize: "18px" }}><i>Multipurpose App to Increase Productivity! (Live on Google Play Store)</i></p>
                        </div>
                    </a>
                </div>
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="https://github.com/rob729/Quiet_Hours" target='_blank'>
                        <img src={quietLogo} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <h3 class="card-title  text-center card-title-project">Quiet Hours</h3>
                            <p class="card-text text-center card-text-project" style={{ fontSize: "18px" }}><i>No more trouble to make silent mode ON/OFF manually every time.</i></p>
                        </div>
                    </a>
                </div>
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="https://github.com/coder2699/Eduthon2020-Aimers" target='_blank'>
                        <img src={eduLogo} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <h3 class="card-title  text-center card-title-project">TeachersDeck</h3>
                            <p class="card-text text-center card-text-project" style={{ fontSize: "18px" }}><i>An All in One Android App for Teachers!</i></p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="card-group" >
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="https://github.com/HAC-2020/Aimers" target='_blank'>
                        <img src={helpmateLogo} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <h3 class="card-title  text-center card-title-project">HelpMate</h3>
                            <p class="card-text text-center card-text-project" style={{ fontSize: "18px" }}><i>Whenever our mate needs help!</i></p>
                        </div>
                    </a>
                </div>
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="/"  target='_blank'>
                        <img src={portfolio} class="card-img-top" alt="..." style={{ backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <h3 class="card-title  text-center card-title-project" target='_blank'>My Portfolio Website</h3>
                        </div>
                    </a>
                </div>
                <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                    <a href="https://blooming-oasis-53228.herokuapp.com/" target='_blank'>
                        <img src={todoLogo} class="card-img-top" alt="..." style={{ backgroundColor: "#fff", borderRadius: "15px" }} />
                        <div class="card-body">
                            <p></p>
                            <h3 class="card-title  text-center card-title-project">To-Do List Website</h3>
                            <p class="card-text text-center card-text-project" style={{ fontSize: "18px" }}><i>A simple website that allows user to add, strike-off or delete an item from the list.</i></p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
