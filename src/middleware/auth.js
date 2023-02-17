import axios from "axios";
import router from "../router/router";
function auth({ next }) {

    axios.post(import.meta.env.VITE_HOST + '/api/auth_check',
        {
            api_token: localStorage.getItem("api_token")
        })
        .then(res => {
            console.log(res);
            if (res.data.user_auth == false) {
                console.log(
                    router.push({ name: "auth-login" })
                );
            }

        })

}

export default auth;