import Userdetails from "../models/userdetails.model.js";

// GET all user details
export const getUserDetails = async (req, res) => {
    try {
        const data = await Userdetails.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST new user details
export const postUserDetails = async (req, res) => {
    try {
        await Userdetails.create(req.body);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT - Update user details (Replaces whole document)
export const putUserDetails = async (req, res) => {
    try {
        const data = await Userdetails.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PATCH - Update user details (Partially updates)
export const patchUserDetails = async (req, res) => {
    try {
        const data = await Userdetails.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({data, message: "User updated successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE user details
export const deleteUserDetails = async (req, res) => {
    try {
        const data = await Userdetails.findByIdAndDelete(req.params.id);

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
