import express from 'express'
import bookModel from '../Models/BookModel.js'


const bookRouter = express.Router()


bookRouter.post('/',async (req,res)=>{
    try{
        if(
            !req.body.title || 
            !req.body.author || 
            !req.body.publishYear
        ){
            return res.status(400).send({message: "Fill all the required fields"})
        }
        const newBook = {
            title: req.body.title,
            author : req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await bookModel.create(newBook)

        return res.status(201).send(book);
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

bookRouter.get('/', async(req,res)=>{
    console.log('new connection')
    try{
        const books = await bookModel.find({});
        res.status(200).json({count: books.length, data: books})
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

bookRouter.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await bookModel.findById(id);
        res.status(200).json(book)
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

bookRouter.put("/:id", async(req,res)=>{
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ){
            return response.status(400).send({message: "Fill all the required fields"})
        }

        const {id} = req.params;

        const result = await bookModel.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).send({message: "book not found"})
        }

        res.status(200).send({message: "book updated succesfully"})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

bookRouter.delete("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await bookModel.findByIdAndDelete(id)

        if(!result){
            return res.status(404).send({message: "book not found"})
        }else{
            res.status(200).send({message: "book deleted succesfully"})
    }
    }catch(err){
        res.status(500).send({message: err.message})
    }
})

export default bookRouter;