import axios from "axios";

const ApiClient = axios.create({
  baseURL: `http://103.183.75.112/api/`,
});

ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    console.log(response);
    throw error;
  }
);

export default ApiClient;
