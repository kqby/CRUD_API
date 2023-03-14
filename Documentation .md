# crud_api

Task:

Plan and implement a simple server application (API), that stores (in a database) and
handles cars.
The application is able to create, update and delete(CRUD) cars. A car have the following
attributes:

● Licence plate number
● Owner's name
● Power (in HP(Horsepower))

We should be able to get the cars(data) from the API, but to create or update an
authentication is required. (For example a secret key)

I chose nojde.js as backend and mongoDB as database , i use JWT  for authentication .

Project structure:

config -> I keep the jwt token key here

controllers -> Controllers are responsible for handling incoming requests and returning responses to the client.
                     A controller's purpose is to receive specific requests for the application.

middleware -> The main purpose of the middleware is to modify the req and res objects, and then compile and execute any code that is required. 
                It also helps to terminate the request-response session and call for the next middleware in the stack.


models  -> The model you define in the Node. js server is an abstraction of the data in your MongoDB database, which is represented as a document. 
              Because of this abstraction, you may use the “Mongoose” schemas to construct a blueprint of how you want the added data to look and behave.
 
routes -> Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI
                    (or path) and a specific HTTP request method (GET, POST, and so on). 


startup -> database connection params, and validation data.

.env,environements.js -> server config

index.js  -> responsible for application startup, routing, and other functions.
 
 
