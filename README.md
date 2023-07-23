# WalkThrough 


Working of the code 
The steps array contains a list of element IDs that correspond to the sections to be highlighted on the webpage.

The highlight function takes an id parameter, which specifies the element ID to be highlighted. It removes any existing highlight and popover elements, calculates the position and dimensions of the specified element, and then calls the highlightHelper and popover functions to create the highlight effect and the popover.

The walkstart button is selected using document.getElementById("walkstart"), and a click event listener is added to it. When the button is clicked, the highlight function is called with the next element ID from the steps array, and the index is incremented to move to the next step.

The highlightHelper function is responsible for creating the highlight effect around the specified element. It calculates the position and dimensions of the element, creates a new div element with a black border, and appends it to the wrapper element. The border style is added using a setTimeout to make sure it takes effect.

The popover function is responsible for creating the popover element below the highlighted section. It calculates the position of the element to determine where the popover should be placed. It creates a new div element, sets its styles, and appends it to the wrapper element. The navigationButton function is called to create the next and previous buttons inside the popover.

The navigationButton function creates the next and previous buttons and adds event listeners to them. When the buttons are clicked, the index is updated accordingly, and the highlight function is called with the corresponding element ID.

Finally, the highlight function is called with the initial element ID (steps[index]) to start highlighting the first section when the page loads.