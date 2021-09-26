import './Employers.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Employee from '../Employee/Employee';

const Employers = () => {
    const[employers,setemployers] = useState([])
    useEffect(() => {
      fetch('./fakedb.JSON')
      .then(res=>res.json())
      .then(data=>setemployers(data))
    }, [])
    return (
        <div className="wrapper">
            <div className="left">
          
            {
                employers.map( employee =><Employee 
                    key={employee.id} Employee = {employee}/>               
                
                    
                    )
            }

            </div>
            <div className="right">
                cost defined
            </div>
        </div>
    );
};

export default Employers;