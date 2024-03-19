from alchemyClasses import db
from sqlalchemy import Column, Integer, String

class Pelicula(db.Model):

    __tablename__ = 'peliculas'
    idPelicula = db.Column(Integer, primary_key=True)
    nombre = db.Column(String(200))
    genero = db.Column(String(45))
    duracion = db.Column(Integer)
    inventario = db.Column(Integer)

    def __init__(self, nombre, genero, duracion=120, invent=5):
        self.nombre=nombre
        self.genero=genero
        self.duracion=duracion
        self.inventario=invent

    def __str__(self):
        return f'f{self.nombre}'