# Advanced-Web-Programming-F25---Group-B---Project-WEB-part2--Chloe-Hurbain
This project is a Node.js + Express backend that serves different sea turtle items. Each item includes a title, a description, and an image. The API allows you to navigate between turtles, move forward and backward, or request a specific one.

## Project Structure 
backend/ <br>
│ server.js <br>
│ package.json <br>
│ .gitignore <br>
│ README.md <br>
│ <br>
├─ data/ <br>
│   data.js  ← array of turtle objects <br> 
│
└─ frontend/ (optional, personal choice)<br> 
    → used for visual display in the browser<br>
Note: I personally added the frontend folder to provide a visual representation — this was not required in the original instructions.

## Running the Project
Inside the /backend folder:
* npm install
* node server.js
-> Server runs on: http://localhost:3000

## API Navigation
Available endpoints:
* Endpoint	Description
* GET /item	Returns the current item
* GET /item/next	Moves to the next item (wraps at end)
* GET /item/prev	Moves to the previous item (wraps at beginning)
* GET /item/:id	Returns the item at a given index

Each API response includes:
* current index
* the item object
* total number of items

## Chloe Hurbain Group B Ilac Efrei 
