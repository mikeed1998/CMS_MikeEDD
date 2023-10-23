from flask import render_template, url_for, flash, redirect, request, Blueprint, jsonify
from web import db, bcrypt
from web.models import User, Post
from sqlalchemy import text


front = Blueprint('front', __name__)


# Members API Route
@front.route('/', methods=['GET'])
@front.route('/home', methods=['GET'])
def home():
    response_data = {
        'members': ['Members1', 'Members2'],
        'dinero': [1,2,3,4,5,6,7,8,9]
    }
    return jsonify(response_data)


@front.route('/procesar_formulario', methods=['POST'])
def procesar_formulario():
    if request.method == 'POST':
        data = request.get_json()
        nombre = data.get('nombre')
        correo = data.get('correo')

        nombre += "_SERVER"
        correo += "_SERVER"

        # Meter a la base de datos

        # Realiza acciones con los datos, como almacenarlos en una base de datos o procesarlos.

        response_data = {
            'respuesta': [nombre, correo]
        }

        return jsonify(response_data)  # Envía el JSON de respuesta


@front.route('/exito', methods=['GET'])
def exito():
    response_data = request.args.get('response')  # Obtén los datos de la respuesta
    return jsonify(response_data)



@front.route('/aboutus', methods=['GET'])
def aboutus():
    # Crear un objeto text para la consulta SQL
    query = text("SELECT * FROM post")
    
    # Ejecutar la consulta y obtener los resultados
    result = db.session.execute(query)
    
    # Obtener los nombres de las columnas
    column_names = result.keys()
    
    # Convertir los resultados en una lista de diccionarios
    data = [dict(zip(column_names, row)) for row in result.fetchall()]
    
    response_data = {
        'basedatos': data,
        'acerca': ['Esta es la descripción de acerca de']
    }

    return jsonify(response_data)


@front.route('/contacto', methods=['GET'])
def contacto_front():
    return {}


