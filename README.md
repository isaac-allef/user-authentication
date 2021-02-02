<p align="center">
   <img src="https://github.com/isaac-allef/user-authentication/blob/main/public/jwt-logo.png" width="150"/>
</p>

<h1 align="center">
    User Authentication - JWT
</h1>

<h4 align="center">
  This is a back end of user authentication and authorization.
</h4>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

-  [NodeJS](https://nodejs.org/en/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Json Web Token - JWT](https://jwt.io/)
-  [Typeorm](https://typeorm.io/#/)
-  [Postgres](https://www.postgresql.org/)
-  [VS Code][vc]

## 📋 Features

### Documentation

- [x] Create user
- [x] Login user
- [x] See user info

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.20.0][nodejs] or higher + [Yarn 1.22.5][yarn] or higher installed on your computer. From your command line:

```bash
# Create postgres docker
$ sudo docker run --name user-authentication -e POSTGRES_PASSWORD=1234 -p 5433:5432 -d postgres

# Create 'users' database
$ CREATE DATABASE users;

# Clone this repository
$ git clone https://github.com/isaac-allef/user-authentication-jwt

# Go into the repository
$ cd user-authentication-jwt

# Install dependencies
$ yarn install

# Run migrations
$ yarn typeorm migration:run

# Run it
$ yarn dev:server
```

## :memo: License
This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with ♥ by Isaac Allef :wave:

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
