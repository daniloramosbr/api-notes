import {
  create,
  deleteService,
  findAll,
  findId,
  updateId,
} from "../services.js/service.js";

class Controller {

  async PostNotes(req, res) {

    try {
     
      const body = req.body

      const user = await create(body)

      res.status(201).send(user)
    

    } catch (error) {
      res.status(500).send(error);
    }

  }

  async GetNotes(req, res) {

    try {
      const user = await findAll();
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }

  }

  async GetId(req, res) {

    try {

      const id = req.id

    const result = await findId(id);

    res.status(200).send(result);
    
      
    } catch (error) {
      res.status(500).send(error)
    }
  }

  async Deletenotes(req, res) {

   try {
    const id = req.id;

    await deleteService(id);

    res.status(200).send("apagado com sucesso!");
   } catch (error) {
    res.status(500).send(error)
   }
  }

  async PutNotes(req, res) {
    try {
      const { text } = req.body;

      const id = req.id;

      await updateId(id, text);

      res.status(201).send("texto atualizado com sucesso!");
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default new Controller();
