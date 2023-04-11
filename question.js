const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for users',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Please provide examples for use',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Please enter the link to the deployed Github Pages',
        name: 'Wesbite',
      },
      {
        type: 'input',
        message: 'Writes tests for your application and provide examples on how to run them',
        name: 'Tests',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select what license will be used',
        choices: ['agpl', 'apache', 'mit', 'none']
    },
    {
        type: 'input',
        message: 'Please enter how other developers can contribute to your project',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'Please enter your email address users can contact for questions',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'Please enter your github username so users can reach out with questions',
        name: 'Username',
      },

];

module.exports=questions