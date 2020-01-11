# Node Auth TDD with Jest

A simple authentication built with Node.js, Express, and Jest to explore the TDD test method.

> The Jest coverage part is with a bug that the file **\_\_tests\_\_/coverage/lcov-report/index.html** is not showing the test coverage percentage. I'm following the [issue](https://github.com/facebook/jest/issues/9388) and I'll update the Jest version after the problem be solved

## Installation

Clone the project on your computer

```
git clone https://github.com/devmathiusso/node-auth-tdd-jest.git
```

Install the dependencies

`yarn` or `npm install`

Rename the `.env.example` file to `.env`

Rename the `.env.test.example` file to `.env.test`

Configure the `.env` and `.env.test` file with your App Secret and your database credentials

> **Warning:** do not change the **DB_DIALECT** value inside the **.env.test** file

#### Run tests:

`yarn test` or `npm run test`

#### Run the application simulating the **development** environment:

`yarn dev` or `npm run dev`

#### Run the application simulating the **production** environment:

`yarn start` or `npm run start`

## Built With

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)

## Additional Packages

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [factory-girl](https://github.com/aexmachina/factory-girl#readme)
- [faker](https://github.com/Marak/Faker.js#readme)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [pg](http://github.com/brianc/node-postgres)
- [sequelize](https://sequelize.org/)
- [nodemon](http://nodemon.io)
- [sequelize-cli](https://github.com/sequelize/cli)
- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [supertest](https://github.com/visionmedia/supertest#readme)

## Versioning

I use [Git](https://git-scm.com/) for versioning.

## What I Learned

- Create a test to validate authentication with valid credentials
- Create a test to validate password hashing and comparison
- Create a test to validate if the JWT token was returned when authenticated successfully
- Create a test to validate if the user can access private routes when authenticated
- Create a test to validate if the user can't access private routes without or with an invalid JWT token
- Install and configure Jest
- Configure Jest coverage report
- Configure and connect the application to the database using Sequelize
- Create migrations with Sequelize
- Set environment variables specifically for both tests and development
- Run migrations before and after tests automatically
- Create factories to automate user creation into the database using [factory-girl](https://github.com/aexmachina/factory-girl#readme)
- Automatically generate data (name, email, and password) using [faker](https://github.com/Marak/Faker.js#readme)

## Authors

- **Victor Mathiusso**
