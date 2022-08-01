import React from 'react';

const Navhelp = ({versionView, isVersionView}) => {
    return (
        <div className='navhelp' >
         <div className='d-flex justify-content-between'>
          <div className='box-search'>
            <input 
            type="text" 
            placeholder='Buscar capitulo' 
            className='input-search'
            />
            <i class="bi bi-search"></i>
          </div>

          <div className='box-search'>
            <input 
            type="text" 
            placeholder='Buscar palabra' 
            className='input-search'
            />
            <i className="bi bi-search"></i>
          </div>

          <div className='box-padre'>
            <h6 onClick={isVersionView}>Version</h6>
            <div id='idVersiones'></div>
          </div>

         </div>



        {
          versionView===true &&
            <ul className='box-version' >
                <li className='text-white my-2' >Reina Valera 1960</li>
                <li className='text-white my-2'>Biblia del Oso 1906</li>
            </ul>
        }
         
        </div>
    );
}

export default Navhelp;
