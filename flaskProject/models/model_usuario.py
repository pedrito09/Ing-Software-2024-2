from alchemyClasses.Usuario import Usuario
from alchemyClasses import db


def get_all_users():
    users = Usuario.query.all()
    user_list = []
    for user in users:
        user_data = {
            'idUsuario': user.idUsuario,
            'nombre': user.nombre,
            'email': user.email,
        }
        user_list.append(user_data)
    return user_list


def create_user(name, email, psswd):
    nuevo_usuario = Usuario(name, email, psswd)
    Usuario.query.session.add(nuevo_usuario)
    Usuario.query.session.commit()


def delete_user(id_user):
    usuario = Usuario.query.get(id_user)
    Usuario.query.session.delete(usuario)
    Usuario.query.session.commit()


def update_user(id_user, name, em):
    usuario = Usuario.query.get(id_user)
    usuario.nombre = name
    usuario.email = em
    Usuario.query.update(usuario)
    db.session.commit()


def get_user_by_id(id):
    return Usuario.query.filter(Usuario.idUsuario == id)