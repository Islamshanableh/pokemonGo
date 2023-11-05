# service name

Pokemon
​
## Service Description
​
pokemon : mange pokemon CRUD and activities on the pokemon like list with pagination, filter, sort and search 
​
## Cloning the Service

​
To clone the service repository, follow these steps "make sure you have access to the repo":

1. Open a terminal or command prompt.
2. Navigate to the desired directory where you want to clone the service.
3. Run the following command:
4. git clone ```<repository_url>```

## Running the Service
​

1. Open a terminal or command prompt.
2. Navigate to the directory where the service repository was cloned.
3. make sure you install docker on your machine 
4. Run the following command:

````shell
​
docker-compose up

````

## After docker finish
1. Prisma will generated
2. Prisma will create tables 
3. Prisma seed will executed to insert data from 
4. You can access your db using adminer on http://localhost:8081/
5. The app will be accessible at http://localhost:8080 

## Postman collection 
You can find example of apis just copy the data from this url and import it in postman 
collection: https://api.postman.com/collections/17109436-8b46102b-18e7-437c-8524-b2d2094eafcd?access_key=PMAT-01HEFMA2F9GQMR36M42CJW73DM 

## File Structure and Request Process
````
├── app.js
├── src // the source directory
│  ├── bin
│  │  ├── www.js // create server 
│  ├── config 
│  │  ├── config.js // config validation and mapper
│  ├── constants // constants variables
│  ├── middlewares
│  │  ├── error.js
│  │  └── validate.js // validate the incoming requests
│  ├── controllers
│  │  ├── pokemon.controller.js
│  │  └── index.js
│  ├── services
│  │  ├── pokemon.service.js // service logic
│  │  └── index.js
│  └── validations // validation schemes
│    ├── pokemon.validation.js
│    └── index.js
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .gitmodules
├── .husky
├── .lintstagedrc.json
├── .prettierignore
├── .prettierrc.json

````
