---
title: Draw that Pokemon
pubdate: 2020-05-28
image: main.png
screenshots: ["main.png", "screen1.png", "screen2.png", "screen3.png"]
tags: ["React", "Node", "Express", "MongoDB", "PokéAPI", "Wolfram Alpha API", "DeepAI"]
link: https://pokemon-draw.raymondgiang.com
github: https://github.com/raygiang/pokemon-draw
---

This project was built for a school assignment that focused on getting data from API. A random Pokémon and its description are retrieved from the PokéAPI and a graph of that Pokémon is then retrieved from the Wolfram Alpha API. The goal is for the user to do their best to replicate the graph by drawing on a Canvas. Once the user submits their drawing, DeepAI is used to compare the similarity between the graph and the drawing. The result is then compared to the high score stored on the database.

This app was built using React. Axios is used to retrieve data from PokéAPI and Wolfram Alpha API. MongoDB is used to keep track of high scores and high score images, express is used to communicate between the server and client side, and an HTML5 Canvas used for the user drawing.
