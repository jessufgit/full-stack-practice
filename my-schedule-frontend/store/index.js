import axios from 'axios';

const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:3000"

const securedAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json"
  }
});

securedAxiosInstance.interceptors.request.use(config => {
  const method = config.method.toUpperCase();
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.csrf
    }
  }
  return config
});

securedAxiosInstance.interceptors.request.use(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    return plainAxiosInstance.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': localStorage.csrf } })
      .then(response => {
        localStorage.csrf = response.data.csrf
        localStorage.signedIn = true

        let retryConfig = error.response.config
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
        return plainAxiosInstance.request(retryConfig)
      }).catch(error => {
        delete localStorage.csrf
        delete localStorage.signedIn

        location.replace('/')
        return Promise.reject(error)
    })
  } else {
    return Promise.reject(error)
  }
})

const plainAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export const state = () => ({
  schedules: []
})

export const getters = {
  getSchedules(state) {
    return state.schedules
  }
};

export const mutations = {
  setSchedules(state, payload) {
    state.schedules = payload;
  }
};

export const actions = {
  async fetchData({ commit }) {
    try {
      const { data } = await axios.get(BASE_API_URL);
      commit('setSchedules', data);
    } catch (e) {
      console.log("error will robinson");
    }
  }
};
