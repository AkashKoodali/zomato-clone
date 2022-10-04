import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route - /
 * Des -  get authorized user data
 * Params -  none
 * Access -  private
 * Method - Get
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } = req.user;

      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route - /:_id
 * Des -  get user data (For the review system)
 * Params -  none
 * Access -  public
 * Method - Get
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await validateId(req.params);

    const getUser = await UserModel.findById(_id);

    if (!getUser) return res.status(404).json({ error: "User not found" });

    const { fullName } = getUser;

    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route - /:_id
 * Des -  update user data
 * Params -  none
 * Access -  private
 * Method - Put
 */

Router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;

      await validateId(req.params);

      const { userData } = req.body;

      const updateUserModel = await UserModel.findByIdAndUpdate(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.json({ user: updateUserModel });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);


export default Router;
