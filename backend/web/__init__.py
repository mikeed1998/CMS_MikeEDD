import os
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
# from flask_mail import Mail
from web.config import Config
# # import MySQLdb


# db = SQLAlchemy()
# bcrypt = Bcrypt()
# login_manager = LoginManager()
# login_manager.login_view = 'users.login'  # a donde me manda en caso de fallar login_required
# login_manager.login_message_category = 'info'

# mail = Mail()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    # db.init_app(app)
    # bcrypt.init_app(app)
    # login_manager.init_app(app)
    # mail.init_app(app)

    from web.front.routes import front
    
    app.register_blueprint(front)

    return app

