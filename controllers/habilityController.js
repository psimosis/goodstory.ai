const HabilityRepository = require('../repositories/habilityRepository')
const Habilidad = require('../models/habilidad')
async function crearHabilidadController (req, res) {
    const u = req.body
    console.log(u);
    const habilidad = new Habilidad(u.tipo, u.valor);
    const repo = HabilityRepository.getInstance();
    repo.crearHabilidad(habilidad);
    res.status(200)
    res.json({
        "status": "Hability Created"
    }).send
}

module.exports = { crearHabilidadController };