const User = require("../model/usermodel");

const userController = {

  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await User.create({
        name,
        email,
        password
      });

      res.status(201).json(user);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  viewAll: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  profileView: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findById(id);

      res.status(200).json(user);

    } catch (error) {
      res.status(404).json({ message: "User not found" });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(user);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "User deleted successfully"
    });
  }
};

module.exports = userController;