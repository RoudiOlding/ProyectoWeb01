const{
    getRegisterBookService, 
    getBookAtributesService,
    updateBookAtributesService,
    updateBookingBookService,
    getAllBookService,
    getMostRequestedBooksService,
    getLibrosUserProxService
} = require("../service/book.service.js")

const getRegisterBook = async (req,res) =>{
    try{
      const result = await getRegisterBookService(req.body);
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Book Register",
      });
    }catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
const getAllBook = async (req, res)=>{
    const libros = await getAllBookService()
    return res.status(200).json(libros)
}

const getBookAtribute = async (req, res)=>{
    const id = req.params.id;
    const result = await getBookAtributesService(id);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"}) 
}

const updateBookAtributes = async (req,res)=>{
    const result = await updateBookAtributesService(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"})
}

const updateStatusBooking = async(req,res)=>{
    const id = req.params.id;
    const result = await getBookAtributeService(id);
    if (result){
        await updateBookingBookService(id);
        return res.status(500).json ({message:"Libro devuelto"})
    } else 
        return res.status(500).json ({message:"No encontrado"})
}
const getMostRequestedBooks = async (req,res)=>{
    const resutl = await getMostRequestedBooksService();
    if (resutl)
        return res.status(200).json(resutl)
    else 
    return res.status(500).json({message:"No encontrado"})
}
const getLibrosUserProx = async (req,res)=>{
    const resutl = await getLibrosUserProxService();
    if (resutl)
        return res.status(200).json(resutl)
    else 
    return res.status(500).json({message:"No encontrado"})
}

module.exports= {
    getRegisterBook,getAllBook,getBookAtribute,updateBookAtributes,updateStatusBooking,getMostRequestedBooks,getLibrosUserProx};