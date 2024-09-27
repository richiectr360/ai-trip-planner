# AI Travel Planner Web App

**Live Demo**: [https://ai-trip-planner-jade.vercel.app/](https://ai-trip-planner-jade.vercel.app/)

The **AI Travel Planner** is an intelligent web application that helps users plan and organize trips seamlessly with AI-driven recommendations. The app integrates several powerful technologies, including Google Geolocation API, Google Maps API, and Vertex AI API, to provide a rich, personalized experience for users. Whether it's selecting the best hotels, discovering places to visit, or planning activities, this app ensures efficient travel planning based on real-time data and user preferences.

## Problem the Project Solves

Travel planning can often be overwhelming due to the abundance of information and options. From selecting destinations to finding accommodations, travelers can struggle to make informed decisions quickly. This app solves that problem by providing:
- **Personalized travel suggestions** based on user preferences.
- **AI-powered recommendations** for hotels, places to visit, and local activities.
- **Integrated maps and location services** for easy navigation and trip planning.

By utilizing AI, real-time data from Google Maps and location APIs, and OpenAI's language model for suggestions, this application helps users cut through the clutter and plan their trips efficiently.

## Features

- **AI-driven Trip Suggestions**: Get personalized recommendations for places to visit, hotels, and activities.
- **Trip Creation & Management**: Easily create, view, and manage trips with a user-friendly interface.
- **Google Maps Integration**: Visualize locations and plan routes within the app using the Google Maps API.
- **Firebase Authentication**: Secure sign-in and data storage with Firebase.
- **Dynamic Routing**: Seamlessly navigate through different trips using dynamic routing with React Router.
- **Tailwind CSS for Styling**: A clean and responsive UI built with Tailwind CSS.

## Project Structure

```
├── src
│   ├── components
│   │   ├── custom
│   │   │   ├── Header.jsx
│   │   │   └── Hero.jsx
│   │   ├── ui
│   │   │   ├── Button.jsx
│   │   │   ├── Dialog.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Popover.jsx
│   ├── constants
│   │   └── options.jsx
│   ├── create-trip
│   │   └── index.jsx
│   ├── lib
│   │   └── utils.js
│   ├── my-trips
│   │   ├── components
│   │   │   └── UserTripCardItem.jsx
│   │   └── index.jsx
│   ├── service
│   │   ├── AIModal.jsx
│   │   ├── firebaseConfig.jsx
│   │   └── GlobalApi.jsx
│   ├── view-trip
│   │   ├── [tripId]
│   │   │   └── index.jsx
│   │   ├── components
│   │   │   ├── Footer.jsx
│   │   │   ├── HotelCardItem.jsx
│   │   │   ├── Hotels.jsx
│   │   │   ├── InfoSection.jsx
│   │   │   ├── PlaceCardItem.jsx
│   │   │   └── PlacesToVisit.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **Firebase**: Used for authentication and database management.
- **OpenAI API**: Provides AI-generated suggestions and recommendations for trip planning.
- **Google Maps API**: Enables users to view and interact with maps for trip planning and navigation.
- **Google Geolocation API**: Helps provide accurate location-based recommendations.
- **Tailwind CSS**: A utility-first CSS framework used to create a responsive and clean user interface.
- **Vite**: A fast build tool for modern web applications.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ai-travel-planner.git
   cd ai-travel-planner
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or if you are using Yarn
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
   REACT_APP_VertexAI_API_KEY=your-vertexai-api-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or if you are using Yarn
   yarn dev
   ```

The application should now be running on `http://localhost:3000`.

## Environment Variables

Make sure to set up your Firebase credentials and other API keys as environment variables in the `.env` file. Below is the list of variables:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_FIREBASE_MEASUREMENT_ID`
- `REACT_APP_VERTEXAI_API_KEY`

## Scripts

Here are the available scripts for this project:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the code for errors.

## Deployment

This app is ready for deployment on **Vercel**. To deploy, follow these steps:

1. Push the code to a GitHub repository.
2. Link the repository to Vercel by following [this guide](https://vercel.com/docs/concepts/projects/overview).
3. Add the environment variables to your Vercel project settings.
4. Deploy your app with a single click.

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software as per the terms of the license.
