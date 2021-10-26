# Quiz Manager

This is a quiz manager application I wrote for my synoptic project.

## Running the program

### Installing dependencies

Navigate to the `/client` directory in a terminal and
`npm install`

in a seperate terminal, navigate to the `/server` directory and
`npm install`

### Setting up the database

To set up the mongoDB, first create a new mognoDB database. Within this database create two new collections, one titled 'users' and one titled 'quizzes'.

**REQUIRED**
Import the `users.json` file into the 'users' collection.

**OPTIONAL**
Import the `quizzes.json` file into the 'quizzes' collection.

create a new file within the `/server` directory called `.env`, within this file enter the following:

```env
CONNECTIONSTRING=Enter your connection string here
```

### Running the program

In order to run the program you have to open the `/client` directory on one terminal and the `/server` directory on another.

Enter `npm start` in both terminals to run the front-end react web page and the express back-end.

## More information

For more information on the program, such as the design document, user guide etc. please see the additional submitted files.
