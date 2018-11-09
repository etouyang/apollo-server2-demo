import mongoose from 'mongoose'

const Info = mongoose.model('Info')
const saveInfo = async (ctx, next) => {
    let opts = ctx.request.body
    console.log(opts)
    let info = new Info(opts)
    let saveInfo = await info.save()
    console.log(saveInfo)
    if(saveInfo) {
        ctx.body = {
            success: true,
            info: saveInfo
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

const fetchInfo = async (ctx, next) => {
    let infos = await Info.find({})
    if(infos.length) {
        ctx.body = {
            success: true,
            info: infos
        }
    } else {
        ctx.body = {
            success: false
        }
    }
}

export {
    saveInfo, 
    fetchInfo
}
