import axios from "axios";
import router from "../router/router";
function registrable({ next }) {
    console.log(
        localStorage.getItem("api_token")
    );
    axios.post(import.meta.env.VITE_HOST + '/api/auth_check',
        {
            api_token: localStorage.getItem("api_token")
        })
        .then(res => {
            console.log(res);
            if (res.data.user_auth == true) {
                router.push('/auth/login');
            }

        })

}

export default registrable;