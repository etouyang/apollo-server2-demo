import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
  } from 'graphql'
import mongoose from 'mongoose'

const Course = mongoose.model('Course')
const objType = new GraphQLObjectType({
    name: 'meta',
    fields: {
        createdAt: {
            type: GraphQLString
        },
        updateDAt: {
            type: GraphQLString
        }
    }
})

let CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: {
        _id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        desc: {
            type: GraphQLString
        },
        page: {
            type: GraphQLInt
        },
        author: {
            type: GraphQLString
        },
        meta: {
            type: objType
        }
    }
})

const course = {
    type: new GraphQLList(CourseType),
    args: {},
    resolve (root, params, options) {
        return Course.find({}).exec()
    }

}

export {
    course
}