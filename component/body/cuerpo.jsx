import React from 'react';


const Cuerpo = ({charterView}) => {

    if(charterView===null){
        return(<div>vacio</div>)
    }

    return (
        <div className='px-5 py-5 body-per'>
           
            <h1 className='text-center text-1'>{charterView.charter}</h1>
            <h6 className='text-center my-3 text-2'>{charterView.testament}</h6>
            {
                charterView.verses.map(x =>(
                    <div key={x._id}>
                        <p className='text-verses'> <span className='me-2 text-2'>{x.numero}</span> {x.versiculo}</p>
                    </div>

                ))
            }
             <h6 className='text-center my-5 text-2'>{charterView.version}</h6>
             
        </div>
    );
}

export default Cuerpo;
