import React from 'react';

const Charter = ( { charterNumber, rewCharter, getCharter }) => {
    return (
        <div className='contenedor-libro vh-100'>
            <div className='row'>
                <div className='d-flex justify-content-between border-buton'>
                <h5 className='text-center'>{charterNumber.book}</h5>
                <button className="btn btn-per" onClick={rewCharter} >
                   <i class="bi bi-x-lg icon-text-danger"></i>
                </button>
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
