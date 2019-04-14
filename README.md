Here is a very basic monolithic software architecture.  This is the simplest application architecture as explained in [my blog post on architectures](https://zachgoll.github.io/blog/2019/build-production-web-app-part-4/).

A monolithic architecture describes an architecture where all of the following components are bunched into one codebase: 

* Views 
* Application/Business Logic 
* Data Access/Database

Each of these layers are separated in this application, but it is still a monolithic architecture because a change to any part of the application will require: 

1. The entire application be restarted 
2. Changes must be made in more than one part of the app

# Start the app 

Run 

```
npm install 
npm start 
```