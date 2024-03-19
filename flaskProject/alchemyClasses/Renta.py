from alchemyClasses import db
from sqlalchemy import Column, Integer, ForeignKey, DateTime, Boolean
from datetime import date

from models.model_peliculas import get_pelicula_by_id
from models.model_usuario import get_user_by_id


class Renta(db.Model):
    __tablename__ = 'rentar'
    idRentar = db.Column(Integer, primary_key=True)
    idUsuario = db.Column(Integer, ForeignKey('usuarios.idUsuario'))
    idPelicula = db.Column(Integer, ForeignKey('peliculas.idPelicula'))
    fecha_renta = db.Column(DateTime)
    dias_de_renta = db.Column(Integer)
    estatus = db.Column(Boolean)

    def __init__(self, idUsuario, idPelicula, fechaRenta):
        self.idUsuario = idUsuario
        self.idPelicula = idPelicula
        self.fecha_renta = fechaRenta
        self.dias_de_renta = 5
        self.estatus = False

    def __str__(self):
        usuario = get_user_by_id(self.idUsuario)
        peli = get_pelicula_by_id(self.idPelicula)
        return f'Renta: {self.idRentar}\nUsuario: {usuario.nombre}\nPelicula: {peli.nombre}'

    def estatus_es_true(self):
        return self.estatus == True

    def estatus_es_false(self):
        return self.estatus == False