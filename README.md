# JavaScript and DOM Manipulation

## Background Information

In this project, I utilized my experience in JavaScript and HTML to transform a large dataset containing UFO sightings across the United States, Canada, and Australia into a dynamic web page for a user to filter through. The importance of this visualization was the manipulation of large dataset into a table that updates and displays results automatically, to streamline the efforts of the user as opposed to sorting through all the results manually. 

## Automatic Table and Data Search using Multiple Search Categories

* Primary coding languages used within this repository: JavaScript(specifically including D3.js), HTML, and CSS.

* To construct my initial web page, I used the provided [index.html](StarterCode/index.html) file.

* Using the UFO dataset provided in the form of an array of JavaScript objects, I successfully wrote code that dynamically appends a table to the web page, which automatically updates with new rows of data for each UFO sighting.

  * Columns included in the table contain data relating to `date`, `city`, `state`, `country`, `shape`, and `comment` per UFO sighting.

* Utilizing a date form in my HTML document, I effeciently wrote JavaScript code that listens for events and searches through the `date/time` column to find rows that match user input.


* Additionally, with the application of multiple `input` tags within the form function, I generated JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

### Copyright

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
