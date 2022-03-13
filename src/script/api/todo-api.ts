import axios from "axios";

const TodoApi = {
  findTodos() {
    /*    const result = await axios
      .get("http://localhost:8080" + "/todos")
      .then((response: { data: any }) => {
        console.log(response.data);
        console.log("###");
        return response.data;
      });*/

    // console.log("111");
    // console.log(import.meta.env);

    return axios
      .get(import.meta.env.VITE_API + "/todos")
      .then((response: { data: any }) => {
        return response.data;
      });
  },
};

export default TodoApi;
