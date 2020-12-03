# SpaceXApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Application development Documentation 

1. created a basic project using angular/cli.

2. inside the project created two components filter-search componenent for applying filters and view-data component to show data fetched from the server.

3. created filters as specified in the documentation and same way developed view component to show data dynamically whenever filters are applied in filter component.
   note: image is hardcoded as api data is not providing image url in response.

4. created common service file to fetch data intially on load of application and to fetch data whenever filters were applied.   

4. with the help of media queries application was made responsive to mobile, tablet and desktop views.

5. created server side rendering application with @nguniversal/express-engine schematic and made application to render in server side.

6. wrote unit tests for a the components and service files.

how to run application:

1. clone the project into the system from git repository.
2. run npm install command in the angular project.
3. now run ng serve command in the angular project which provides localhost with 4200 port.
4. open the url in browser and check the application.