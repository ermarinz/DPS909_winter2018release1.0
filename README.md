# DPS909_winter2018release1.0

# Description
This simple web api allolows you to send either a get or a post request to the api and recieve back a json packets from the google libphonenumber parser

# Setup
This setup assums you are using node.js. It's a fairly simple tool to use that can be found here
https://nodejs.org/en/

This app uses the  following npm modules
*Express
*Body-Parser
*Google-libphonenumber
*chai
*Mocha

Start by downloading or cloneing the repo and opening its location in either either your bash, gitbash, or comamnd prompt.
Run the following commands to for setup:

npm install will install all the required tools to make the api run as specified by the package.json

``` npm install ```

alternatively you could run the commands individually using:

```
npm install express --save
npm install body-parser --save
npm install google-libphonenumber --save
npm install chai --save
npm install mocha --save
```

to run the api you use the command

``` node app ```

to run the test file use the command

``` node test ```

this will get your web api running. then navigate to http://localhost:3000/ for the app location.

# How To Use
This web api runs on port 3000 of your local host meaning that after you launch it you will need to go to http://localhost:3000/ and enter a phone number on the end of the URL

Alternativly you could send a post request tothe same URL wih the form pair of {"phoneNumber":"905 111 2222"}. This should work with any post generater but the one I use is postman https://www.getpostman.com/ 

This api currently only take 1 phonenumber per post and get request.

## Demo
To run the demo, start the the service, and then enter the following address into your web browser:

``` http://localhost:3000/api/phonenumbers/demo ```