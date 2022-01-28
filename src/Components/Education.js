import React from 'react'
import './Home.css'
import './Footer.css'
import './Contact.css'
import dsce from '../Assets/dsce.png'
import grm from '../Assets/grm.png'
import hmc from '../Assets/hmc.png'

export default function Education() {
    return (
        <section className="bgImg">
            <h1 class="text-center" style={{ paddingTop: "5%" }}>Education</h1>
        <div>
            <div class="card mx-auto cardContact outerBorder " style={{ maxWidth: "90%", paddingTop: "2%" , paddingBottom: "2%", paddingLeft:"2%", paddingRight:"2%"  }}>
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src={dsce} class="rounded mx-auto d-block"/>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body text-center">
                            <h2 class="card-title">Bachelor of Engineering (2019 - 2023)</h2>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>Electronics and Communications</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>from</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>Dayananda Sagar College of Engineering, Bengaluru</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>CGPA: 9.05</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div style={{ paddingTop: "5%" }}>
                <div class="card mx-auto cardContact outerBorder " style={{ maxWidth: "90%", paddingTop: "5%" , paddingBottom: "5%", paddingLeft:"2%", paddingRight:"2%"  }}>
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src={grm} class="rounded mx-auto d-block"/>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body  text-center" >
                            <h2 class="card-title">Intermediate (2018)</h2>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>from</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>GRM SR. SEC. School, Bareilly, Uttar Pradesh (CBSE)</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>Percentage: 95.4%</p>
                            {/* <p class="card-text" style={{ color: "#F5F5FD" }}><i class="fas fa-star" style={{ color: "gold" }} /> Awarded Merit Certificate in Mathematics for being amongst Top 0.1 % candidates</p> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "5%",paddingBottom: "5%" }}>
                <div class="card mx-auto cardContact outerBorder " style={{ maxWidth: "90%", paddingTop: "5%" , paddingBottom: "5%", paddingLeft:"2%", paddingRight:"2%"  }}>
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src={hmc} class="rounded mx-auto d-block"/>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body text-center">
                            <h2 class="card-title">High School (2016)</h2>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>from</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>Hartmann College, Bareilly, Uttar Pradesh (ICSE)</p>
                            <p class="card-text"  style={{ color: "#F5F5FD" }}>Percentage: 93.4%</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
