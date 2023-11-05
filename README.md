# service name

pokemon
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

## Running the Services
​

1. Open a terminal or command prompt.
2. Navigate to the directory where the service repository was cloned.
3. Run the following command:

````shell
​
docker-compose up

````


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
