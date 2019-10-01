# What is demo-front?
 
It is a simple frontend project that accesses [demo-back](https://github.com/joelcarv/demo-back) project endpoints.
Currently it only displays customer phone information and you are able to search by number validity/state and country. 

# How to use this project

Package it
```console
$ git clone https://github.com/joelcarv/demo-front.git
```

Build a docker image from the available Dockerfile
```console
docker build -t angular-demo-front .
```
Then finally run the it, the frontend will be accessible from localhost:4200
```console
docker run -v ${PWD}:/app -v /app/node_modules -p 4200 angular-demo-front
```
Take note that this frontend will try to access demo-back statically at localhost:8080 it is not configurable (I was too sleepy to correct this)

# Questions / Issues
If you have any questions or problems using the image, please visite my [Github Repository](https://github.com/joelcarv/demo-front) and write an issue. 