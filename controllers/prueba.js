async function prueba(req, res) {
  req.user?console.log(req.user):console.log('no user');
    res.status(200).json({message:"ok"});  
  }
  
  module.exports = prueba;