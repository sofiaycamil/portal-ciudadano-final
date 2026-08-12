from flask import Flask, render_template

app = Flask(__name__)


# Página principal
@app.route("/")
def inicio():
    return render_template("index.html")


# Constitución
@app.route("/constitucion")
def constitucion():
    return render_template("constitucion.html")


# Vida cotidiana
@app.route("/vida-cotidiana")
def vida_cotidiana():
    return render_template("vida_cotidiana.html")


# Internet
@app.route("/internet")
def internet():
    return render_template("internet.html")


# Consumidores
@app.route("/consumidores")
def consumidores():
    return render_template("consumidores.html")


# Responsabilidad
@app.route("/responsabilidad")
def responsabilidad():
    return render_template("responsabilidad.html")


# Quiz
@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


if __name__ == "__main__":
    app.run(debug=True)