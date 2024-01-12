# About

This project is a react-based web application providing
user interface to retrieve and display data from openweathermap.org API.

Users interested in weather forecast for a city are able to select the
city either from the main search bar which suggests cities based on users' input
or by typing decimal coordinates manually in the correct side bar fields.
If supported and allowed, the application is able to display data for user's current
location using geolocation API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Installing the application

1. In the project directory run `npm i` to download and install modules.
2. Run `npm start` in the project directory to start the application.
   The application starts at `http://localhost:3000` by default.

# Important

The application uses .env file to protect sensitive information such as API keys.
Unless provided, create your personal .env file in project's root directory.
The file has to contain the API key in this format
`REACT_APP_API_KEY = ' ---replace with your API key--- '`.
This is neccessary for the application to run as intended.

# Browser support

The application has been manually tested and optimized for Google Chrome build 120.0.6099.130.
For optimal performance use the latest version of Google Chrome.

# Project structure

This React application is structured into components and hooks.
Given the size of the project, the hooks are stored in a single file. The hooks are imported into
components which use them mainly to retrieve data. If succsessful the data are then processed
and displayed by the components or passed as props onto other components.

The application is divided into two major sections. The first one is a section of user input
allowing users to select location to see weather data for and specify temperature units.
Components reponsible for this section are SearchSuggestion, ToggleUnits or CustomCoords.

The other section processes and presents the data. DailyForecast component sorts the data
by date (the data are recieved as an array of 40 objects) respecting user's locale settings
and maps the data in its children to separate and display weather data for each day.

All CSS files (with an exception of App css file) are stored in a separate subdirectory.

The non-source-code resources such as icons or resource file for city suggestion are stored in assets directory.
