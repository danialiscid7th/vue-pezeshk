import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router/router";
import FormButton from "@component/form/FormButton.vue";
import FormInput from "@component/form/FormInput.vue";
import FormSelect from "@component/form/FormSelect.vue";
import FormTextarea from "@component/form/FormTextarea.vue";
import FormPhone from "@component/form/FormPhone.vue";
import GlobalNavigation from "@component/global/GlobalNavigation.vue";
import GlobalNavigationBack from "@component/global/GlobalNavigationBack.vue";
import GlobalNavigationLogo from "@component/global/GlobalNavigationLogo.vue";
import GlobalSearch from "@component/global/GlobalSearch.vue";
import GlobalMenu from "@component/global/GlobalMenu.vue";
import GlobalHeader from "@component/global/GlobalHeader.vue";
import GlobalDoctor from "@component/global/GlobalDoctor.vue";
import AppointmentHeader from "@component/appointment/AppointmentHeader.vue";
import AppointmentInformation from "@component/appointment/AppointmentInformation.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import VOtpInput from "vue3-otp-input";
library.add(fas)
library.add(far)
const app = createApp(App);





app.component('font-awesome-icon', FontAwesomeIcon)
app.component("FormButton", FormButton);
app.component("FormInput", FormInput);
app.component("FormSelect", FormSelect);
app.component("FormPhone", FormPhone);
app.component("FormTextarea", FormTextarea);
app.component("GlobalNavigation", GlobalNavigation);
app.component("GlobalNavigationBack", GlobalNavigationBack);
app.component("GlobalNavigationLogo", GlobalNavigationLogo);
app.component("GlobalSearch", GlobalSearch);
app.component("GlobalMenu", GlobalMenu);
app.component("GlobalHeader", GlobalHeader);
app.component("GlobalDoctor", GlobalDoctor);
app.component("AppointmentHeader", AppointmentHeader);
app.component("AppointmentInformation", AppointmentInformation);
app.component('v-otp-input', VOtpInput);


app.config.devtools = true;

app.config.warnHandler = function (msg, vm, trace) {
    if (msg.includes("Failed to resolve component")) return;
    if (msg.includes("already defined in Props")) return;
    console.warn(msg);
}

const pinia = createPinia();


app.use(router);
app.use(pinia)

import "./assets/main.css";
import "./assets/ress.css";

app.mount("#app");





