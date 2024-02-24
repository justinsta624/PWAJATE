<a ID="readme-top"></a>

<div align="center">

# ⭐ Progressive Web Applications(PWA): Text Editor ⭐

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.w3schools.com/js/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
[![GitHub Badge](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624/)

</div>
</div>

## Outcome

Followings are the outcomes of the challenge 19:

* The URL of the deployed application </br>
[Deployed application: HEROKU](https://drive.google.com/file/d/1DesRcjh71bOVOYdFWXmtrp2ilY5Ni-Oo/view) </br>

* The URL of the GitHub repository, with a unique name and a README describing the project </br>
[Repository for this challenge](https://github.com/justinsta624/PWAJATE)


## Screenshots

### Application functionality </br>
---
![00-demo](https://github.com/justinsta624/PWAJATE/assets/143357899/6324e36a-4436-476f-b6ec-3791bc560afd)
---
### Application's `manifest.json` file </br>
---
![01-manifest](https://github.com/justinsta624/PWAJATE/assets/143357899/0f15e056-f9d0-4dd5-aee5-06c15738fa88)
---
### Application's registered service worker </br>
---
![02-service-worker](https://github.com/justinsta624/PWAJATE/assets/143357899/d3e96756-2a49-4e6d-9fef-2fe1fc189b7c)
---
### Application's IndexedDB storage </br>
---
![03-idb-storage](https://github.com/justinsta624/PWAJATE/assets/143357899/c0e0d1a4-cc6f-4e67-8a24-2a7d3ea5384c)
---
<div align="center">

</div>
</div>

## Tasks

* Build a text editor that runs in the browser, which will be a single-page application that meets the PWA criteria.
* Feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.
* Start with an existing application and implement methods for getting and storing data to an IndexedDB database
  - Use a package called `idb`, which is a lightweight wrapper around the IndexedDB API.
  - It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.
* Deploy this full-stack application to Heroku using the [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide).
* Include the `.npmrc` file in this starter code. This will ensure your application will deploy properly to heroku.

## Table of contents

- [Outcome](#outcome)
- [Screenshots](#screenshots)
- [Tasks](#tasks)
- [User Story](#user-story)
- [Acceptance Critiera](#acceptance-criteria)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Reference](#reference)
- [License](#license)

## User Story <a ID="user-story"></a>

### This application was developed with this user story in mind:

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acceptance Criteria <a ID="acceptance-criteria"></a>

### This application was developed with the below User acceptance criteria:

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have static assets pre-cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

This application is deployed via Heroku (Utilising JawsDB as Database-as-a-service)
Installation is not required if accessing via the below link:
<a href="https://huber-tech-blog-ed7fd58460b2.herokuapp.com/"> PWA-JATE (Heroku) </a>
</div>
</div>

If you would like to Clonse or fork the repository to contribute then folow the below steps:

1. Clone or fork or pull down or branch this repository
2. Run the below in console install necessary packages
```
npm i
```
3. After NPM packages have been installed, Invoke application with npm run start:
```
npm run start
```
4. Also, you can run start the server once packages have been installed and the database is created. Run the below in the CLI:
```
node server.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

- **Node.js**: Runtime environment for executing server-side JavaScript code.
- **Express**: Web application framework for building RESTful APIs.
- **Mini-CSS-Extract Plugin**: Webpack plugin that extracts CSS into separate files.
- **Webpack**: Module bundler that helps bundle and manage static assets for web application.
- **Workbox**: Libraries to build offline-first PWAs in conjunction with Webpack
  - in service worker generation, caching strategies, and offline support
- **Concurrently**: A utility for running multiple processes concurrently
  - to simultaneously run the client-side and server-side scripts.
- **IndexedDB**: API for client-side storage, enabling offline functionality and improving performance
  - by reducing the need to fetch data from the server.
- **Babel**: A JavaScript compiler to transpile modern JavaScript code into a version
  - compatible with a wide range of browsers.
- **Heroku**: A cloud platform that offers easy deployment and management of web applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reference

- [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
- [What is a Service Worker?](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)
- [What is Webpack?](https://survivejs.com/webpack/what-is-webpack/)
- [Introduction to Webpack](https://flaviocopes.com/webpack/)
- [Lazy Loading](https://www.imperva.com/learn/performance/lazy-loading/)
- [Getting Started with indexedDB](https://www.youtube.com/watch?v=g4U5WRzHitM)
- [Beyond cookies: Today’s options for client-side data storage](https://blog.logrocket.com/beyond-cookies-todays-options-for-client-side-data-storage/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application can be used in conjunction with licensing covered in  <b>MIT License</b>
</div>
</div>
(Click on the badge for details of the license)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Review

You are required to submit the following for review:

* The URL of the deployed application
* The URL of the GitHub repository, with a unique name and a README describing the project
---
© 2024 Hanbyeol Justin Lee. Confidential and Proprietary. All Rights Reserved.
