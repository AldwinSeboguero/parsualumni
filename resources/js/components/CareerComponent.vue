<template>
  <v-app style="padding: 0" id="inspire">
    <v-parallax   dark height="300" class="elevation-2"
    style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(https://picsum.photos/1510/400?random)"
    >
    
      <v-row align="center">
          <v-col
          class="text-right"
          cols="12"
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                class="primary"
                tile
                dark
                rounded
              >
                <v-icon>mdi-plus</v-icon>
                <span>New Opportunity</span>
              </v-btn>
            </template> 
          </v-menu>
        </v-col>
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4"><v-avatar></v-avatar></h1>
          <h1 class="subheading">OPPORTUNITES AND HELP REQUEST</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet height="30">
          <!-- <v-row no-gutters>
            <v-col cols="3" sm="3">
              <v-card class="pa-2 text-center" outlined tile >
              <div>
                  <v-icon small class="mdi mdi-pen"></v-icon>
                  <span class="body-2" small>Post</span>
                </div> 
              </v-card>
            </v-col>
            <v-col cols="3" sm="3">
              <v-card class="pa-2 text-center" outlined tile>
                <div>
                  <v-icon small class="mdi mdi-pen"></v-icon>
                  <span class="body-2" small>Post</span>
                </div>
              </v-card>
            </v-col>
            <v-col cols="3" sm="3">
              <v-card class="pa-2 text-center" outlined tile>
                <div>
                  <v-icon small class="mdi mdi-calendar"></v-icon>
                  <span class="body-2" small>Event</span>
                </div>
              </v-card>
            </v-col>
            <v-col cols="3" sm="3">
              <v-card class="pa-2 text-center" outlined tile>
                <div>
                  <v-icon small class="mdi mdi-briefcase-outline"></v-icon>
                  <span class="body-2" small>Oppurtunity</span>
                </div>
              </v-card>
            </v-col>
          </v-row> -->
        </v-sheet>
      </v-col>
    </v-row>
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
      <v-container fluid style="margin-top: 0">
        <v-row>
          <v-col cols="12" sm="6"  v-for="n in 4" :key="n">
            <v-sheet rounded="lg" min-height="268"  >
              <v-row class="grey lighten-3">
                <v-col cols="12" style="padding-top: 0" v-for="n in 4" :key="n">
                  <v-sheet elevation="0" class="1"> </v-sheet>
                </v-col>
              </v-row>
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
    return {};
  },
};
</script>