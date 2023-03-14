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

I chose nojde.js as backend and mongoDB as database , JWT  for authentication . Divided the task into smaller parts, which I will discuss later and what I used them for. First I created a registration / login function, then if the login was successful, then the user receives a token.
New data can be added, modified, or deleted using the token, if we are not logged in, we can only retrieve the data.


the port I use -> localhost/PORT:8000

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

Program using:
in terminal "npn run dev"
Using Postman for testing (https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related)
Delete,Update,Add functions we need JWT token , we get it when we log in and we need use it in Headers option we need add key:x-auth-token and the value is  the jwt token.

Example:   

Data retrieval: GET ->  http://localhost:8000/api/cars 

Registration: POST  -> http://localhost:8000/api/register

Login:    POST ->http://localhost:8000/api/login

Adding Data: POST ->  http://localhost:8000/api/car  

Update Data : PUT -> http://localhost:8000/api/car/640fb81b44de4d18d0b724d4    

Delete data: DELETE -> http://localhost:8000/api/car/640fba030485b51c70d2f1b1



images:

![image](https://user-images.githubusercontent.com/89541197/225005522-a1e32c7d-da61-4bb6-a557-e892c5e634bd.png)
![image](https://user-images.githubusercontent.com/89541197/225005837-dedc0c04-baf3-4b46-952d-3f879fe5e9fb.png)
![image](https://user-images.githubusercontent.com/89541197/225005440-a1a1dae6-45e1-4695-ad28-72abe86b3aa7.png)
![image](https://user-images.githubusercontent.com/89541197/225005695-b6722f69-3a28-4149-be41-3a27b56b1bac.png)
![image](https://user-images.githubusercontent.com/89541197/225006029-ab48d114-978b-434c-9676-a31740ebdbbe.png)
![image](https://user-images.githubusercontent.com/89541197/225006083-5e09779e-946f-48ee-bfe3-cfdbe1448cc0.png)



