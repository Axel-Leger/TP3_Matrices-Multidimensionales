from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

personas = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/agregar", methods = ["POST"])
def agregar():
    data = request.get_json()
    nombre = data.get("nombre")
    apellido = data.get("apellido")
    dni = data.get("dni")
    telefonos = data.get("telefonos")

    personas.append({
        "nombre": nombre,
        "apellido": apellido,
        "dni": dni,
        "telefonos": telefonos
    })

    return "", 200

@app.route("/mostrar", methods =["GET"])
def mostrar():
    return jsonify(personas)

if __name__ == "__main__":
    app.run(debug=True)
