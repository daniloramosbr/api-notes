import generateToken, { createLogin, findLogin } from "../services.js/serviceLogin.js"


class ControllerLogin {

   async PostLogin (req, res) {

      const body = req.body

      try {
        
       const user = await createLogin(body)

        const token = generateToken(user.id)

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


}

export default new ControllerLogin()