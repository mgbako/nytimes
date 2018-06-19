// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAIdOTK7rhK0KdiVdlcgM2L-w9x2KEm_Io",
    authDomain: "nytimes-522eb.firebaseapp.com",
    databaseURL: "https://nytimes-522eb.firebaseio.com",
    projectId: "nytimes-522eb",
    storageBucket: "",
    messagingSenderId: "873706134113"
  }
};
