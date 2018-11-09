import mongoose from 'mongoose'

const Student = mongoose.model('Student')
const saveStudent = async (ctx, next) => {
    let opts = ctx.request.body
    let student = new Student(opts)
    let saveStudent = await student.save()
    console.log(saveStudent)
    if(saveStudent) {
        ctx.body = {
            success: true,
            info: saveStudent
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

const fetchStudent = async (ctx, next) => {
    let students = await Student.find({})
    if(students.length) {
        ctx.body = {
            success: true,
            info: students
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

const fetchStudentDetail = async (ctx, next) => {
    const students = await Student.find({})
                                    .populate({
                                        path: 'info',
                                        select: 'hobby height weight'
                                    })
                                    .exec()
    
    if(students.length) {
        ctx.body = {
            success: true,
            student: students
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

export {
    saveStudent, 
    fetchStudent,
    fetchStudentDetail
}
