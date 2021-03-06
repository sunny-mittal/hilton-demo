# Reservation App

This is a demo react-native app used to communicate with a GraphQL API for hotel reservations.

## Requirements

The requirements were to use React Native (without generators such as expo), an Apollo Client (I chose [Apollo Boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost)), no pre-written state management system (eg redux), and to include unit tests

## Installation and launch

These steps assume you have the necessary tools installed (node, react-native-cli, etc)

```
$ git clone https://github.com/sunny-mittal/hilton-demo
$ cd hilton-demo
$ npm install # or yarn
$ npm run test # run unit tests
$ npm run ts:lint # lint ts files
$ npm run ts:check # check typings
$ npm run start # start metro bundler
$ npm run ios # or npm run android
```

NOTE: To run the app on a physical device, make sure the device is connected to the same network as the machine running the metro bundler.

NOTE ABOUT ANDROID: Running new React Native apps is a known pain point for developers and your mileage may vary with getting it to work nicely with your machine's environment. I was able to run it successfully about 20% of the time.

## Architectural decisions

### Directory structure

Due to the fairly simple nature of the app, all components are siblings in the `components` directory, with some logical modules to keep file sizes small.

I only needed a single GraphQL query and one mutation but still chose to keep them separate in the `graphql` directory for potential future expansion. The client file for integration with Apollo also lives here.

I chose to use [React Native Navigation](https://github.com/wix/react-native-navigation) with a tab layout to handle the two screens needed for listing existing reservations and creating a new reservation. The configuration and screen registration files are stored in their own `navigation` folder.

Styling was fairly minimal but as multiple components shared styles, I put them in their own file and folder to keep the project structure clean.

Finally, at the top level of the `src` directory resides the typings file, as they are used throughout the project.

### Modules

I chose to use [React Native Elements](https://github.com/react-native-training/react-native-elements) for some basic components (header, reservation card) to ensure cross-platform consistency.
I used [Formik](https://github.com/jaredpalmer/formik) along with [yup](https://github.com/jquense/yup) for handling the form for creating a new reservation. `Formik` makes it extremely simple to validate and submit forms, while `yup` has a very sensible approach for creating the validation schema passed to formik.
Finally, I used [Moment](https://github.com/moment/moment) for parsing the dates passed back from the GraphQL endpoint as I have no control over the integrity of the data passed back and `moment` normalizes the various ISO formats that may be used on the backend.

### Misc

I employed a simple pull-to-refresh to handle updating the upcoming reservations page as this provided the easiest way to get latest reservations without relaunching the app, which would be terrible UX.

## If time permitted...

If I had more time, I would add the following features (along with better design, which I wasn't as focused on for this project):

- GraphQL subscriptions to handle fetching new data in real-time
- Search and filter ability for only getting those reservations that interest us
- Ability to modify the reservations (though this wouldn't make sense for the average user...perhaps for a special moderator/administrator role)
