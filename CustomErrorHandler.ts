import { CustomError1, CustomError2 } from './CustomError'

const CustomErrorHandler = (e: CustomError1 | CustomError2) => {
  if (e instanceof CustomError1) {
    // statements to handle CustomError1 exceptions
    console.log({
      statusCode: e.status,
      name: e.name,
      message: e.message
    })
    console.log('CustomError1 has been handled!')
  } else if (e instanceof CustomError2) {
    // statements to handle CustomError2 exceptions
    console.log({
      statusCode: e.status,
      name: e.name,
      message: e.message
    })
    console.log('CustomError2 has been handled!')
  } else {
    // statements to handle any unspecified exceptions
    // logMyErrors(e); // pass exception object to error handler
    console.error('Unhandled exception!')
  }
}

export default CustomErrorHandler
