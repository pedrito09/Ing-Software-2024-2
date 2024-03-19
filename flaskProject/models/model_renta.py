from alchemyClasses.Renta import Renta

def get_all_rents():
    rents = Renta.query.all()
    rent_list = []
    for rent in rents:
        rent_data = {
            'idRentar': rent.idRentar,
            'idUsuario': rent.idUsuario,
            'idPelicula': rent.idPelicula,
            'fechaRenta': str(rent.fecha_renta),
            'diasDeRenta': rent.dias_de_renta,
            'estatus': rent.estatus,
        }
        rent_list.append(rent_data)
    return rent_list


def create_rent(idUsuario, idPelicula, fechaRenta):
    renta = Renta(idUsuario, idPelicula, fechaRenta)
    Renta.query.session.add(renta)
    Renta.query.session.commit()

def change_status(id_renta):
    renta = Renta.query.get(id_renta)
    if renta.estatus == 1:
        renta.estatus = 0
    else:
        renta.estatus = 1
    Renta.query.session.commit()

def get_rent_by_id(id):
    return Renta.query.filter(Renta.idRentar == id)