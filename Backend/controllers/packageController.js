import PackageModel from "../models/Package.js";

export const addPackage = async (req, res) => {
    try {
        const {
            placeId,
            title,
            description,
            price,
            duration,
            image
        } = req.body;

        if (!placeId || !title || !price) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const pack = await PackageModel.create({
            placeId,
            title,
            description,
            price,
            duration,
            image
        });

        res.status(201).json({
            message: "Package added successfully",
            package: pack
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to add package" });
    }
}

export const getPackageList = async (req, res) => {
    try {
        const packages = await PackageModel.find({
            placeId: req.params.placeId
        });

        res.json({
            success:true,
            packages
        });
    } catch (errror) {
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }

}

export const getPackageDetails = async (req, res) => {
    try {
        const { packageId } = req.params;

        const pack = await PackageModel.findById(packageId).populate("placeId");

        if (!pack) {
            return res.status(404).json({ message: "Package not found" });
        }

        res.json(pack);

    } catch (error) {
        res.status(500).json({ message: "Failed to fetch package details" });
    }
}