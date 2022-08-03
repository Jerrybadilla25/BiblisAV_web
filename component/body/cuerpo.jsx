import React from 'react';


const Cuerpo = ({charterView}) => {

    if(charterView===null){
        return(<div>vacio</div>)
    }

    return (
        
            <div className='body-per-1'>
                <h1 className='text-1'>{charterView.charter}</h1>
            <h2 className='text-2'>{charterView.testament}</h2>
            {
                charterView.verses.map(x =>(
                    <div key={x._id}>
                        <p className='text-verses'> <span className='me-2 text-2'>{x.numero}</span> {x.versiculo}</p>
                    </div>

                ))
            }
             
            </div>
           
            
             
       
    );
}

export default Cuerpo;
