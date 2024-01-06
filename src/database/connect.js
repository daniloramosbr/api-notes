
import mongoose from "mongoose"

export const connectDb = () => {

    console.log('tentando conectar ao banco de dados...')

    mongoose.connect(process.env.URL_DB).then(()=> {

        console.log('conectado ao banco de dados!')

    }).catch((err)=> {

        console.log(err)
    })

}