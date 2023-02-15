const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 team-heading jumbotron bg-info text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          <div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">Ahmad</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: 270</li>
      <li class="list-group-item">
        Email: <a href="mailto:ahmad@company.com">ahmad@company.com</a>
      </li>
      <li class="list-group-item">Office number: 3011</li>
    </ul>
  </div>
</div>
<div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">Jana</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: 618</li>
      <li class="list-group-item">
        Email: <a href="mailto:jana@gmail.com">jana@gmail.com</a>
      </li>
      <li class="list-group-item">
        GitHub:
        <a
          href="https://github.com/jfisher396"
          target="_blank"
          rel="noopener noreferrer"
          >shamira30</a
        >
      </li>
    </ul>
  </div>
</div>
<div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">Mohammad</h2>
    <h3 class="card-title">
      <i class="fas fa-user-graduate mr-2"></i>Intern
    </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: 112</li>
      <li class="list-group-item">
        Email: <a href="mailto:mohammad@yahoo.com">mohammad@yahoo.com</a>
      </li>
      <li class="list-group-item">School: University of Birmingham</li>
    </ul>
  </div>
</div>
,<div class="card employee-card">
  <div class="card-header">
    <h2 class="card-title">Jameelah</h2>
    <h3 class="card-title">
      <i class="fas fa-user-graduate mr-2"></i>Intern
    </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: 278</li>
      <li class="list-group-item">
        Email: <a href="mailto:jameelah@email.com">jameelah@email.com</a>
      </li>
      <li class="list-group-item">School: Cambridge</li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </div>
  </body>
</html>
