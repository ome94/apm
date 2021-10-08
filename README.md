# Apm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# My Personal Notes
I built each stage of the app using `npm run build` or `ng build` so that I can see how it would behave when integrated with a web server different from the angular development server - in my case the **python http web server**. Few of the observations Ihave made so far are stated below:
- There is no difference observable difference when working with **Components**, **Services**(including http and api services - at least the ones I've worked with), **Pipes** and **Modules**.
- The only difference I've nticed has to do with `routing` which I'm yet to investigate.
- I noticed while working with an app which has no routing defined, the angular development server returns the component defined in the active selector even if an unknown route is entered in the URL address. My python development server on the other hand returns a 404 error message because that route hasnt been defined on the server yet or isn't available.