# Technical Talks Event Application

This project provides a simple, single-page website to display the schedule for a 1-day technical talks event. It features a responsive design, dynamic schedule rendering, and client-side search functionality based on talk categories.

## Features

*   Displays a schedule of 6 technical talks, each 1 hour long.
*   Includes a 1-hour lunch break and 10-minute transitions between talks.
*   Talks are rendered dynamically with details such as title, speakers, categories, duration, and description.
*   Client-side search functionality to filter talks by category.
*   Compiled into a single, serverless HTML file for easy deployment.

## Project Structure

*   `index.html`: The main HTML structure of the application (source).
*   `style.css`: The styling for the application (source).
*   `script.js`: Contains the talk data, schedule calculation logic, dynamic rendering, and search functionality (source).
*   `build.js`: A Node.js script used to combine `index.html`, `style.css`, and `script.js` into a single HTML file.
*   `dist/index.html`: The compiled, single-file version of the website, ready for deployment.
*   `.gitignore`: Specifies files and directories to be ignored by Git.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   Node.js (for the build process)

## Setup and Running the Website

### 1. Clone the repository (if you haven't already):

```bash
git clone https://github.com/howsen82/steven-event-talks-app.git
cd steven-event-talks-app
```

### 2. Build the single HTML file

The website is designed to be served as a single HTML file. The `build.js` script combines the HTML, CSS, and JavaScript into `dist/index.html`.

To run the build script, you need Node.js installed. If you don't have it, download it from [nodejs.org](https://nodejs.org/).

```bash
node build.js
```
This will create a `dist` directory containing the `index.html` file.

### 3. Serve the website locally

You can serve the compiled website using a simple Python HTTP server.

```bash
python3 -m http.server --directory dist
```

If `python3` is not found, try `python` instead:

```bash
python -m http.server --directory dist
```

After running the command, open your web browser and navigate to `http://localhost:8000` to view the event schedule.

## Customization

*   **Talk Data:** Modify the `talksData` array in `script.js` to update the talks, speakers, categories, and descriptions.
*   **Styling:** Adjust `style.css` to change the visual appearance of the website.
*   **HTML Structure:** Modify `index.html` for structural changes.
*   **Schedule Logic:** The `script.js` file contains the logic for calculating timings. Be careful when modifying this to ensure the schedule remains consistent.

## Placeholder Data

The current version uses placeholder data for the talks. You can replace this data with your actual event details in `script.js`.
