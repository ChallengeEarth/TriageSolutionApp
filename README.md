# Triage Solution App
The Triage Solution App is the client side application of the Triage-Solution project. It's a typical Single Page Application with Angular-JS/bootstrap and works together with a Web REST Api (see https://github.com/ChallengeEarth/TriageSolutionWebAPI, deployed to Azure http://triagesolution.azurewebsites.net/)

## Package Manager
We use the tools angular js suggests: `npm` together with `bower`. What do you need to do to add a new dependency?

1. Add the dependency to the `bower.json`-file (you find it in the root folder)
2. Run `npm install` 
3. The module will be installed under `/app/bower_components/`. Here you find the js-scripts and css-files for this module. 
4. Add a link to the js-script/css-files in your `index.html`. Take care, the order is important! if your new dependency has for example a dependency to angular, it needs to be placed below the angular-include (in `index.html`). 

## Important commands 
e.g. run the local http-server, run e2e-tests, run Karma
Are the same as in the angular tutorial. Have a look at this: https://docs.angularjs.org/tutorial

## Hosting
While the API-part is hosted on Azure, we use the divshot-cloud to host the client-application. Simply because it's so simple to deploy (and pricing is free for a simple app).
The login is connected with the ursin.brunner@gmail.com Github-Account.

All you need to re-deploy is:

1. navigate to the `/app-directory`
2. run `divshot push`

Installing divshot on a new machine is also very easy, see this: http://docs.divshot.com/guides/quick-start

## Hosting on different platforms
Because we host the API on another platform than the client-application, we use CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). The CORS-calls/headers are configured in the API, see the `Startup.cs-class`.

## Other tips
Browser-Caching is, as always, an issue when developing! Easiest way to solve it: always open the DevTools-Window in Chrome and activate the setting "Disable Cache while DevTools is open".


