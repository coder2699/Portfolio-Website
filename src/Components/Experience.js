import React from 'react'
import './Home.css'
import './Footer.css'
import './Projects'
import './Contact.css'
import exp from '../Assets/exp.svg';
import brane from '../Assets/brane.png';
import smarkt from '../Assets/smarkt.png';
import inout from '../Assets/inout.PNG';
import hac from '../Assets/hac.jpg';
import jpmc from '../Assets/jpmc.jpg';
import eduthon from '../Assets/eduthon.png';
export default function Experience() {
    return (
        <>
            <section className="imgBg" style={{ padding: "10%" }}>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact">
                            <img src={exp} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact">
                            <div class="card-body text-center">
                                <h1 class="card-title">Experience</h1>
                                <p class="card-text" style={{ color: "#F5F5FD" }}>
                                    An aspiring software developer having experience of internships, hackathons as well as of contributing for open source organizations.
                                </p>
                                <div id="social" style={{ marginTop: "15px" }}>
                                    <ul>
                                        <a href="#internships">
                                            <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px" }}>
                                                Internships
                                            </button>
                                        </a>
                                        <a href="#hackathons">
                                            <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px" }}>Hackathons</button>
                                        </a>
                                        <a href="/open-source">
                                            <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px" }}>Open Source</button>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="imgBg" style={{ padding: "5% 10%" }}>
                <h1 class="text-center" id="internships">Internships</h1>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact outerBorder" style={{ padding: "5%", height: "100%" }}>
                            <img src={brane} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                            <div class="card-body text-center">
                                <h2 class="card-title" style={{ paddingTop: "5%", textDecoration: "underline" }}>Brane Enterprises Pvt Limited</h2>
                                <p class="card-text" style={{ color: "#F5F5FD", marginTop: "50px" }}>
                                    ( July, 2021 - December, 2021 )
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact outerBorder" style={{ paddingTop: "5%", height: "100%" }}>
                            <img src={smarkt} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />

                            <div class="card-body text-center">
                                <h2 class="card-title" style={{ padding: "5%", textDecoration: "underline" }}>Siquar Technologies Pvt Limited</h2>
                                <p class="card-text" style={{ color: "#F5F5FD" }}>Android Development Intern</p>
                                <p class="card-text" style={{ color: "#F5F5FD" }}>( April, 2021 - June, 2021 )</p>
                                <p class="card-text" style={{ color: "#F5F5FD" }}><i class="fas fa-star" style={{ color: "gold" }} /> Awarded as Best Intern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="imgBg" style={{ padding: "5% 10%" }}>
                <h1 class="text-center" id="hackathons">Hackathons
                
                <p class="card-text text-center" style={{ color: "#F5F5FD" }}>
                    <i>
                        " I am fascinated by the concept of hackathons, where we work on solving a real-world problems and get to learn from people across the globe. "
                    </i>
                </p>
                </h1>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardHover" style={{ height: "100%" }}>
                            <a href="https://careers.jpmorgan.com/us/en/students/programs/code-for-good#:~:text=At%20a%20Code%20for%20Good,sharpest%20minds%20in%20our%20industry.">
                                <img src={jpmc} class="card-img-top" alt="..." style={{ height: "100%" }} />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardHover" style={{ height: "100%" }}>
                            <a href="https://devfolio.co/submissions/darechange" style={{ height: "100%" }}>
                                <img src={inout} class="card-img-top" alt="..." style={{ height: "100%" }} />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardHover" style={{ height: "100%" }}>
                            <a href="https://devfolio.co/submissions/teachersdeck" style={{ height: "100%" }}>
                                <img src={eduthon} class="card-img-top" alt="..." style={{ height: "100%" }} />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardHover" style={{ height: "100%" }}>
                            <a href="https://devfolio.co/submissions/helpmate" style={{ height: "100%", width: "100%" }}>
                                <img src={hac} class="card-img-tops" alt="..." style={{ height: "100%", width: "100%" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
