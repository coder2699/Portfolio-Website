import React from 'react'
import './Footer.css'
import './Contact.css'
import profile from '../Assets/profile.png';

export default function Contact() {
    return (
        <>
            <section className="imgBg" style={{padding:"10%"}}>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card cardContact">
                            <img src={profile} class="img-fluid rounded-end"  style={{width:"60%", margin:"auto"}} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cardContact">
                            <div class="card-body text-center">
                                <h1 class="card-title">Hey there, I'm Pranshu Pandey</h1>
                                <p class="card-text" style={{color:"#F5F5FD"}}>
                                    An Undergratuate at Dayananda Sagar College of Engineering, Bengaluru, India with specialization in Electronics and Communications Engineering.
                                <p style={{marginTop:"50px"}}>
                                    Find me on ...
                                </p>
                                </p>
                                <div id="social" style={{ marginTop: "15px" }}>
                                    <a class="googleplusBtn smGlobalBtn" href="mailto: pranshu0414@gmail.com" />
                                    <a class="linkedinBtn smGlobalBtn" href="https://www.linkedin.com/in/pandey-pranshu/" target="_blank"></a>
                                    <a class="githubBtn smGlobalBtn" href="https://github.com/coder2699" target="_blank" ></a>
                                    <a class="instagramBtn smGlobalBtn" href="#" ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
