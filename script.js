let isDrawing = false; // Track whether the mouse button is pressed
let selectedColor = '#000000'; // Default color is black

// Listen for changes on the color picker
document.getElementById('colorPicker').addEventListener('input', (event) => {
    selectedColor = event.target.value; // Update selected color
});

// Function to create the canvas grid
function createCanvas(size) {
    const canvasContainer = document.getElementById('canvasContainer');
    
    // Clear any existing canvas
    canvasContainer.innerHTML = '';

    // Adjust the grid-template-columns to match the selected size
    canvasContainer.style.gridTemplateColumns = `repeat(${size}, 10px)`;

    // Create the grid cells
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        
        // Add event listeners for drawing
        gridItem.addEventListener('mousedown', () => {
            isDrawing = true;
            gridItem.style.backgroundColor = selectedColor; // Change color on click
        });

        gridItem.addEventListener('mousemove', () => {
            if (isDrawing) {
                gridItem.style.backgroundColor = selectedColor; // Change color on drag
            }
        });

        gridItem.addEventListener('mouseup', () => {
            isDrawing = false; // Stop drawing when mouse is released
        });

        canvasContainer.appendChild(gridItem);
    }

    // Add event listener to stop drawing when mouse leaves the canvas
    document.body.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}

