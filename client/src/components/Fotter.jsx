import React from 'react'
import { Link } from 'react-router-dom';

export default function Fotter() {
  return (
    <div>
     
      <footer className="footer">
        <div className="footer-contetnt">
          <div className="footer-section about">
            <h2>about</h2>
            <p>
            Tech Blog is a platform where we share the latest trends, tutorials, and insights in the world of technology.

            </p>
          </div>

          <div className="footer-section contact">
            <h2>Contact Ua</h2>
            <p>Email:madusankadilan226@gmail.com</p>
            <p>Phone: +94 774630350</p>
            <p>Address: Matara Sri Lanaka</p>

          </div>

          <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>



          <div className="footer-section links">
            <h2>Links</h2>
            <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/">AI</Link></li>
            <li><Link to="/">Mobile Technology</Link></li>
            <li><Link to="/">Cloud Technology</Link></li>
            <li><Link to="/">Web Technology</Link></li>




            </ul>
          </div>

          

        </div>
        <p>&copy; {new Date().getFullYear()} Tech Blog. All rights reserved.</p>


      </footer>


    </div>
  )
}
