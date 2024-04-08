# Sprint 3 IT Academy | Video management tool

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

<br>

## Requirements

1. Clone this repo

```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository

```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account

```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.

<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!

```shell
$ npm install
$ npm run test:watch
```

## Mi Aporte (Raquel)

Instala Jest como una dependencia de desarrollo:

```
npm install --save-dev jest`
```

Ejecutar los tests 1 vez:

```bash
npx jest <ruta al archivo de pruebas>
npx jest tests/films.spec.js
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
  an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests. More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.

## Captures of Test Solution
<img width="576" alt="Captura1" src="https://github.com/raquelEve/S3-v3-testing/assets/6729608/cf34eb19-e7f0-4650-afa3-109b68d2d7e7">
<img width="575" alt="Captura2" src="https://github.com/raquelEve/S3-v3-testing/assets/6729608/9f1909d0-8af7-420b-99ae-0f24f8f8880b">
<img width="574" alt="Captura3" src="https://github.com/raquelEve/S3-v3-testing/assets/6729608/1df6f149-5cfd-4fc9-9e64-4ded85c019e5">
<img width="572" alt="Captura4" src="https://github.com/raquelEve/S3-v3-testing/assets/6729608/5be124e6-26bb-4777-af02-a2fc1e5a2ecd">


