import React, { useState, useEffect } from "react";
import Header from "../partials/Header";

function Exito() {
    const [data, setData] = useState({}); // Cambiar a un objeto en lugar de un arreglo

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const responseJson = urlParams.get('response'); // Obtener el parámetro 'response' de la URL
        
        if (responseJson) {
            const responseData = JSON.parse(responseJson);
            setData(responseData);
        }
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="col-6 border">
                                Nombre: 
                            </div>
                            <div className="col-6 border">
                                { data.respuesta[0] }
                            </div>
                            <div className="col-6 border">
                                Correo
                            </div>
                            <div className="col-6 border">
                                { data.respuesta[1] }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exito;
