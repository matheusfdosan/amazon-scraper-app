# Amazon Product Scraper - Front-end

This is the front-end of the Amazon Product Scraper application, this web interface allows users to search for products on Amazon by entering a keyword. This keyword will be sent to a back-end server, which will provide the product data and display it on the screen.

![preview](./.github/preview.png)

## Technologies Used

- HTML5 - For structuring the web page
- CSS3 - For styling the interface
- JavaScript - For handling user interactions and dynamic content rendering
- Vite - As the build tool for development, bundling, and serving the application

## Project Structure

```
amazon-scraper-frontend/
├── public
│   ├── loading.gif  
│   └── logo.svg     
├── src
│   ├── main.js      
│   └── style.css    
├── index.html       
├── package.json     
└── README.md        
```

## How to Run

1. **Prerequisites**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - The back-end server (running at `http://localhost:3000/api/scrape`) must be active to handle search requests.

2. **Installation**:
   - Clone the repository or download the project files.
      `git clone https://github.com/matheusfdosan/amazon-scraper-app.git`
   - Navigate to the project directory:
     ```bash
     cd amazon-scraper-app/front-end
     ```
   - Install dependencies:
     ```bash
     bun install
     ```

3. **Development**:
   - Start the Vite development server:
     ```bash
     bun run dev
     ```
   - Open your browser and go to `http://localhost:5173` to view the application.

## Author

Developed by [Matheus Faustino](https://github.com/matheusfdosan)