# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Gemini AI Clone

This project is a clone of the Gemini AI website. It allows you to interact with the Gemini AI interface and explore its features. Follow the steps below to set up the project on your local machine.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/NicolasBe23/Gemini-clone.git
cd Gemini-clone
```

##  Install Dependencies
Install the project dependencies using npm:

```bash
npm install
```
This will install all the necessary packages required to run the project.

## Create the .env File
To configure the environment variables for the project, copy the example .env file:

```bash
cp .env.example .env
```

## Edit the .env File
Open the .env file and fill in the necessary configuration values:
Gemini API Key: You need to sign up for Gemini's API and get your own API key. Once you have it, add it to the .env file as follows:
```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

## Run the Project
Once everything is set up, you can start the development server by running the following command:

```bash
npm run dev
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
