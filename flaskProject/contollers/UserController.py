from random import randint
from alchemyClasses import db
from sqlalchemy.exc import IntegrityError
from flask import Blueprint, request, render_template, redirect, url_for, flash
from models.model_usuario import get_all_users, Usuario, create_user, delete_user, update_user, get_user_by_id

user = Blueprint('user', __name__, url_prefix='/user')

@user.route('/')
def main_view():
    users = get_all_users()
    return render_template('vista-usuario.html', users=users)

@user.route('/registrar', methods=('GET', 'POST'))
def registrar():
    if request.method == 'POST':
        nombre = request.form['nombre']
        passwd = request.form['passwd']
        correo = request.form['correo']
        create_user(nombre, correo, passwd)
        return redirect(url_for('user.main_view'))

    return render_template('user-registration.html')

@user.route('/actualizar_usuario/<int:id_usuario>', methods=['GET', 'POST'])
def actualizar_usuario(id_usuario):
    usuario = Usuario.query.get(id_usuario)
    if request.method == 'POST':
        usuario.nombre = request.form['nombre']
        usuario.email = request.form['email']
        usuario.password = request.form['password']
        db.session.commit()
        return redirect(url_for('user.main_view'))

    return render_template('user-update.html', usuario=usuario)

@user.route('/eliminar_usuario/<int:id_usuario>')
def eliminar_usuario(id_usuario):
    try:
        delete_user(id_usuario)
        return redirect(url_for('user.main_view'))
    except IntegrityError:
        return redirect(url_for('user.error_usuario'))

@user.route('/error_usuario')
def error_usuario():
    mensaje = 'Error: No se puede puede eliminar usuario.'
    r = randint(0,2)
    if r == 0:
        flash(mensaje)
    return render_template('error_user.html')

