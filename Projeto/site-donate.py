from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/Contato")
def contato():
    return  render_template("contato.html")

@app.route("/usuarios/<nome_usuario>")
def usuarios(nome_usuario):
    return  render_template("usuarios.html" , nome_usuario=nome_usuario)    

@app.route("/login")
def login():
    return  render_template("login.html")   

@app.route("/catalogo")
def catalogo():
    return  render_template("catalogo.html")

if  __name__    ==  "__main__":

        app.run(debug=True)

