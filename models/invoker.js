class invoker {
    constructor() {
      this.listaDeComandos = [];
    }
  
    agregarComando(comando) {
      this.listaDeComandos.push(comando);
    }
  
    ejecutarComando() {
      this.listaDeComandos.forEach(comando => comando.execute());
      this.listaDeComandos = [];
    }
  
    deshacer() {
      if (this.listaDeComandos.length > 0) {
        this.listaDeComandos.pop().undo();
      }
    }
  }
  
  module.exports = invoker;