import axios from "axios";

let token = null;
if (!process.server) {
  token = localStorage.getItem("token");
}

const CancelToken = axios.CancelToken;
let cancel;

const instanceAuth = axios.create({
  baseURL: process.env.baseURL,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
});

const instance = axios.create({
  baseURL: process.env.baseURL + "/marketplace",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
});


const instanceCUD = axios.create({
  baseURL: process.env.baseURL + "/marketplace",
  timeout: 30000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
});

const checkUserIdentity = () => {
  return instance
    .get("/auth/user")
    .then((res) => {
      const { status, data } = res;
      if (status === 200) {
        return {
          status: true,
          user: data.data,
        };
      } else {
        return {
          status: false,
          error: data,
        };
      }
    })
    .catch((err) => {
      return {
        status: false,
        error: err,
      };
    });
};

const logoutWebAPI = () => {
  return instance.post("logout");
};

const setToken = (token) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
  instance.defaults.withCredentials = true;
  instanceCUD.defaults.headers.Authorization = `Bearer ${token}`;
};

const setAuthToken = (googleToken) => {
  instanceAuth.defaults.headers.Authorization = `Bearer ${googleToken}`;
  instanceAuth.defaults.withCredentials = true;
};

const logout = () => {
  token = null;
  window.localStorage.clear();
  logoutWebAPI();
  window.location.href = "/";
};

export default {
  fetchAuth: instanceAuth,
  fetch: instance,
  fetchCUD: instanceCUD,
  setToken,
  setAuthToken,
  logout,
  checkUserIdentity,
  cancel,
};
