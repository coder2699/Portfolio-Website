import React from 'react'
import './Home.css'
import './Contact.css'
import './CodingIds.css'
import hearth from '../Assets/hearth.png';
import hrank from '../Assets/hrank.png';
import gfg from '../Assets/gfg.png';
import leetcode from '../Assets/leetcode.png';
import chef from '../Assets/chef.png';

export default function CodingIds() {
    return (
        <div>
            <section className="bgImg" style={{ padding: "5%" }}>
                <h1 className="text-center">My Coding Profiles</h1>
                <div class="card-group" >
                    <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                        <a href="https://leetcode.com/pranshu0414/"  target='_blank'>
                            <img src={leetcode} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#1a1a1a", borderRadius: "15px" }} />
                            <div class="card-body">
                                <h3 class="card-title  text-center card-title-code" style={{ marginTop: "10px" }}>Leetcode</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                        <a href="https://www.codechef.com/users/coder2699"  target='_blank'>
                            <img src={chef} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#fff", borderRadius: "15px" }} />
                            <div class="card-body">
                                <h3 class="card-title  text-center card-title-code">Codechef</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                        <a href="https://www.hackerrank.com/coder2699?hr_r=1"  target='_blank'>
                            <img src={hrank} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#3a424f", borderRadius: "15px" }} />
                            <div class="card-body">
                                <h3 class="card-title  text-center card-title-code" style={{ marginTop: "10px" }}>Hackerrank</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-group" >
                    <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                        <a href="https://auth.geeksforgeeks.org/user/pranshu_pandey/practice/"  target='_blank'>
                            <img src={gfg} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#0e9d57", borderRadius: "15px" }} />
                            <div class="card-body">
                                <h3 class="card-title  text-center card-title-code">GeeksForGeeks</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card cardHover" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                        <a href="https://www.hackerearth.com/@pranshu171"  target='_blank'>
                            <img src={hearth} class="card-img-top" alt="..." style={{ padding: "20%", backgroundColor: "#2b3453", borderRadius: "15px" }} />
                            <div class="card-body">
                                <h3 class="card-title  text-center card-title-code" style={{ textDecoration: "none" }}>Hackerearth</h3>
                            </div>
                        </a>
                    </div>
                    <div class="card cardContact" style={{ margin: "30px", backgroundColor: "#fff", borderRadius: "15px" }}>
                            <div class="card-body">
                            </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>

        </div>
    )
}
