# Calculator using HTML, CSS, and JavaScript

## Project Description

This is a fully functional web-based calculator application built using pure HTML, CSS, and JavaScript. It features both basic arithmetic operations and advanced scientific calculations. The calculator has a modern, user-friendly interface with a sleek dark theme and supports both basic and scientific modes for computing operations.

## Features Implemented

### Basic Calculator Features
- **Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (*), and Division (/)
- **Number Input**: Support for all digits (0-9) and decimal point (.)
- **Double Zero**: Quick input for "00"
- **Clear Function**: Clear the entire display (C button)
- **Delete Function**: Remove the last character (DE button)
- **Calculation**: Evaluate expressions with the equals (=) button
- **Error Handling**: Displays error messages for invalid expressions

### Scientific Calculator Features
- **Trigonometric Functions**: 
  - sin, cos, tan functions
  - Inverse trigonometric functions (arcsin, arccos, arctan)
- **Logarithmic Functions**:
  - Natural logarithm (ln)
  - Common logarithm (log)
- **Mathematical Constants**:
  - Pi (π) - 3.14159
  - Euler's number (e) - 2.71828
- **Advanced Operations**:
  - Factorial (x!)
  - Square Root (√)
  - Power operation (x^y)
  - Percentage (%)
  - Parentheses support for complex expressions
- **Exponential Notation** (EXP)
- **Angle Mode Toggle**: Toggle between Degree and Radian modes
- **Inverse Function Toggle**: Toggle inverse trigonometric functions on/off
- **Last Answer Storage**: Use the previous calculation result with the Ans button

### User Interface
- **Responsive Design**: Clean and modern calculator layout
- **Visual Feedback**: Button hover and active states for better user experience
- **Scientific Drawer Panel**: Hidden scientific functions panel that can be toggled
- **Display Screen**: Large, easy-to-read display with right-aligned text
- **Color-Coded Buttons**: Operators highlighted in red for easy identification

## How to Run

### Prerequisites
No special installation is required. You only need:
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- The three project files: `claculator.html`, `calculator.css`, and `calculator.js`

### Steps to Run
1. **Open the HTML file**:
   - Locate the `claculator.html` file in your project folder
   - Double-click on it to open it in your default web browser
   - Alternatively, right-click and select "Open with" to choose a specific browser

2. **Using a Local Server** (Optional but recommended):
   - Open a terminal in the project directory
   - Run a local server command:
     - **Using Python**: `python -m http.server 8000` (Python 3) or `python -m SimpleHTTPServer 8000` (Python 2)
     - **Using Node.js**: `npx http-server`
   - Open your browser and navigate to `http://localhost:8000`
   - Click on `claculator.html` to open the calculator

3. **Start Calculating**:
   - Use the calculator buttons or your keyboard to input numbers and operations
   - Click "SC" button to toggle the scientific calculator panel
   - All calculations are performed in real-time when you click the equals button

## File Structure

```
Calculator/
├── claculator.html    # HTML structure and layout
├── calculator.css     # Styling and design
├── calculator.js      # JavaScript functionality and logic
└── README.md         # Project documentation
```

## Browser Compatibility

This calculator works on all modern web browsers:
- Google Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)

## Notes

- The calculator uses JavaScript's `eval()` function for calculations, which works for basic arithmetic and scientific operations
- Calculations are performed on the client-side with no server required
- The application stores the last calculation result for use with the "Ans" button
- Toggle between Degree and Radian modes for trigonometric calculations as needed
