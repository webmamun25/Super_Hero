import React from 'react';

// import details
import Details from '../Details/Details';

// create function for cost section
const Cost = (props) => {
    const {spend} = props
    const total = spend.reduce((prev,cur)=>{return prev+cur.salary},0)
    
    return (
        <div className=" border border-3 py-3 mt-3">
                <h3>Selected item  <button type="button" className="btn btn-dark position-relative">
                <i className="bi bi-cart-plus-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {spend.length}

                   
                
                </span>
                </button></h3>
                <h2>Total cost is:{total}</h2>
                <ul>
                    {
                        spend.map(employers=> <Details employers={employers} key={employers.id}></Details>)
                    }
                </ul>
        </div>
    );
};

export default Cost;