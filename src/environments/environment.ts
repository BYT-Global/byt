// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    firebaseConfig: {
        apiKey: 'AIzaSyBEu8ymTg3O6u2CH1qPRchoEz2kdbhxBAQ',
        authDomain: 'beyourtrip.firebaseapp.com',
        databaseURL: 'https://beyourtrip.firebaseio.com',
        projectId: 'beyourtrip',
        storageBucket: '',
        messagingSenderId: '48796798084',
        appId: '1:48796798084:web:48afba8c49179cf0aac6d1'
    },
    production: false,
    msAuth: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
