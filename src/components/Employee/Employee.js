import './Employee.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';

const Employee = (props) => {
  console.log(props)
    const{age,img,email,first_name,salary,Position} = props.Employee
    return (
    <div className="emplyeedetails">

        <div className="employee">
        <div class="card" >
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">Name:{first_name}</p>
          <p class="card-text">Email:{email}</p>
          <p class="card-text">Position:{Position}</p>
          <h6 class="card-title">Age:{age}</h6>
          <h6 class="card-title">Salary:{salary}</h6>
          <a href="/anywhere" class="btn btn-primary"> <i className="bi bi-cart-dash-fill"></i> Salary per month</a>
        </div>
        </div>
        </div>
        


    </div>
      
      
 
  
        
    
  
    );
};

export default Employee;