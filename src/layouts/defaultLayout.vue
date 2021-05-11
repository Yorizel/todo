<template>
  <div class="d-flex flex-fill fill-height primary">
    <div>
      <v-navigation-drawer permanent>
        <v-list-item link @click="toggleTheme">
          <v-list-item-content>
            <v-list-item-title class="title"> TODOS</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon> mdi-moon-waxing-crescent</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in categories"
            :key="item.title"
            link
            active-class="primary"
            :to="{ name: 'ToDos', params: { category: item.title } }"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-btn icon>
              <v-icon> mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="d-flex flex-fill fill-height">
      <List />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import List from "../views/to_do/index.vue";

export default Vue.extend({
  name: "Drawer",
  components: { List },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data() {
    return {
      categories: [
        { title: "default", icon: "mdi-home" },
        { title: "escola", icon: "mdi-home" },
      ],
    };
  },
});
</script>

<style scoped></style>
