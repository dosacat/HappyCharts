Prompt - Build a page that allows the user to visualise and update an employee organization chart
interactively with drag & drop.

Link to website: https://happy-charts.onrender.com/  

My approach to the problem:  
1. Divided the screen into navbar, sidebar and main components.  
2. Built filters - search and drop drown in the sidebar.  
3. In the main, used react chart library to render hierachy data built from the array.  
4. Minimal styling and colours for design.  

Known issues:  
1. Styling issues in the search and dropdown sizing, employee cards.
2. If you search team name in the search bar, the chart will not transform, it only responds to the dropdown.  
3. Drag and Drop does not work in the chart and does not update data as a result.  
4. Design could better accomodate varying screens.  

Notes from me:
The comments I would not leave in production, comments were there primarily for the reviewer.  
The chart library I used, uses drag and drop in it to allow dragging nodes, however it threw errors when dropping nodes.

What I could have done better:  
1. Used state management like Redux
2. Built the org chart from scratch -Tree component from Material UI to render the hierachy data and use react-beautiful-dnd on it.
3. Improved CSS! - Modern styling, improved accesibility and responsive design.

![image](https://github.com/dosacat/HappyCharts/assets/98118185/fc2d07e1-64c5-4d8a-9670-cbe59f960fe2)



# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`
