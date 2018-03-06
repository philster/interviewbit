# Codepath Interview Prep > API Design Assignment (Simple Link Shortener)

## Prerequisites
* Node.js (> v7.6) [https://nodejs.org]
* Postman [https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop]

## Running the server
```
npm install
npm start
```

## Open Postman and issue the following HTTP requests:
1. POST http://localhost:3000/
  - url: "https://www.codepath.com"
  - --> should get a 201 Created
2. POST http://localhost:3000/
  - url: "https://www.codepath.com"
  - id: "customlink"
  - --> should get a 201 Created
3. (again) POST http://localhost:3000/
  - url: "https://www.codepath.com"
  - id: "customlink"
  - --> should get a 409 Conflict
4. (repeat 100 times within an hour) POST http://localhost:3000/
  - url: "https://www.codepath.com"
  - --> should get a 429 Too Many Requests
5. GET http://localhost:3000/abcdef
  - --> should get a 404 Not Found
6. GET http://localhost:3000/customlink
  - --> should redirect to https://www.codepath.com
