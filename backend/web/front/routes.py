from flask import render_template, url_for, flash, redirect, request, Blueprint


front = Blueprint('front', __name__)

# Members API Route
@front.route('/', methods=['GET'])
@front.route('/home', methods=['GET'])
def home():
    return {'members': ['Members1', 'Members2']}


@front.route('/contacto', methods=['GET'])
def contacto_front():
    return {}
