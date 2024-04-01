const db = require("../model/dbConnect");
students = db.Student;

module.exports = {
  //add a student
    addStudent: async(req, res, next) => {
        try {
            let info = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
            }

            const addStudent = await students.create(info)

            res.status(200).send(addStudent)
        } catch (error) {
          console.log(error)
            next(error)
        }
    },
    //get all students
    getAllStudent: async(req, res, next) => {
        try {
            let student = await students.findAll({})
            res.status(200).send(Student)
            
        } catch (error) {
            next(error)
        }
    },
    //get student by id
    getStudent: async (req, res, next) => {
      try{
        let id = req.params.id
        let Student = await students.findOne({where: {student_id: id }})

        if (!students) {
          throw (createError(404, "student not found"))
        }
        res.status(200).send(Student)

      }catch (error) {
        next(error)
      }
    },
    
    updateStudent: async (req,res,next)=>{
      try{
         let id = req.params.id

         const updateStudent = await students.update(req.body, {where: {student_id: id}})
         if (!students) {
          throw (createError(404, "student not found"))
        }
        res.status(200).send(updateStudent)

      }catch (error) {
        next(error)
      }
    },
    //delete student
    deleteStudent:async (req,res,next)=>{
      try{
         let id = req.params.id

         const deleteStudent = await students.destroy({where: {student_id: id}})
         if (!students) {
          throw (createError(404, "student not found"))
        }
        res.status(200).send(deleteStudent)
        
      }catch (error) {
        next(error)
      }
    }
}