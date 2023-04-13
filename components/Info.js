import React from 'react'

export default function Info() {
    return (
        <header>
            <img className="image" src="./images/profile.jpg" />
            <section>
                <h2>Shant Dashjian</h2>
                <h3>Software Developer</h3>
                <h4>shantdashjian.github.io</h4>
                <button><img className="btn-img" src="images/envelope.png"/> Email</button>
            </section>
        </header>
    )
}