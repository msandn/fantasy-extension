import axios from "axios";
let path = "http://localhost:1234";

class fplService {

    getMyFplAPI() {
        return axios({
            method: "get",
            url: "https://fantasy.premierleague.com/api/entry/1037074/history/"
        })
            .then((response) => response.data)
            .catch((error) => console.log(error));
    }


}
export let fplservice = new fplService();
