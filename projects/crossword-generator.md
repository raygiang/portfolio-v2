---
title: Crossword Generator
pubdate: 2020-06-02
image: main.png
screenshots: ["main.png", "screen1.png", "screen2.png", "screen3.png"]
tags: ["React"]
link: https://crossword-app.raymondgiang.com
github: https://github.com/raygiang/crossword-app
---

This crossword generator takes a list of words with hints and automatically tries to place them on a board to try to create a crossword puzzle. The crossword generator was built as a React component so that it could be easily imported into other React projects.

This application uses a recursive algorithm to try to find a spot to place every word. It places words in order in reverse order by length, so longer words will be placed first.