import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels";
import { ValidateOrderDetails } from "../../validation/order.validation";

const Router = express.Router();

/**
 * Route - /
 * Des -  Get all orders by user id
 * Params -  none
 * Access -  private
 * Method - Get
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const getOrders = await OrderModel.findOne({ user: user._id });

      if (!user) return res.status(400).json({ error: "User not Found" });

      return res.status(200).json({ orders: getOrders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route - /new
 * Des -  Add new order
 * Params -  none
 * Access -  private
 * Method - POST or PUT
 */

Router.put(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const { orderDetails } = req.body;

      await ValidateOrderDetails(req.body);

      const addNewOrder = await OrderModel.findOneAndUpdate(
        {
          user: user._id,
        },
        {
          $push: {
            orderDetails: orderDetails,
          },
        },
        {
          new: true,
        }
      );

      return res.json({ order: addNewOrder });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);


export default Router;
