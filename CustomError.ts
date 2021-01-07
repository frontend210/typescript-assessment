class CustomError1 extends Error {
  status: number;

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError1.prototype)

    this.status = 400;
    this.name = 'CustomError1'
    this.message = message
  }
}

class CustomError2 extends Error {
  status: number;

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError2.prototype)

    this.status = 403;
    this.name = 'CustomError2'
    this.message = message
  }
}

export {
  CustomError1,
  CustomError2,
}
