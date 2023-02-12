import Axios from "axios";

Axios.defaults.baseURL =
  process.env.NODE_ENV !== "production"
    ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_SERVER_URL;

// Axios.interceptors.request.use((config) => {
//     // config.headers["Access-Control-Request-Headers"] = "Content-Type";
//     config.headers[''] = '*'
//   return config;
// });
// const AuthAxios = Axios.create();

// AuthAxios.interceptors.request.use((config) => {
//   let accessToken = Auth.getToken() || Auth.getSignupToken();

//   if (Auth.isExpired(accessToken)) {
//     Auth.logout();
//     window.location.pathname = routes.auth.login;
//   }

//   config.headers = { Authorization: `Bearer ${accessToken}` };
//   return config;
// });

export const axios = Axios;
// export const authAxios = AuthAxios;
