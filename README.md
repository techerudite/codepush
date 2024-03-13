## Getting started

# Project set-up
## Step 1: Clone Project
   Run command to install dependancy libraries **npm install**.
   >**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding and node version should be **Equal or Greater than 18**
## Step 2: Start the Metro Server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:
```bash
# using npm
npm start
# OR using Yarn
yarn start
```
## Step 3: Start your Application
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:
### For Android
```bash
# using npm
npm run android
# OR using Yarn
yarn android
```
### For iOS
```bash
# using npm
npm run ios
# OR using Yarn
yarn ios
```
## Congratulations! :tada:
You've successfully run and modified your React Native App. :partying_face:

# Implement codepush in RN-android/ios for your application.
  You can take reference from below given link and create your own applicate with codepush.
  **https://medium.com/@ritika100898/implementing-codepush-for-over-the-air-updates-in-react-native-535e750ec308**
  
>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding and node version should be **Equal or Greater than 18**

## How to push Updates on codepush (Appcenter) ?
Once you are done with your changes run below command to relase your update on codepush based on your environment (staging/Production)

### For Android
```bash
appcenter codepush release-react -a xxxxx/AwesomeProject -d Production
```
### For iOS
```bash
appcenter codepush release-react -a xxxxx/AwesomeProject-IOS -d Production
```
# Which kind of changes we can update via Codepush?
=>  We can’t update everything via the CodePush. It’s only allows us to send javascript file changes via this service. It’s pretty much similar to the changes that we can see from the browser reloading on web applications.
=>  Library version upgrades, new package additions basically the anything which changes your package.json file and the changes to the segments which needs application restarts are not going to work. Instead they’ll crash your application which is on production and caused much severe issues.
=>  Simply the changes that you able to view on simulator by doing the hot reloading, are the changes that can be sent via the CodePush updates.

