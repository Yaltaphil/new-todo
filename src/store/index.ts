import { createStore } from "vuex";
import { state } from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
    strict: process.env.NODE_ENV !== "production",
    state,
    actions,
    mutations,
    getters,
});
