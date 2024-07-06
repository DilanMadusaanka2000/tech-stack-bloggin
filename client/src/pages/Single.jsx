import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu'


export default function Single() {
  return (
    <>

      <div className="single">
      <div className="content">

        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>
          
          <div className="edit">
           
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            
            </Link>

            <img src={Delete} alt="" />
              
          </div>

          
        </div>

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi et commodo volutpat, eros turpis vehicula urna, eget convallis nisl lectus vel arcu. Curabitur blandit ultrices orci, at pharetra felis sollicitudin sit amet. Maecenas tristique justo vel sem bibendum, sed venenatis lacus sollicitudin. Vivamus bibendum orci in augue congue, in interdum metus condimentum. Integer nec orci ut eros consectetur scelerisque. Sed malesuada libero vitae mauris venenatis, sit amet suscipit nisi dapibus. Nulla facilisi. Quisque vestibulum felis sit amet ligula pretium, ac cursus enim fringilla. Fusce ultricies urna non purus dignissim tempor.</p>
          
      </div>
      
      

    



      
      <Menu />

       
      </div>


     
     
  </>
  )
}
