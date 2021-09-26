import './Employers.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Cost from '../Cost/Cost';
import Employee from '../Employee/Employee';

const Employers = () => {
    const[employers,setemployers] = useState([])
    const[spend,setSpend] = useState([])
    let Costhandler=costly=>{
        let newCost = [...spend,costly]
        setSpend(newCost)
       
  
    }
    useEffect(() => {
      fetch('./fakedb.JSON')
      .then(res=>res.json())
      .then(data=>setemployers(data))
    }, [])

   

    return (
        <div className="wrapper">
            <div className="left">
          
            {
                //map use for each data pass in Employee componenet
                employers.map( employee =><Employee 
                    key={employee.id} Employee = {employee} Costhandler={Costhandler}  />               
                
                    
                    )
            }

            </div>
            <div className="right">

                <Cost 
                
                spend = {spend} 
                ></Cost>
            </div>
        </div>
    );
};

export default Employers;