import express from "express";
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();


/**
 * Route - /
 * Des -  get all the restaurant details based on the city
 * Params -  none
 * Access -  public
 * Method - Get
 */

Router.get("/", async (req,res) => {
    try {
        const { city } = req.query;

        const restaurants = await RestaurantModel.find({ city });
        
        if(restaurants.length === 0 ) {
            return res.json({ error: "No restaurant found in this city." });
        };

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/**
 * Route - /:_id
 * Des -  get individual restaurant details based on id
 * Params -  none
 * Access -  public
 * Method - Get
 */

 Router.get("/:_id", async (req,res) => {
    try {
        const { _id } = req.params;

        const restaurant = await RestaurantModel.findById(_id);
        
        if(!restaurant) {
            return res.status(404).json({ error: "No restaurant found." });
        };

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/**
 * Route - /search/:searchString
 * Des -  get restaurants details based on search string
 * Params -  searchString
 * Access -  public
 * Method - Get
 */

 Router.get("/search/:searchString", async (req,res) => {
    try {
        const { searchString } = req.params;

        const restaurants = await RestaurantModel.find({
            $regex: searchString, $options: "i"
        });
        
        if(!restaurants.length === 0) {
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        };

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;
