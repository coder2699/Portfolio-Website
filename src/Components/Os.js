import React from 'react'
import './Home.css'
import './Footer.css'
import './Os.css'
import './Contact.css'
import './Projects.css'
import ghprofile from '../Assets/ghprofile.png'

export default function Os() {
    return (
        <>

            <section className="imgBg" style={{ padding: "5% 10%" }}>
                <h1 class="text-center" id="internships">Open Source Contributions</h1>
                <div class="row g-0" style={{marginTop:"2%"}}>
                    <div class="col-md-4"  style={{marginBottom:"5%"}}>
                        <div class="card cardOs outerBorder" style={{padding:"5%", height: "100%"}}>
                            <img src={ghprofile} class="img-fluid rounded-end" style={{ width: "50%", margin: "auto" }} />
                            <div class="card-body">
                                <p class="card-text" style={{ color: "#d93a7c"}}>
                                    Github: @Coder2699
                                    <p class="card-text " style={{fontSize:"18px", color: "#a8fdf6"}}><i>400+ Contributions</i></p>
                                    <a href="https://github.com/coder2699" target="_blank">
                                    <button type="button" class="btn btn-outline-secondary" style={{backgroundColor:"#d93a7c", width:"100%"}}>Visit</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card cardContact" style={{marginLeft:"5%", marginRight:"5%", height: "100%" }}>
                            <img class="stats" src="https://github-readme-stats.vercel.app/api?username=coder2699&&show_icons=true&theme=radical&line_height=27&v=5" alt="Pranshu's GitHub Stats" />
                        </div>
                    </div>
                </div>
                <p class="text-center">Contribution Calendar</p>
                <img src="https://ghchart.rshah.org/0e9d57/coder2699" alt="Pranshu Pandey's Github chart" class="rounded mx-auto d-block chart" style={{width: "100%", height:"100%" }} />
            </section>
        </>
    )
}
