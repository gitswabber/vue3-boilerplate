import axios from "axios";

const TodoApi = {
  findTodos() {
    return axios
      .get(import.meta.env.VITE_API + "/todos")
      .then((response: { data: any }) => {
        return response.data;
      });
  },
};

export default TodoApi;
