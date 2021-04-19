<p align="center">
    <a href="https://expo.io/@garvitkat/projects/freefood">
        <img src="app/assets/logo-red.png" width="200" alt="Surplus Food Half Price Logo"/>
    </a>

</p>

<p align="center">
    A place to share, donate and buy near-expiry food at a cheap price.
</p>


<p align="center">
    This repository consists of a <strong>React Native Marketplace Application</strong> built with <strong>Expo CLI</strong>.
</p>

## Running the Application

### View the application

Scan [QR Code](https://expo.io/@garvitkat/projects/freefood) via the [Expo mobile app](https://play.google.com/store/apps/details?id=host.exp.exponent), or by using [Appetize Emulator](https://expo.io/appetize-simulator?url=https://expo.io/@garvitkat/freefood) (`Scroll down` &#8594; `Open project using Expo`).

### App Screenshots and Video
<img src="app/assets/App Mockup.png" width="100%" alt="Mockup for application"/>

### Running the application on your machine

To run the application on your machine, follow the steps below:

### Setting up the Backend Server

  1. Download/ Clone the repository on your machine.
  2. Open the `backend` folder via VS Code.
  3. Open the `development.json` file (`config` &#8594; `development.json`) and change the asterisks in `assetsBaseUrl` to your machine IPv4 Address.
  4. Open the terminal at the root of the `backend` folder (<kbd>Ctrl</kbd> + <kbd>'</kbd>) and run `npm install` to install the project dependencies.
  5. Still in the terminal, run the command `node index.js` to start the backend server.
  6. The backend server is live and ready to be accessed - To confirm that it is live, access `http://localhost:9000/api/listings`.

### Setting up the Application

  1. Download/ Clone the repository on your machine.
  2. Open the `app` folder via VS Code.
  3. Open the `settings.js` file (`app` &#8594; `config` &#8594; `settings.js`) and change the asterisks in `apiUrl` to your machine IPv4 Address.
  4. Make sure you have Expo CLI installed globally - if not, install it via `npm install -g expo-cli`.
  5. Open the terminal at the root of the `app` folder (<kbd>Ctrl</kbd> + <kbd>'</kbd>) and run `npm install` to install the project dependencies.
  6. Still in the terminal, run the command `expo start` to start the app (make sure an AVD is running).
  7. The application should open automatically on the AVD.

## Application features

* `10 Screens` - Welcome, Register, Login, Account, Upload, View Image, Messages, Listings, Listing Edit, and Listing Details Screens.

* `Animation` - Using Lottie (Activity Indicator, done animation and more).

* `Authentication` - User authentication (Register, Login/out).

* `Cache Layer` - Caching Images.

* `Custom and Reusable Hooks` - Api, Location, and Notifications.

* `Form Validation` - Using Formik.

* `Gesture Handler` - Swipe to delete, and pull to refresh.

* `Navigation` - Using React Navigation and Stack Navigator.

* `Push Notifications` - When messages are received.

* `Reusable Components` - Button, Icon, Forms, Screen, Text, Text Input and more.

* `Splash Screen` - Logo Screen Design while the app is launching.

