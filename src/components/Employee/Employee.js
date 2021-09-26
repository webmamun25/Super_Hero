import './Employee.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';

//show all employee from fakedb

const Employee = (props) => {
 
    const{age,img,email,first_name,salary,Position} = props.Employee
    return (
    <div className="emplyeedetails">

        <div className="employee">
        <div className="card" >
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Name:{first_name}</p>
          <p className="card-text">Email:{email}</p>
          <p className="card-text">Position:{Position}</p>
          <h6 className="card-title">Age:{age}</h6>
          <h6 className="card-title">Salary:{salary}</h6>
          {/* button use for show the salary in cost component */}
          <button   onClick={ ()=>props.Costhandler(props.Employee)} className="btn btn-primary"> <i className="bi bi-cart-dash-fill"></i> Salary per month</button>
        </div>
        </div>
        </div>
        


    </div>
      
      
 
  
        
    
  
    );
};

export default Employee;