import React from 'react'
import { Link } from 'react-router-dom';

export default function Fotter() {
  return (
    <div>
     
      <footer className="footer">
        <div className="footer-contetnt">
          <div className="footer-section about">
          <h2 style={{ color: 'orange' }}>About</h2>
            <p style={{ textAlign: 'center' }}>
            Tech Blog is a platform where we share the latest trends, tutorials, and insights in the world of technology.

            </p>
          </div>

          <div className="footer-section contact">
          <h2 style={{ color: 'orange' }}>About</h2>
            <p>Email:madusankadilan226@gmail.com</p>
            <p>Phone: +94 774630350</p>
            <p>Address:  Sri Lanaka</p>

          </div>

         



         
          

        </div>
        <p>&copy; {new Date().getFullYear()} Tech Blog. All rights reserved.</p>


      </footer>


    </div>
  )
}
