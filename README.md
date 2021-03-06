# Object-Oriented Programming:      Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team, and then generates an HTML webpage that displays summaries for each person. 
#
Use this command in an integrated terminal to start the application:

```bash
node index.js
```
#
This application uses the following NPM packages:

* Inquirer (for question and answer prompts)
* Jest (for testing)
##
#
Please follow the link to a walkthrough video that demonstrates its functionality and all of the tests passing.
## Video link:
### https://drive.google.com/file/d/1eJ75Ul832vTodxvIZYLlqUEqZvPX3BSg/view

#
## Basic Requirements

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
#

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
#

### The Walkthrough Video

* The walkthrough video demonstrates the functionality of the Team Profile Generator and passing tests, and a link to the video is included above.

* The walkthrough video shows all four tests passing from the command line.

* The walkthrough video demonstrates how a user invokes the application from the command line.

* The walkthrough video demonstrates how a user enters responses to all of the prompts in the application.

* The walkthrough video demonstrates a generated HTML file that matches the user input.
#
## License
    Copyright (C) [2021] [Sean Russell]
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
https://opensource.org/licenses/MIT