import express from "express";
import { FoodModel } from "../../database/allModels";
import { validateCategory, validateId } from "../../validation/common.validation";

const Router = express.Router();


/**
 * Route - /food
 * Des -  create food item
 * Params -  none
 * Access -  public
 * Method - Post
 */

Router.post("/", async (req, res) => {
  try {
    const { data } = req.body;

    await FoodModel.create(data);

    const allFoods = await FoodModel.find();

    return res.status(200).json({
      success: true,
      data: allFoods,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



/**
 * Route - /:id
 * Des -  get food based on id
 * Params -  _id
 * Access -  public
 * Method - Get
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await validateId(req.params);

    const foods = await FoodModel.findById(_id);

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



/**
 * Route - /r/:id
 * Des -  get all food based on perticular restaurant
 * Params -  _id
 * Access -  public
 * Method - Get
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await validateId(req.params);

    const foods = await FoodModel.find({
      restaurant: _id,
    });

    return res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



/**
 * Route - /c/:category
 * Des -  get all food based on perticular category
 * Params -  category
 * Access -  public
 * Method - Get
 */

Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;

    await validateCategory(req.params);

    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    return res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



export default Router;
