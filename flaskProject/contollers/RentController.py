from random import randint
from datetime import datetime, timedelta
from sqlalchemy.exc import IntegrityError
from alchemyClasses import db, Renta
from flask import Blueprint, request, render_template, redirect, url_for, flash
from models.model_renta import Renta, get_all_rents, get_rent_by_id, create_rent, change_status

rent = Blueprint('rent', __name__, url_prefix='/rent')


@rent.route('/')
def main_view_rent():
    rentas = get_all_rents()
    return render_template('vista-renta.html', rentas=rentas)


@rent.route('/registrar_renta', methods=['GET', 'POST'])
def registrar():
    if request.method == 'POST':
        idUsuario = int(request.form['idUsuario'])
        idPelicula = int(request.form['idPelicula'])
        fechaRenta = datetime.strptime(request.form['fechaRenta'], '%Y-%m-%d')

        try:
            create_rent(idUsuario, idPelicula, fechaRenta)
            return redirect(url_for('rent.main_view_rent'))
        except IntegrityError:
            return redirect(url_for('rent.error_rent'))
    return render_template('rent-registration.html')


@rent.route('/error-rent')
def error_rent():
    mensaje = 'Error: No se puede registrar la renta. El usuario o película no existen.'
    r = randint(0, 2)
    if r == 0:
        flash(mensaje)
    return render_template('error-rent.html')


@rent.route('/estatus/<int:id_renta>', methods=['GET', 'POST'])
def estatus(id_renta):
    renta = Renta.query.get(id_renta)

    if request.method == 'POST':
        nuevo_estatus = request.form['estatus'] == 'true'
        renta.estatus = nuevo_estatus
        db.session.commit()
        return redirect(url_for('rent.main_view_rent'))

    return render_template('rent-update.html', renta=renta)
