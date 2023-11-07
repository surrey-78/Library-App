const booksModel = require('../models/bookModel')

const addNewBook = async(request,response) => {
    const newBook = request.body

    try{
        const existingBook = await booksModel.findOne({ISBN : newBook.ISBN})

        if (existingBook){
            return response.status(409).json({message : 'ISBN number already exists.'})
        }

        const insertedBook = await booksModel.create(newBook)
        return response.status(201).json(insertedBook)
    }
    catch(error)
    {
        return response.send(500).json({message : error.message})
    }
}

module.exports = {addNewBook}