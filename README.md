# Frontend Mentor - REST Countries API with color theme switcher solution

![Design Overview](./design/desktop-preview.jpg)
This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- [Solution page on FM](https://www.frontendmentor.io/solutions/rest-countries-api-axios-vue-vue-router-tailwind-css-loader-4rNGCCJ4Q)
- [Live Demo](https://greatmetis.github.io/greatmetis-rest-countries-api-with-color-theme-switcher/)

### Built with

- Semantic HTML5 markup
- Tailwind Css - Css framework
- Mobile-first workflow
- Vue.js - JS library
- Vue Router
- Vue Store

### What I learned

The major learnings in this project is Vue Router. I not only know how to use router to navigate a declarative location but I understand how to use router's instance methods which can programmatically link to nested the routes.

Also, I confronted a problem on navigating between views. I found the URL was changed, while the page was not loaded. Fortunately, I found the solution is to add a `key` prop to router-view (see below for the example) to force load.

```javascript=
<router-view :key="$route.path"/>

```

### Useful resources

- [Stackoverflow](https://stackoverflow.com/questions/62462276/how-to-solve-avoided-redundant-navigation-to-current-location-error-in-vue) - This helped me to avoid redundant navigation on Vue Router. See the code in Component-`Header`.

- [Common Vue problems](https://codeburst.io/common-vue-problems-watching-routes-google-maps-and-more-c3ea0dad49ee) - This helpmed me to solve the problem that vue router doesn't reload when navigating between Cards.

## Author

- Frontend Mentor - [@greatmetis](https://www.frontendmentor.io/profile/@greatmetis)
- LinkedIn - [Chao-Chen(Metis) Teng](https://www.linkedin.com/in/chao-chen-metis-teng/)

## Acknowledgments

Big thanks to Front End Mentor provides such a great platform for developers like me.
