# Dev-Dashboard

Dev-Dashboard is a place where developers can share and keep track of errors and issues they have come across during their development career.

![](https://res.cloudinary.com/drjonifvw/image/upload/v1550696460/dev-dashboard/Example.png)

The project uses the MERN Stack and touches on REST APIs, User Sessions, MongoDB, Password Hashing,

On the front end, we are using React and Redux.
The back end, we are using Node, Express, and MongoDB with Mongoose.
This one directory contains two subdirectories that hold the front end (ui directory) and the back end (api directory).
You'll need to run `npm install` in each directory.

How to get started

- clone repository
- `cd dev-dashboard/api && npm install`
- `cd /../../dev-dashboard/ui && npm install`

We are using MLab for our hosted database and Cloudinary to host our images
<br />

Please see the `.tempenv` file to see how to set up your `.env` file. You'll need to create your own variable values.

Please see the `./sketch` directory to see sample images describing the UI/UX and workflow.

## Project #1 - Dev Dashboard Requirements

- Developers can save code notes, such as errors they've run into and how to fix them. Users will write in Markdown format.

- Links should be clickable when viewing

- User should be able to put images. Ideally they can upload them

- If you can get MDX format going, even better, but don't spend too much time on that.

- Text will be saved into the database as well as into ElasticSearch which allows the user to do full text search
- Notes include a title and save the date they were created and updated
- Notes can individually be marked as public, and those can be viewed if you visit the user's site, e.g. devdashboard.com/users/agileflame
- Need more complicated data schema; not all data should be nested.

# Test javascript

```js
function test() {
  return "muffins";
}
```
