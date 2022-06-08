async function postBusiness(req, res) {
      console.log(req.body);
      res.status(200).json({message:"ok"});  
    }
    
module.exports = postBusiness;