import { saveInfo, fetchInfo } from '../controllers/info'
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controllers/student'
import Router from 'koa-router';

const router = new Router()
router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)
module.exports = router
