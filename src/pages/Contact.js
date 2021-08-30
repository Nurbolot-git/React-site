import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}>

            </div>
            <div className="rightSide">
                <h1>Contact Us </h1>
                <form id="contac-fForm">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" placeholder="Enter your full name..." />
                    <label htmlFor="email"></label>
                    <input type="email" name="message" placeholder="Enter your email.." />
                    <label htmlFor="message"></label>
                    <textarea name="message" rows="6" required></textarea>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
