import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


class ContactoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            correo: '',
            redirectToSuccess: false, // Agrega un estado para controlar la redirección
            response: {}  // Agrega un estado para la respuesta del servidor
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nombre: this.state.nombre,
            correo: this.state.correo,
        };

        try {
            const response = await fetch('/procesar_formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // La solicitud fue exitosa, establece el estado para redirigir a la ruta de éxito
                const responseData = await response.json();
                this.setState({ redirectToSuccess: true, response: responseData });
            } else {
                // La solicitud no fue exitosa, puedes manejar el error aquí.
                console.error('Error al enviar el formulario.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    render() {
        if (this.state.redirectToSuccess) {
            return <Navigate to={`/exito?response=${JSON.stringify(this.state.response)}`} />;
        }
        

        return (
            <>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6 py-2 text-center mx-auto">
                                <h2>Formulario Básico</h2>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6 py-2 mx-auto">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={this.state.nombre}
                                    onChange={this.handleInputChange}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6 py-2 mx-auto">
                                <label htmlFor="correo">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    value={this.state.correo}
                                    onChange={this.handleInputChange}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 py-3 mx-auto">
                                <button type="submit" className='btn btn-outline bg-secondary w-100'>Enviar</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </>
        );
    }
}

export default ContactoForm;
