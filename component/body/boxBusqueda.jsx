import React, {useState, useEffect} from 'react';

const BoxBusqueda = ({found, getCharter, setEstadoFound, estado1, search}) => {

    const [estado, setEstado]=useState(null) //render pantalla
    const [palabra, setPalabra]=useState(null)
    const [idCharter, setIdCharter]=useState(null)
    const [obj, setObj]=useState(null)
    const [obj2, setObj2]=useState(null)
    const [msj, setMsj]=useState(null)

    useEffect(() => {
        console.log("use efecto otra vez")
        const dataIn = ()=>{
            if(found.palabra){
                setPalabra(found.palabra)
                setEstado("palabra")
            }
            if(found.idCharter){
                setIdCharter(found.idCharter)
                setEstado("charter")
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

    if(estado==="charter"){
        return (
            <div>
                hola charter
            </div>
        )
    }

    if(estado==="obj"){
        return (
            <div>
                hola obj
            </div>
        )
    }

    if(estado==="obj2"){
        return (
            <div>
                hola obj2
            </div>
        )
    }


    
}

export default BoxBusqueda;
