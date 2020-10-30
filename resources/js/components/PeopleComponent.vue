<template>
  <v-app style="padding: 0" id="inspire">
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
          <v-col cols="12" sm="6">
            <div class="subtitle-2 mb-1 text-center"> 10 people found</div>
            <v-sheet min-height="268" class="grey lighten-3">
              <v-row>
                <v-col cols="12" md="6" v-for="n in 10" :key="n">
                  <v-card class="mx-auto" outlined>
                    <v-list-item three-line>
                      <v-list-item-avatar
                        tile
                        size="70"
                        color="grey"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <div class="overline mb-1">Aldwin Seboguero</div>
                        <v-list-item-subtitle>ICTMO Staff</v-list-item-subtitle>
                        <v-list-item-subtitle>
                          <v-btn outlined x-small color="primary"
                            >Send Message</v-btn
                          ></v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="6">
            <v-sheet>
              <v-card
                flat
                height="640px"
                img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
              >
                <v-toolbar dense floating>
                  <v-text-field
                    hide-details
                    prepend-icon="mdi-magnify"
                    single-line
                  ></v-text-field>

                  <v-btn icon>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
              </v-card>
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