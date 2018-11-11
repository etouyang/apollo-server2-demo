import mongoose from "mongoose";

const Course = mongoose.model('Course')
const saveCourse = async (ctx, next) => {
    let opts = ctx.request.body
    let course = new Course(opts)
    let saveCourse = await course.save()

    if (saveCourse) {
        ctx.body = {
            success: true,
            data: saveCourse
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

const fetchCourse = async (ctx, next) => {
    let courses = await Course.find({})
    if (courses.length) {
        ctx.body = {
            success: true,
            data: courses
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

export {
    saveCourse,
    fetchCourse
}
