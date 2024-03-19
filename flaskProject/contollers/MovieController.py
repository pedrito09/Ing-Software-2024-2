from random import randint
from alchemyClasses import db
from sqlalchemy.exc import IntegrityError
from flask import Blueprint, request, render_template, redirect, url_for, flash
from models.model_peliculas import Pelicula, get_all_peliculas, create_movie, delete_movie

movie = Blueprint('movie', __name__, url_prefix='/movie')

@movie.route('/')
def main_view_movie():
    peliculas = get_all_peliculas()
    return render_template('vista-pelicula.html', peliculas=peliculas)

@movie.route('/registrar_pelicula', methods=('GET', 'POST'))
def registrar():
    if request.method == 'POST':
        nombre = request.form['nombre']
        genero = request.form['genero']
        duracion = int(request.form['duracion'])
        inventario = int(request.form['inventario'])
        create_movie(nombre, genero, duracion, inventario)
        return redirect(url_for('movie.main_view_movie'))
    return render_template('movie-registration.html')

@movie.route('/actualizar_pelicula/<int:id_pelicula>', methods=['GET', 'POST'])
def actualizar_pelicula(id_pelicula):
    pelicula = Pelicula.query.get(id_pelicula)

    if request.method == 'POST':
        pelicula.nombre = request.form['nombre']
        pelicula.genero = request.form['genero']
        pelicula.duracion = int(request.form['duracion'])
        pelicula.inventario = int(request.form['inventario'])
        db.session.commit()

        return redirect(url_for('movie.main_view_movie'))
    return render_template('movie-update.html', pelicula=pelicula)

@movie.route('/eliminar_pelicula/<int:id_usuario>')
def eliminar_usuario(id_usuario):
    try:
        delete_movie(id_usuario)
        return redirect(url_for('movie.main_view_movie'))
    except IntegrityError:
        return redirect(url_for('movie.error_movie'))

@movie.route('/error_movie')
def error_movie():
    mensaje = 'Error: No se puede puede eliminar la pelicula.'
    r = randint(0,2)
    if r == 0:
        flash(mensaje)
    return render_template('error_movie.html')

