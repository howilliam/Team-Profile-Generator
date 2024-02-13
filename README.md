# Team Profile Generator

## Description

The Team Profile Generator is a command-line application that allows managers to generate a webpage displaying basic information about their software engineering team. The application uses Node.js and Inquirer to gather input about team members and creates HTML files with summaries for each person.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Classes](#classes)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#License)

## Installation

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/howilliam/Team-Profile-Generator.git

2. **Navigate to the project directory:**

   ```bash
   cd team-profile-generator

3. **Install the required dependencies:**

   ```bash
   npm install

## Usage

To run the application, use the following command:

```bash
node index.js

```
Follow the prompts to enter information about the team members. You can add managers, engineers, and interns. When you finish building the team, the application generates an HTML file in the output folder.


## Classes

The application uses four classes to represent different team members:

### Employee

**Properties:**
- name
- id
- email

**Methods:**
- getName()
- getId()
- getEmail()
- getRole() (returns 'Employee')

### Manager (extends Employee)

**Additional Properties:**
- officeNumber

**Additional Method:**
- getRole() (overrides to return 'Manager')

### Engineer (extends Employee)

**Additional Properties:**
- github

**Additional Methods:**
- getGithub()
- getRole() (overrides to return 'Engineer')

### Intern (extends Employee)

**Additional Properties:**
- school

**Additional Methods:**
- getSchool()
- getRole() (overrides to return 'Intern')

## Contributing
Contributions are welcome! If you'd like to improve the application or fix any issues, please fork the repository and create a pull request.

## Tests

To run tests for the classes, use the following command:

```bash
npm run test
```
Ensure that all tests pass before making any contributions.

## License
This application is covered under the MIT license.