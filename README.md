## (1) Type safe MyArray class

After install dependencies, please run the following command and check console logs.

`npm run start1`

## (2) Error handling

I used to follow my own error handling practices, and 
by investing a right solution on internet, I would propose below implementation.

1. Type definition of success data and custom error objects. 
https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af

2. If I use typescript, especially on frontend,
I would abstract `Result` type and combine with the way in the above blog.
https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n

3. Create an error handler, which handle multiple exceptions.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch#%EC%A1%B0%EA%B1%B4%EC%A0%81_catch_%EB%AC%B8

- server-side: It would be an error handler middleware, 
which can be called by `next()` in the catch block in API or Service context.

```
class CustomError1 extends Error {
  constructor(message) {
    super(message)
    this.status = 400;
    this.name = 'ValidationError'
    this.message = message
  }
}

class CustomError2 extends Error {
  constructor(message) {
    super(message)
    this.status = 403;
    this.name = 'PermissionError'
    this.message = message
  }
}
...

// Example code in Express Error handler
app.use((e, req, res, next) => {

  if (e instanceof CustomError1) {
    // statements to handle CustomError1 exceptions
  } else if (e instanceof CustomError2) {
    // statements to handle CustomError2 exceptions
  } else if (e instanceof CustomError3) {
    // statements to handle CustomError3 exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }

  res.status(e.status || 500).send({
    success: false,
    name: e.name,
    message: e.message
  });
});

// Example routine 1
myroutine1 = () => {
    if(condition1) {
        throw new CustomError1('message1!');
    }

    if(condition1) {
        throw new CustomError2('message2!');
    }
    return result;    
}

// Controller 
async (req, res, next) => {
    try {
        // may throw three types of exceptions, and don't know where the exception would raise.
        myroutine1(); 
        myroutine2();
        myroutine3();
    } catch (e) {
        nextHandler();
    } finally {
        // next statement after try-catching block
    }
}

```

## (3) Cache it!!

After install dependencies, please run the following command and check console logs.

`npm run start3`

## (4) Clumsy query

I think the most important problem is that orginal code doesn't prevent SQL injection.
So I would change it to parameter based.
And additionally I could add catch function, but it's not mandatory.

```
findOneByEmail(email: string): Promise<any> {
    return getRepository(User)
        .createQueryBuilder('user')
        .where("user.firstName = :email", { email })
        .getOne()
        .catch(console.error)
}
```

}
