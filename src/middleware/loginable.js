import axios from "axios";
import router from "../router/router";
function loginable({ next }) {
 
    axios.post(import.meta.env.VITE_HOST + '/api/auth_check',
        {
            api_token: localStorage.getItem("api_token")
        })
        .then(res => {
            console.log(res);
            if (res.data.user_auth == true) {
                console.log(
                    router.push({name : "home"})
                );
            }

        })

}

export default loginable;