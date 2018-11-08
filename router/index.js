import { saveInfo, fetchInfo } from '../controllers/info'
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controllers/student'
import Router from 'koa-router';

const requestRouter = new Router()
requestRouter.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)

export {
      requestRouter
}
