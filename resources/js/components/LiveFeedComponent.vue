<template>
  <v-app style="padding: 0" id="inspire">
    <v-parallax 
     style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(https://picsum.photos/1510/400?random)"
     dark  height="300" class="elevation-2">
      <v-row align="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4"><v-avatar></v-avatar></h1>
          <h1 class="subheading">News Feed</h1>
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
              <v-row class="grey lighten-3">
                <v-col cols="12" sm="12" style="padding-top: 0">
                  <v-card-title class="primary--text">News Feed</v-card-title>
                  <v-sheet elevation="0" class="1">
                    <div>
                      <v-row no-gutters>
                        <v-col cols="3" sm="3">
                          <v-card class="pa-2 text-center" outlined tile>
                            <div>
                              <v-icon
                                small
                                class="mdi mdi-compass-outline"
                                :text="Trip"
                              ></v-icon>
                              <span class="body-2 hidden-sm-and-down" small>Trip</span>
                            </div>
                          </v-card>
                        </v-col>
                        <v-col cols="3" sm="3">
                          <v-card
                            class="pa-2 text-center primary"
                            dark
                            outlined
                            tile
                          >
                            <div>
                              <v-icon small class="mdi mdi-pen"></v-icon>
                              <span class="body-2 hidden-sm-and-down" small>Post</span>
                            </div>
                          </v-card>
                        </v-col>
                        <v-col cols="3" sm="3">
                          <v-card class="pa-2 text-center" outlined tile>
                            <div>
                              <v-icon small class="mdi mdi-calendar"></v-icon>
                              <span class="body-2 hidden-sm-and-down" small>Event</span>
                            </div>
                          </v-card>
                        </v-col>
                        <v-col cols="3" sm="3">
                          <v-card class="pa-2 text-center" outlined tile>
                            <div>
                              <v-icon
                                small
                                class="mdi mdi-briefcase-outline"
                              ></v-icon>
                              <span class="body-2 hidden-sm-and-down" small>Oppurtunity</span>
                            </div>
                          </v-card>
                        </v-col>
                      </v-row>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>

              <v-row class="grey lighten-3">
                <v-col cols="12" style="padding-top: 0" v-for="n in 4" :key="n">
                  <v-sheet elevation="0" class="1">
                    <v-card class="mx-auto">
                      <v-list-item>
                        <v-list-item-avatar color="grey">
                          <v-img src="img/aldwin.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="headline"
                            >Our Changing Planet</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >by Aldwin Seboguero</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-card-text>
                        Visit ten places on our planet that are undergoing the
                        biggest changes today.
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-comment</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet min-height="20vh">
              <v-card-title style="padding-bottom: 0"
                >Recently Connected</v-card-title
              >
              <v-divider></v-divider>

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="n in 6"
                  :key="n"
                  style="padding-bottom: 0"
                >
                  <v-list-item three-line>
                    <v-list-item-avatar tile size="30" color="grey">
                      <!-- <v-img src="img/aldwin.jpg"></v-img -->
                      I</v-list-item-avatar
                    >
                    <v-list-item-content>
                      <div class="text-xs-left subtitle-2">
                        Aldwin Seboguero
                      </div>
                      <v-list-item-subtitle small
                        >ICTMO Staff</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-sheet>

            <v-sheet min-height="20vh" style="margin-top: 20px">
              <v-card-title style="padding-bottom: 0"
                >Upcoming Event</v-card-title
              >
              <v-divider></v-divider>
              <v-card class="mx-auto" v-for="n in 3" :key="n">
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="overline mb-4">Conference</div>
                    <v-list-item-title class="subtitle-2 mb-1"
                      >Business Conference with dsk</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly
                      fonwderfully</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <!-- <v-card-actions>
                  <v-chip-group>
                    <v-chip
                      v-for="size in 4"
                      :key="size"
                      :value="size"
                      color="transparent"
                    >
                      <v-avatar>
                        <v-img src="img/aldwin.jpg"></v-img>
                      </v-avatar>
                    </v-chip>
                  </v-chip-group>
                </v-card-actions> -->
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
    return {
      years: [
        {
          color: "cyan",
          year: "1960",
        },
        {
          color: "green",
          year: "1970",
        },
        {
          color: "pink",
          year: "1980",
        },
        {
          color: "amber",
          year: "1990",
        },
        {
          color: "orange",
          year: "2000",
        },
      ],
      tags: [
        "Programming",
        "Photo Editing",
        "Programming",
        "Photo Editing",
        "Photo Editing",
        "Programming",
        "Photo Editing",
      ],

      items: [
        {
          action: "mdi-mail",
          title: "aldwin.seboguero@parsu.edu.ph",
        },
        {
          action: "mdi-phone",
          title: "+639302418587",
        },
        {
          action: "mdi-map-marker",
          title: "Zone 3 Matacla Goa, Camarines Sur 4422",
        },
      ],
      items2: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Web Designer",
          subtitle: "Jan 9, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Front-End Developer",
          subtitle: "Jan 17, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Softwer Developer",
          subtitle: "Jan 28, 2014",
        },
      ],
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>