Here is a very basic monolithic software architecture.  This is the simplest application architecture as explained in [my blog post on architectures](https://zachgoll.github.io/blog/2019/build-production-web-app-part-4/).

A monolithic architecture describes an architecture where all of the following components are bunched into one codebase: 

* Views 
* Application/Business Logic 
* Data Access/Database

Each of these layers are separated in this application, but it is still a monolithic architecture because a change to any part of the application will require: 

1. The entire application be restarted 
2. Changes must be made in more than one part of the app 

# Run the app

You will need MongoDB installed on your computer, start the service, create a database, and create a user to interact with that database.  Don't worry if you do not understand all the commands; this tutorial is not a MongoDB tutorial!

```bash 
mongo

use monolithic_app_db

db.createUser(
    {
        user: "yourname",
        pwd: "yourpassword",
        roles: [ "readWrite", "dbAdmin" ]
    }
)
```

```
# Set your environment variables
# Same as above!
export DB_USER=yourname
export DB_PW=yourpassword

# Download dependencies
npm install

# Start App
npm run start
```