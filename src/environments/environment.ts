// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            projectId: 'courseapp-c7a46',
            appId: '1:280416194259:web:3f0e24c01eb03e9c8b0e26',
            storageBucket: 'courseapp-c7a46.appspot.com',
            apiKey: 'AIzaSyAGgVfeL4OcxlCeoXZHgTBxM2xdRkQbFb4',
            authDomain: 'courseapp-c7a46.firebaseapp.com',
            messagingSenderId: '280416194259',
        },
        actionCodeSetting: {
            url: 'http://localhost:5200',
            handleCodeInApp: true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
