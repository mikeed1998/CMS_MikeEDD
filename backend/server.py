from flask import Flask

app = Flask(__name__)

# Members API Route
@app.route('/', methods=['GET'])
@app.route('/home', methods=['GET'])
def home():
    return {'members': ['Members1', 'Members2', 'Members3']}


@app.route('/contacto', methods=['GET'])
def contacto_front():
    return {}


if __name__ == '__main__':
    app.run(debug=True)

    