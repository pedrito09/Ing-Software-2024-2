from alchemyClasses.Pelicula import Pelicula

def get_all_peliculas():
    peliculas = Pelicula.query.all()
    pelicula_list = []
    for pelicula in peliculas:
        pelicula_data = {
            'idPelicula': pelicula.idPelicula,
            'nombre': pelicula.nombre,
            'genero': pelicula.genero,
            'duracion': pelicula.duracion,
            'inventario': pelicula.inventario,
        }
        pelicula_list.append(pelicula_data)
    return pelicula_list


def create_movie(nombre, genero, duracion, inventario):
    pelicula = Pelicula(nombre, genero, duracion, inventario)
    Pelicula.query.session.add(pelicula)
    Pelicula.query.session.commit()


def delete_movie(id_user):
    pelicula = Pelicula.query.get(id_user)
    Pelicula.query.session.delete(pelicula)
    Pelicula.query.session.commit()


def get_pelicula_by_id(id):
    return Pelicula.query.filter(Pelicula.idPelicula == id)