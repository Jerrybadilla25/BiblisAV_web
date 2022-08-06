import React from 'react';

const Charter = ( { charterNumber, rewCharter, getCharter, changeNavView }) => {
    return (
        <div className='contenedor-libro vh-100'>
            <div className='row'>
                <div className='d-flex justify-content-between border-buton'>
                <h5 className='text-center'>{charterNumber.book}</h5>
                <div>
                   <button className="btn btn-per mx-4" onClick={rewCharter} >
                   <i className="bi bi-arrow-return-left icon-text-danger"></i>
                </button>
                <button className="btn btn-per" onClick={changeNavView} >
                   <i className="bi bi-x-lg icon-text-danger"></i>
                </button> 
                </div>
                
                </div>
                
                    
                    <div className='charter-number'>
                      {
                        charterNumber.capitulos.map((y, m)=>(
                            <div key={y} onClick={()=>getCharter(y)} >
                                <p>{m+1}</p>
                            </div>
                        ))
                    }  
                    </div>
                    
                
            </div>
        </div>
    );
}

export default Charter;
