React Dashboard - Full Stack Intern Assignment

This project is a replication of a given dashboard design using React.js. The focus was on responsive design, form validation, and dynamic UI elements like checkboxes, dropdowns, and file uploads.

Approach to Building the Dashboard

Component-Based Architecture
The dashboard was broken down into reusable components for modularity and scalability:
ClaimForm.js: Manages form inputs and validation.
DynamicForm.js: Implements interactive elements like checkboxes, dropdowns, and file uploads.
ResponsiveLayout.js: Creates a responsive grid layout to ensure the design adapts seamlessly to different screen sizes.
Responsive Design
Used a grid system to ensure the layout adjusts for desktop, tablet, and mobile views.
Tailwind CSS (or plain CSS flex/grid) was used to make the design fully responsive.
Form Validation
Added validation logic to ensure no empty submissions.
Input fields for Contract Value, Place, and Language are validated dynamically using state management with useState.
Dynamic Elements
Implemented interactive UI components:
Checkboxes for user confirmation.
Dropdowns for selecting options.
File Uploads with immediate feedback showing the uploaded file name.
Code Organization
All components are stored in the src/components folder for better readability and maintainability.
Clean and structured code with proper comments was written to explain logic where necessary.
Challenges Faced and How I Resolved Them

Ensuring Pixel-Perfect Responsiveness
Challenge: Adapting the layout to multiple screen sizes (desktop, tablet, and mobile) required careful testing.
Solution: Used Tailwind CSS utilities (grid, flex, responsive breakpoints) and manual media queries for fine-tuning.
Form Validation
Challenge: Implementing form validation without relying on external libraries.
Solution: Used React's useState to dynamically manage error messages and input validation. Error messages are displayed conditionally.
Dynamic Elements (Checkbox, Dropdown, File Upload)
Challenge: Providing real-time feedback (like showing the file name after upload).
Solution: Managed file states using React's useState hook to capture file information and update the UI dynamically.
Time Management
Challenge: Balancing time between UI design and logic implementation.
Solution: Started with a skeleton structure and iteratively added styles and functionality. Prioritized core requirements first.
Assumptions Made

Placeholder Data:
Used placeholder text and static labels for dropdowns and form fields.
Actual backend/API integration is outside the scope of this assignment.
Design Interpretation:
Followed the provided design as closely as possible, assuming the focus was primarily on layout and interactivity.
Styling:
Tailwind CSS was assumed as the preferred method for styling due to its ease of use and responsiveness.
Technologies Used

React.js: JavaScript library for building the user interface.
CSS/Tailwind CSS: For styling and responsive design.
React Hooks:
useState for state management.
useEffect for handling side effects (if needed).
