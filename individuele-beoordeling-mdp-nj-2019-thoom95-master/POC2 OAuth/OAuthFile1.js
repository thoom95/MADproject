
var request = require("request");
var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1NzQ3NzY5NTcsImV4cCI6MTU3NDg2MzM1NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiJhMDAzZjUzY2ViZDk0NjY2ODA2ZmFkMGMwNjkyZDFlZSIsInNjb3BlIjpbImJhc2ljIl19.tFqchyAWKQqTtQAL3gZbDXIoGwSCbuBeksWwnOd9xPe7sdtYtws1FOmPwLSCgwGfcuJGjt4Rreg5O40NY-Ovcx0R-_glgM_Nzsgara1SQJsqNwj_MCdtXi8k_ZtffIFSaznl-96bhmREcyly6wMRkTUWhynMtizKsKaUCq35T5tdRXUt66v5l85klHuLkmz1bW69Gm6xxuGi24dm6s44dnw3oNWoZntdYjPCMuJ78-XgAhZpS94uNzMtyDAJST7k_4MqKqTrxvFZsJUzPcdbS-TcC8PHR0Na00t9mBPU4lQpHZwg4-Cz53GNQVTDJhhBT2HQIgtWTa93RZVCJgxW7Q';

var options = { 
   url: 'https://platform.fatsecret.com/rest/server.api?method=food.get&food_id=4384&format=json',
   method : 'POST',
   headers: { 
       'Content-Type': 'application/json',
       'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1NzQ3NzY5NTcsImV4cCI6MTU3NDg2MzM1NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiJhMDAzZjUzY2ViZDk0NjY2ODA2ZmFkMGMwNjkyZDFlZSIsInNjb3BlIjpbImJhc2ljIl19.tFqchyAWKQqTtQAL3gZbDXIoGwSCbuBeksWwnOd9xPe7sdtYtws1FOmPwLSCgwGfcuJGjt4Rreg5O40NY-Ovcx0R-_glgM_Nzsgara1SQJsqNwj_MCdtXi8k_ZtffIFSaznl-96bhmREcyly6wMRkTUWhynMtizKsKaUCq35T5tdRXUt66v5l85klHuLkmz1bW69Gm6xxuGi24dm6s44dnw3oNWoZntdYjPCMuJ78-XgAhZpS94uNzMtyDAJST7k_4MqKqTrxvFZsJUzPcdbS-TcC8PHR0Na00t9mBPU4lQpHZwg4-Cz53GNQVTDJhhBT2HQIgtWTa93RZVCJgxW7Q'},
       'Accept': 'application/json',
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);

   console.log(body);
});


clientID = 'a003f53cebd94666806fad0c0692d1ee'
clientSecret = 'b56a727881e04b84b178d2bc6263eb43'

var options = { 
   url: 'https://oauth.fatsecret.com/connect/token',
   method : 'POST',
   auth : {
      user : clientID, 
      password : clientSecret
   },
   headers: { 'content-type': 'application/json'},
   form: {
      'grant_type': 'client_credentials',
      'scope' : 'basic'
   },
   json: true 
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);

   console.log(body);
});




// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
