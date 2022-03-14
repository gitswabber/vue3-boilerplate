import axios from "axios";

const HelloApi = {
  sayHello() {
    return axios
      .get(import.meta.env.VITE_API + "/hello")
      .then((response: { data: any }) => {
        return response.data;
      });
  },
};

export default HelloApi;
