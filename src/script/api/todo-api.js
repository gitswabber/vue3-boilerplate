"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var TodoApi = {
    findTodos: function () {
        /*    const result = await axios
          .get("http://localhost:8080" + "/todos")
          .then((response: { data: any }) => {
            console.log(response.data);
            console.log("###");
            return response.data;
          });*/
        // console.log("111");
        // console.log(import.meta.env);
        return axios_1["default"]
            .get(import.meta.env.VITE_API + "/todos")
            .then(function (response) {
            return response.data;
        });
    }
};
exports["default"] = TodoApi;
