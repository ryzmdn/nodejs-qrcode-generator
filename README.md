# Node.js QR Code Generator

A simple yet powerful QR Code Generator built using Node.js, Express, HTML, and JavaScript. This project allows users to generate QR codes by entering a URL, making it easy to share links through QR codes.

## Features

1. **URL to QR Code:** Generate QR codes instantly by entering any URL.
2. **Simple Interface:** Clean and user-friendly interface for ease of use.
3. **Fast and Lightweight:** Built with Node.js and Express for high performance and quick responses.
4. **Customizable Output:** Options to adjust QR code size and other parameters.
5. **Open Source:** Free to use and modify.

## How Does It Work?

This application runs a Node.js server using Express to handle incoming requests. When a user inputs a URL, the server uses a QR code generation library (such as `qrcode`) to generate the QR code and sends it back to the client as an image.

## Key Features Include

- **Input Field:** A text input for users to enter their URL.
- **Generate Button:** A button that triggers the QR code generation process.
- **QR Code Display:** Displays the generated QR code directly on the page.

## Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/ryzmdn/nodejs-qrcode-generator.git

# Change into the project directory
cd nodejs-qrcode-generator

# Install dependencies
npm install

# Run the server
node server.js
# or
npm start
```

## Usage

1. Start the server by running `node server.js` or `npm start`.
2. Open your browser and navigate to `http://localhost:3000/`.
3. Enter a URL into the input field and click the "Generate QR Code" button.
4. The generated QR code will be displayed, and you can download it as an image.
