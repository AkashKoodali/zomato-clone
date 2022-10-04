import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route - /:resId
 * Des -  get all reviews for a perticular restuarant
 * Params -  resId
 * Access -  public
 * Method - Get
 */

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const { reviews } = await ReviewModel.find({ restaurant: resId }).sort({
      createdAt: -1,
    });
    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
