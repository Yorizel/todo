<template>
  <div class="d-flex flex-fill col-10 ma-auto flex-column pa-4">
    <div class="text-capitalize text-h3 my-4">{{ headerName }}</div>
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex flex-fill rounded-lg tertiary" max-height="64">
        <v-slide-x-transition mode="out-in">
          <div
            class="d-flex flex-fill justify-center align-center"
            v-if="formData.open"
            key="primary"
          >
            <v-text-field class="px-4" label="Titulo" v-model="formData.text" />
            <v-btn class="mr-4" @click="controller.addTODO()"> Concluir </v-btn>
          </div>

          <div
            class="d-flex flex-fill justify-start align-center"
            v-else
            key="secondary"
          >
            <v-card-subtitle>
              <v-icon
                @click="controller.toggleTODO()"
                class="raw rounded-xl pa-1"
                color="white"
              >
                mdi-plus
              </v-icon>
            </v-card-subtitle>
            <v-card-title> Adicionar TODO </v-card-title>
          </div>
        </v-slide-x-transition>
      </v-card>
    </div>
    <v-slide-y-transition group mode="out-in">
      <v-card
        v-for="(item, index) in todos"
        :key="index"
        color="primary"
        class="d-flex pa-2 my-4 justify-center text--text align-center tertiary"
        max-height="64"
      >
        <v-card-title class="d-flex align-center tertiary flex-grow-1">
          <v-fade-transition mode="out-in">
            <v-text-field
              v-model="item.title"
              v-if="item.open"
              :placeholder="item.title"
              color="secondary"
              hide-details
              single-line
              class="pa-0 ma-0 my-text-style flex-grow-1"
            />
            <span v-else class="">
              {{ item.title }}
            </span>
          </v-fade-transition>
        </v-card-title>
        <v-card-subtitle class="d-flex align-center justify-center ma-0 pa-0">
          <span>
            {{ item.date | formatDate }}
          </span>
        </v-card-subtitle>
        <v-card-actions class="ml-auto">
          <v-btn @click="controller.deleteTODO(index)" icon>
            <v-icon color="text">mdi-delete</v-icon>
          </v-btn>

          <v-btn @click="item.open = !item.open" icon>
            <v-icon color="text">{{
              item.open ? "mdi-checkbox-marked-circle" : "mdi-pencil"
            }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-slide-y-transition>
    <div class="ml-auto mt-4">
      <v-btn
        class="mr-8"
        @click="controller.saveAllTODOS()"
        :disabled="!todos.length"
      >
        salvar todos
      </v-btn>
      <v-btn @click="controller.deleteAllTODOS()" :disabled="!todos.length">
        deletar todos
      </v-btn>
    </div>
    <v-snackbar
      v-model="snackbarController.open"
      shaped
      :color="snackbarController.type"
    >
      {{ snackbarController.message }}
    </v-snackbar>
  </div>
</template>

<script>
import script from "./script";
export default script;
</script>

<style scoped>
.my-text-style >>> .v-text-field__slot input {
  color: white;
}
</style>
