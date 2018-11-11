import {
  GraphQLSchema,
  GraphQLObjectType
  } from 'graphql'
import {info, infos} from './info'
import {student} from './student'
import {course} from './course';

// 导出schema模块
export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Queries',
      fields: {
        infos,
        info,
        student,
        course
      }
    })
  })