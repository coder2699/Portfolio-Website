import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#32335e"}}>
            <div class="container-fluid" >
                <a href="/" class="pp">&lt; Pranshu Pandey /&gt;</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <a class="nav-link active menu" aria-current="page" href="/education">Education</a>
                    <a class="nav-link active menu" aria-current="page" href="/experience">Experience</a>
                    <a class="nav-link active menu" aria-current="page" href="/projects">Projects</a>
                    <a class="nav-link active menu" aria-current="page" href="/open-source">Open Source</a>
                    <a class="nav-link active menu" aria-current="page" href="/cp-profiles">Coding Profiles</a>
                </div>
            </div>
        </nav>
    )
}
