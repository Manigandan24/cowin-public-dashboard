// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  COWIN_PUBLIC_GENOTP_URL:'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
  COWIN_PUBLIC_CONFIRMOTP_URL:'https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',

  COWIN_ADMIN_STATE:'https://cdn-api.co-vin.in/api/v2/admin/location/states',
  COWIN_ADMIN_DISTRICT:'https://cdn-api.co-vin.in/api/v2/admin/location/districts/',

  COWIN_SESSIONS_BYPIN:'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?',
  COWIN_SESSIONS_BYDISTRICT:'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?',
  COWIN_SESSIONS_CAL_BYPIN:'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
