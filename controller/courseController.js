const db = require("../model/dbConnect");

const course = db.Course;

module.exports = {
    // Add Course
    addCourse: async(req, res, next) => {
        try {
            let info = {
                courseName: req.body.courseName,
            }

            const addCourse = await course.create(info)

            res.status(200).send(addCourse)
        } catch (error) {
            next(error)
        }
    },

    // Get All Courses
    getAllCourse: async(req, res, next) => {
        try {
            let courses = await course.findAll({})
            res.status(200).send(courses)
        } catch (error) {
            next(error)
        }
    },
    
    // Get Course by ID
    getCourse: async(req, res, next) => {
        try {
            let id = req.params.id
            let Course = await course.findOne({where: {course_id: id}})

            if(!course) {
                throw(createError(404, "Course does not exist."))
            }
            res.status(200).send(Course)
        } catch (error) {
            next(error)
        }
    },

    // Update Course by ID
    updateCourse: async(req, res, next) => {
        try {
            let id = req.params.id

            const updateCourse = await course.update(req.body, {where: {course_id: id}})

            if(!course) {
                throw(createError(404, "Course does not exist."))
            }
            res.status(200).send(updateCourse)
        } catch (error) {
            next(error)
        }
    },
}