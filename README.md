# actw-carpool
Source code from ACT-W talk on 04/11/15

## Get the app up and running

You will need to have node and its package panager npm installed. This is really easy to do, there's a big button on their [home page](https://nodejs.org/) labeled "INSTALL"
You will also need to install MongoDB, the database this project uses. You can do that [here](http://docs.mongodb.org/manual/installation/).

Open a terminal window and run the following commands

- clone the application: `git clone https://github.com/jlouthan/actw-carpool.git`
- go into the application directory: `cd actw-carpool/`
- run `npm install`

- Open a second tab in terminal and start the mongo service with the command `mongod`. You'll see some text fly by.
 If it says something like "waiting for connections on port 27017", you're good to go.
 
- Go back to the original terminal window and start the app with `node server.js`
- You'll see output in the terminal "Listening on port 3088"
- Open a browser window and navigate to http://localhost:3088/
- You should see the front end of the application. Add some data to the app with the form, and go from there!

Feel free to add issues here on GitHub or contact me directly at jenny@uncorkedstudios.com