import React, {useState, useEffect} from 'react';

const BoxBusqueda = ({found, getCharter, setEstadoFound, estado1, search}) => {

    const [estado, setEstado]=useState(null) //render pantalla
    const [palabra, setPalabra]=useState(null)
    const [obj, setObj]=useState(null)
    const [obj2, setObj2]=useState(null)
    const [msj, setMsj]=useState(null)

    useEffect(() => {
        
        const dataIn = ()=>{
            if(found.palabra){
                setPalabra(found.palabra)
                setEstado("palabra")
            }
            if(found.obj){
                setObj(found.obj)
                setEstado("obj")
            }
            if(found.obj2){
                setObj2(found.obj2)
                setEstado("obj2")
            }
            if(found.msj){
                setMsj(found.msj)
                setEstado("msj")
            }
        }

        dataIn()
    }, [estado1]);


    if(estado==="palabra"){
        return (
            <div className='row'>
                <BoxSearch search={search} palabra={palabra} obj={obj} obj2={obj2} />
                <div className='busqueda-palabra '>
                    <h6 className='mb-5'>La palabra <strong >{search}</strong> aparece <strong>{palabra.length}</strong> veces </h6>
                    {
                        palabra.map(x=>(
                            <div key={x._id} className="busqueda-palabra-box">
                                <h6>{x.originCharter}</h6>
                                <p>
                                    <strong className='me-2'>{x.numero}</strong>
                                    <span>{x.versiculo}</span>
                                </p>
                                <h5> <strong> Ver capitulo completo</strong></h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }


    if(estado==="obj"){
        return (
            <div className='row'>
                 <BoxSearch search={search} palabra={palabra} obj={obj} obj2={obj2} />
                <div className='busqueda-palabra '>
                    <h6>{obj.charter}</h6>
                    <p>
                        <strong className='me-2'>{obj.verses[0].numero}</strong>
                        <span>{obj.verses[0].versiculo}</span>
                    </p>
                    <h5> <strong> Ver capitulo completo</strong></h5>
                </div>
            </div>
        )
    }

    if(estado==="obj2"){
        return (
            <div className='row'>
                 <BoxSearch search={search} palabra={palabra} obj={obj} obj2={obj2} />
                <div className='busqueda-palabra '>
                    <h6>{obj2.charter}</h6>
                    {
                        obj2.verses.map(x=>(
                            <div key={x._id} >
                                <h6 className='verses-busqueda py-2'>
                                    <strong className='me-2'>{x.numero}</strong>
                                    <span>{x.versiculo}</span>
                                </h6>
                            </div>
                        ))
                    }
                    <h5> <strong> Ver capitulo completo</strong></h5>
                </div>
            </div>
        )
    }


    
}

const BoxSearch = ({search, palabra, obj, obj2})=> (
    <div className='box-content'>
        <div className='d-flex justify-content-start my-1 mx-2' >
            {
                palabra !== null && <h6>Busqueda Palabra</h6>
            }
            {
                obj !== null && <h6>versiculo</h6>
            }
            {
                obj2 !== null && <h6>capitulo + versiculos</h6>
            }
           
            
        </div>
    </div>
)



export default BoxBusqueda;
