import mongoose from "mongoose";

export const validId = (req, res, next) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(500).send({
        message: "id invalid",
      });
    }

    req.id = req.params.id;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};
