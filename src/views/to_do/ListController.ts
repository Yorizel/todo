import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class ListController extends Vue {
  mountHandler(): void {
    return this.TODOHandler();
  }
  private TODOHandler() {
    const todos = this.getTODOS();
    return this.setTODOS(todos);
  }
  toggleTODO(): boolean {
    return (this.scope.formData.open = !this.scope.formData.open);
  }
  formatDate(date: Date): string {
    return format(date, "Pp", { locale: ptBR });
  }
  private getTODOS(): [] {
    const { category } = this.scope.$route.params;
    if (localStorage.getItem(`todo-${category}`))
      return JSON.parse(<string>localStorage.getItem(`todo-${category}`));
    return [];
  }
  private setText(value = "") {
    this.scope.$set(this.scope.formData, "text", value);
  }
  addTODO(): void {
    this.scope.todos.push({
      title: this.scope.formData.text,
      open: false,
      date: Date.now(),
    });
    this.setText();

    this.saveAllTODOS();
    this.toggleTODO();
  }
  saveAllTODOS(): void {
    const { category } = this.scope.$route.params;
    const todos = JSON.stringify(this.scope.todos);
    localStorage.setItem(`todo-${category}`, todos);
  }
  deleteAllTODOS(): void {
    this.setTODOS();
    localStorage.setItem("TODOS", "");
    return this.setSnackbar({
      open: true,
      type: "success",
      message: "TODOS deletados com sucesso",
    });
  }
  private setTODOS(value = []) {
    this.scope.$set(this.scope, "todos", value);
  }
  deleteTODO(index: number): void {
    this.scope.todos.splice(index, 1);
  }
  private setSnackbar(value = { message: "", type: "", open: false }) {
    this.scope.$set(this.scope, "snackbarController", value);
  }
  // sortByDate(): [] {
  //   const clonedArray = this.scope.search
  //     ? [...this.sortBySearch()]
  //     : [...this.scope.todos];
  //   return clonedArray.sort((a: number, b: any) => {
  //     return b.date - a.date;
  //   });
  // }
}
