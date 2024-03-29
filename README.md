# Automated Rest API testing
 Creating Rest API and write automated tests for it.
 This project is for educational purposes only. Pull request are welcome! Thank you for your cooperation!

## Requirements if you want to load repository on local server
- Install NodeJS, MongoDB.
- To run API create .env file and put your connection link inside like showed below, change NAMEOFDATABASE and DBPASSWORD into your own info
- MONGO_URL = mongodb+srv://admin:DBPASSWORD@cluster0.ceofy.mongodb.net/NAMEOFDATABASE?retryWrites=true&w=majority
- Create MongoDB database, create cluster, choose connect, then connect your application and copy connection link.
- npm run dev inside terminal to start a server.
- Download SoapUI, Apache JMeter, Postman API or any other tool. If load and stress testing are not needed I prefer Postman tool, so example done with this tool.

## I would recommend testing online my already deployed server. Documentation:
Create user:
- POST: https://agile-earth-23901.herokuapp.com/users
{
"userEmail":"Your email",
"userName":"Your name",
"userLastName":"Your last name",
"jobTitle":"Your job title"
}
Get the list of all users:
- GET: https://agile-earth-23901.herokuapp.com/users
Delete user
- DELETE: http://localhost:3000/users/USERID

## Automation testing comments:
- If you want to try testing with Postman just import Automated API testing.postman_collection file.
- Choose run collection
- Choose which tests you want to run
- Choose iterations count, select save responses and run it.

- Create user test:
1) Creates user with random values from given variables and given length
2) Checks response status
3) Checks if user was created by checking body response data for given values.
4) If fails prints out customized message.

- Get users list test:
1) Shows list of all users.
2) Checks response status.
3) Checks if created user is in a list.
4) If fails prints out customized message.

- Delete user test:
1) Deletes previously created user.
2) Checks response status.
3) Checks if requests contains message that user is no longer found.

### Authors: [Vaidas Pocius]( https://github.com/Vaidas393)
