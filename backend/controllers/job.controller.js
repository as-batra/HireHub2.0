import { Job } from "../models/job.model.js";

// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const { keyword = "", location = "", salary = "", page = 1, limit = 6 } = req.query;
        const query = {};

        if (keyword) {
            query.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ];
        }

        if (location) {
            query.location = { $regex: location, $options: "i" };
        }

        if (salary) {
            const cleanSalary = salary.trim().toLowerCase();
            if (cleanSalary === "0-40k") {
                query.salary = { $gte: 0, $lte: 40000 };
            } else if (cleanSalary === "42-1lakh") {
                query.salary = { $gte: 42000, $lte: 100000 };
            } else if (cleanSalary === "1lakh to 5lakh") {
                query.salary = { $gte: 100000, $lte: 500000 };
            } else if (cleanSalary.includes("-")) {
                const parts = cleanSalary.split("-").map(p => parseInt(p.trim()));
                if (!isNaN(parts[0]) && !isNaN(parts[1])) {
                    query.salary = { $gte: parts[0], $lte: parts[1] };
                }
            } else {
                const numericSalary = parseInt(cleanSalary);
                if (!isNaN(numericSalary)) {
                    query.salary = { $gte: numericSalary };
                }
            }
        }

        const currentPage = Number(page);
        const currentLimit = Number(limit);
        const skip = (currentPage - 1) * currentLimit;

        const totalJobs = await Job.countDocuments(query);
        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(currentLimit);

        const totalPages = Math.ceil(totalJobs / currentLimit);

        return res.status(200).json({
            jobs,
            totalPages,
            currentPage,
            totalJobs,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
