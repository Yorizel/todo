import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { minValue, required } from "@/services/formRules";
import ListController from "@/views/to_do/ListController";
import Vue from "vue";

export default Vue.extend({
  name: "List",
  data() {
    return {
      headerName: this.$route.params.category,
      sortByDate: false,
      snackbarController: {
        message: "",
        type: "",
        open: false,
      },
      formData: {
        text: "",
        valid: false,
        open: false,
      },
      controller: new ListController(this),
      todos: [],
    };
  },
  filters: {
    formatDate: (date: Date) => format(date, "Pp", { locale: ptBR }),
  },
  computed: {
    formRules() {
      return { required: required, minValue: minValue };
    },
  },
  beforeMount() {
    this.controller = new ListController(this);
  },
  watch: {
    $route() {
      this.controller.mountHandler();
    },
  },
  mounted() {
    this.controller.mountHandler();
  },
});
