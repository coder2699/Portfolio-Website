import React from 'react'
import './Home.css'
import './Footer.css'
import illusOne from '../Assets/illusOne.svg';
import mobileIllus from '../Assets/mobileIllus.svg'
import cpIllus from '../Assets/cpIllus.svg'
import webdevIllus from '../Assets/webdevIllus.svg'
import profile from '../Assets/profile.png';

export default function Home() {
    return (
        <>

            <section className="bgImg" style={{ padding: "10%" }}>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact">
                            <img src={profile} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact">
                            <div class="card-body text-center">
                                <h1 class="card-title">Hey there, I'm Pranshu Pandey</h1>
                                <p class="card-text" style={{ color: "#F5F5FD" }}>
                                Always looking for challenging roles and opportunities to be a better version of myself.
                                <p>I strongly believe that small changes and small steps can create massive impact.</p>
                                <p>                                        
                                <ul>
                                    <a href="https://bit.ly/pranshu-pandey-resume" target="_blank">
                                        <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px", }}>
                                            Get my CV
                                        </button>
                                    </a>
                                    <a href="#work">
                                        <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px", }}>What I do?</button>
                                    </a>
                                </ul>
                                    </p>
                                    <p style={{ marginTop: "25px" }}>
                                        Find me on ...
                                    </p>
                                </p>
                                <div id="social" style={{ marginTop: "15px" }}>
                                    <a class="googleplusBtn smGlobalBtn" href="mailto: pranshu1404.pp@gmail.com" />
                                    <a class="linkedinBtn smGlobalBtn" href="https://www.linkedin.com/in/pandey-pranshu/" target="_blank"></a>
                                    <a class="githubBtn smGlobalBtn" href="https://github.com/coder2699" target="_blank" ></a>
                                    <a class="instagramBtn smGlobalBtn" href="https://www.instagram.com/pranshu____pandey/" ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bgImg" id="work"  style={{ paddingTop: "100px" }}>
                <h1 className="text-center">What I do?</h1>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "50px" }}  >
                            <img src={mobileIllus} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "50px" }} >
                            <div class="card-body text-center">
                                <h1 class="card-title">Android Development</h1>
                                <p class="card-text" style={{ color: "#fff" }}>
                                I am a skillful android developer with a stronghold on Kotlin, Java, MVVM architecture, Retrofit, Room database, etc. I have made several applications and have a project published on the Google Play Store as well.
                                </p>
                                <ul>
                                    <a href="https://play.google.com/store/apps/details?id=com.dtc.inout2020_aimers" target="_blank">
                                        <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px", }}>
                                            Play Store <i class="fab fa-google-play" />
                                        </button>
                                    </a>
                                    <a href="/projects">
                                        <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px", }}>Projects</button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "100px" }} >
                            <img src={cpIllus} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "100px" }} >
                            <div class="card-body text-center">
                                <h1 class="card-title">Competitve Programming</h1>
                                <p class="card-text" style={{ color: "#fff" }}>
                                    I have a knack for competitive programming. I am a 3 <i class="fas fa-star" style={{ color: "gold" }} /> coder (Max Rating: 1629) on codechef and 5 <i class="fas fa-star" style={{ color: "gold" }} /> in problem-solving & Java on hackerrank. I have a decent understanding of C++, Java, OOPs, data structures, and algorithms. I have solved 400+ problems on different platforms like Leetcode, GeeksForGeeks, hackerank, etc.
                                    </p>
                                <ul>
                                    <a href="/cp-profiles">
                                        <button type="button" class="btn btn-outline-secondary" style={{ marginRight: "5px" }}>My Profiles</button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "100px" }} >
                            <img src={webdevIllus} class="img-fluid rounded-end" style={{ width: "60%", margin: "auto" }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact" style={{ marginTop: "100px" }} >
                            <div class="card-body text-center">
                                <h1 class="card-title">Web Development</h1>
                                <p class="card-text" style={{ color: "#fff" }}>
                                    I know front-end web designing. I have made some projects using React, Javascript, Node.js and CSS. You can check out my work in the projects section.
                                </p>
                                <ul>
                                    <a href="/projects">
                                        <button type="button" class="btn btn-outline-secondary" style={{ margin: "10px", }}>Projects</button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}