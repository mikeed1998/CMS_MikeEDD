
class Config:
    SECRET_KEY = 'dc16b97a5546948a8cbfb3dfe414967f'
    SQLALCHEMY_DATABASE_URI = 'mysql://root@localhost/ajax_interactivo'
    #___________________ ENVIO DE CORREOS __________________________
    MAIL_SERVER = 'mail.wozial.com'
    # CON TLS -> MÁS SEGURO
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    # CON SSL -> NO SE RECOMIENDA
    # MAIL_USE_SSL = True
    # MAIL_PORT = 465
    MAIL_USERNAME = 'michael@wozial.com'
    MAIL_PASSWORD = 'zCmfxQEz&wTM'
    # MAIL_DEBUG = True



