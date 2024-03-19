from alchemyClasses import db
from sqlalchemy import Column, Integer, String


class Usuario(db.Model):

    __tablename__ = 'usuarios'
    idUsuario = db.Column(Integer, primary_key=True)
    nombre = db.Column(String(200))
    email = db.Column(String(500), unique=True)
    password = db.Column(String(64))

    def __init__(self, nombre, email, passwd):
        self.nombre = nombre
        self.email = email
        self.password = passwd

    def __str__(self):
        return f'idUsuario: {self.idUsuario}\nnombre: {self.nombre} \n'