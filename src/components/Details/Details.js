import React from 'react';

//Show details
const Details = (props) => {
   
    const{img,first_name,Position} = props.employers
  
    
    return (
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Name:{first_name}</h5>
                              <p className="card-text">Position:{Position}</p>
                                
                            </div>
                          </div>
                        </div>
                      </div>
    );
};

export default Details;