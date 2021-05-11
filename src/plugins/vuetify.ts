import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E6E4E4",
        secondary: "#D8D5D5",
        tertiary: "#CBC4C4",
        raw: "#8B0000",
        text: "#131116",
      },
      dark: {
        primary: "#131116",
        secondary: "#1E1819",
        tertiary: "#292324",
        raw: "#8B0000",
        text: "#FAF9F9",
      },
    },
  },
});
