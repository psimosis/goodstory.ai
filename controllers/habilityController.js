const HabilityRepository = require('../repositories/habilityRepository')
const Habilidad = require('../models/habilidad')


async function crearHabilidadController(req, res) {

    const u = req.body
    const habilidad = new Habilidad(u.tipo, u.descripcion);
    const repo = HabilityRepository.getInstance();
    repo.crearHabilidad(habilidad);
    res.status(200)
    res.json({
        "status": "Hability Created"
    }).send
}

async function obtenerHabilidadController(req, res) {
    const reqTipo = req.body.tipo
    const reqValor = req.body.descripcion

    if (!reqTipo || !reqValor) {
        return res.status(400).json({
            "status": "Datos de habilidad inválidos"
        });
    }

    try {
        const repo = HabilityRepository.getInstance();
        const habilidad = await repo.obtenerHabilidad({
            tipo: reqTipo,
            descripcion: reqValor
        })
        return res.status(200).json(habilidad);
    } catch(e) {
        if (e instanceof DBError) {
            return res.status(e.statusCode).json({
              "status": e.message
            });
          } else {
            console.error(e);
            return res.status(500).json({
              "status": "Internal server error"
            });
          }
    }
}

async function listarHabilidadesController(req, res) {
    try {
        const repo = HabilityRepository.getInstance();
        const lista = await repo.listarHabilidades();
        
        res.status(200)
        res.send(lista)
    } catch(e) {
        res.status(500)
        res.json({
            "status": "Internal server error"
        }).send()
    }
}

async function borrarHabilidadController(req, res) {
    const reqTipo = req.body.tipo
    const reqValor = req.body.valor

    if (!reqTipo || !reqValor) {
        return res.status(400).json({
            "status": "Datos de habilidad inválidos"
        });
    }

    try {
        const repo = HabilityRepository.getInstance();
        const habilidadBorrada = await repo.borrar({
                tipo: reqTipo,
                valor: reqValor
        })
        
        return res.status(204).json({
            status: "Habilidad eliminada",
            genero: habilidadBorrada.tipo
        });
    } catch (e) {
        return res.status(500).json({
            "status": e.message
        });
    }
}

module.exports = { crearHabilidadController, listarHabilidadesController, obtenerHabilidadController, borrarHabilidadController };