import generateToken, { createLogin, findLogin } from "../services.js/serviceLogin.js"
import { findEmail } from "../services.js/serviceLogin.js"
import bcrypt from "bcrypt";

class ControllerLogin {

   async PostLogin (req, res) {

      const body = req.body

      try {
        
       const user = await createLogin(body)

        const token = generateToken(user.id, user.username)

        res.status(201).send(token)

      } catch (error) {

        res.send(error.message)
      }

    }

    async GetLogin (req, res) {
        
       try {

       const user = await findLogin()

       res.send(user)
        

       } catch (error) {
        res.send(error.message)
       }

    }

    async ValidEmail(req, res) {

      const {email, password} = req.body 

      try {

        const user = await findEmail(email)

        if (user < 1) { 
         return res.status(404).send({
            message: 'usuário ou senha incorretos'
          })
        }

        const passwordIsValid = bcrypt.compare(password, user[0].password)


        if (!passwordIsValid) {

         return res.status(404).send({
            message: 'usuário ou senha incorretos'
          })
        }

        const token = generateToken(user[0].id, user[0].username)

        res.status(201).send(token)
        
      } catch (error) {

        return error
      }

    }

}

export default new ControllerLogin()