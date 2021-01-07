import CustomErrorHandler from './CustomErrorHandler'
import { CustomError1, CustomError2 } from './CustomError'

// Example routine
const myroutine = () => {
  if (Math.random() > 0.6) {
    throw new CustomError1('custom error1 detail!');
  } else if(Math.random() > 0.3) {
    throw new CustomError2('custom error2 detail!');
  }
  console.log('Success, No Exception!')
  return 1;
}

// Controller
const handler = async () => {
  try {
    // may throw three types of exceptions, and don't know where the exception would raise.
    myroutine();
  } catch (e) {
    CustomErrorHandler(e);
  } finally {
    // next statement after try-catching block
  }
}

handler()
