import PlaceModel from "../models/Place.js";

export const getPlace = async (req, res) => {
    try {
        const { category } = req.query;
        let places;

        if (category) {
            places = await PlaceModel.find({ category: category });
        } else {
            places = await PlaceModel.find({ category: "international" });
        }

        res.json({
            success: true,
            places
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }

}

export const addPlace = async (req, res) => {
    try {
        const { name, category, image, coverImage } = req.body;

        if (!name || !category || !image || !coverImage) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const place = await PlaceModel.create({
            name,
            category,
            image,
            coverImage
        });

        res.status(201).json({
            message: "Place added successfully",
            place
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to add place" });
    }
}


