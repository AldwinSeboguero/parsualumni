<template>
  <v-app style="padding: 0" id="inspire">
    <v-parallax
      
      src="https://picsum.photos/1510/400?random"

      dark
    >
      <v-row align="center"  >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4"><v-avatar></v-avatar></h1>
          <h1 class="subheading">Aldwin Seboguero</h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-main class="grey lighten-3" style="padding: 0">
      <!-- <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
         
      </v-list-item>
    </v-list> -->
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="8">
            <v-sheet rounded="lg" min-height="268" class="grey lighten-3">
             
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet min-height="40vh">
             
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
    }
};
</script>