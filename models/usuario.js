class Usuario {
    constructor(nombre, apellido, username, password, token) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}

module.exports = Usuario;