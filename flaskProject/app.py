from flask import Flask, render_template, url_for, redirect
from alchemyClasses import db
from contollers.BPController import bp
from contollers.UserController import user, main_view
from contollers.MovieController import movie, main_view_movie
from contollers.RentController import rent, main_view_rent

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software"
app.config.from_mapping(
    SECRET_KEY='dev'
)
app.register_blueprint(bp)
app.register_blueprint(user)
app.register_blueprint(movie)
app.register_blueprint(rent)

db.init_app(app)

@app.route('/')
def main_app():
    return render_template('index.html')

@app.route('/user')
def accion_boton1():
    return main_view()

@app.route('/movie')
def accion_boton2():
    return main_view_movie()

@app.route('/rent')
def accion_boton3():
    return main_view_rent()

@app.route('/another-route')
def another_world():
    return render_template('new-controller.html')

@app.route('/redirect')
def not_here():
    return redirect(url_for('another_world'))

if __name__ == '__main__':
    app.run()
