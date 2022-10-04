import express from "express";
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route - /list
 * Des -  Get menu based on menu id
 * Params -  _id
 * Access -  public
 * Method - Get
 */

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const menu = await MenuModel.findById(_id);

    if (!menu) {
      return res
        .status(404)
        .json({ error: "No menu present for this restuarant" });
    }

    return res.json({ menu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Route - /image
 * Des -  Get all list of menu image with id
 * Params -  _id
 * Access -  public
 * Method - Get
 */

Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menuImage = await ImageModel.findById(_id);
    if (!menuImage)
      return res.status(404).json({
        error: "No images found",
      });
    return res.json({ menuImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default Router;
