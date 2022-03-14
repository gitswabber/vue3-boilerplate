import axios from "axios";

export interface HelloApi {
  sayHello(): any;
}

class HelloApiImpl implements HelloApi {
  sayHello(): any {
    return axios
      .get(import.meta.env.VITE_API + "/hello")
      .then((response: { data: any }) => {
        return response.data;
      });
  }
}

export { HelloApiImpl };
