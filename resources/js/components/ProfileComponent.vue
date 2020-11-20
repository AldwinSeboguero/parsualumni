<template>
  <v-app style="padding: 0" id="inspire">
    <v-card   
  >
    <v-img
      height="300px"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      class="elevation-2"
      
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start" 
          cols="12"
          style="padding-left:20px"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="200"
            
            circle
          >
            <v-img src="/img/aldwin.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
              style="padding-left:30px"
          >
            <v-list-item-content>
              <v-list-item-title class="title">Aldwin Seboguero</v-list-item-title>
              <v-list-item-subtitle>Fullstack Developer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>

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
              <!--  -->
              <v-tabs
                v-model="tab"
                background-color="transparent"
                centered
                dark
                icons-and-text
                dense
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1" class="black--text"> Profile info </v-tab>

                <v-tab href="#tab-2" class="black--text"> News Feed </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item :value="'tab-1'">
                  <v-row class="grey lighten-3">
                    <v-col cols="12" sm="6" style="padding-top: 0">
                      <v-card-title>Industry</v-card-title>
                      <v-divider></v-divider>
                      <v-sheet elevation="0" class="1">
                        <div>
                          <v-chip-group
                            active-class="primary--text"
                            column
                            style="padding-left: 10px"
                          >
                            <v-chip :ripple="false" outlined rounded small>
                              Government
                            </v-chip>
                            <v-chip :ripple="false" outlined rounded small>
                              Education
                            </v-chip>
                          </v-chip-group>
                        </div>
                      </v-sheet>
                    </v-col>
                    <v-col cols="12" sm="6" style="padding-top: 0">
                      <v-card-title>Skill</v-card-title>
                      <v-divider></v-divider>
                      <v-sheet>
                        <div>
                          <v-chip-group
                            active-class="primary--text"
                            column
                            style="padding-left: 10px"
                          >
                            <v-chip
                              v-for="tag in tags"
                              :key="tag"
                              outlined
                              rounded
                              small
                            >
                              {{ tag }}
                            </v-chip>
                          </v-chip-group>
                        </div>
                      </v-sheet>
                    </v-col>
                  </v-row>

                  <v-row class="grey lighten-3">
                    <v-col cols="12" style="padding-top: 0">
                      <v-card-title>Experiences</v-card-title>
                      <v-divider></v-divider>
                      <v-sheet elevation="0" class="1">
                        <v-container fluid>
                          <v-list two-line subheader>
                            <v-list-item
                              v-for="item in items2"
                              :key="item.title"
                            >
                              <v-list-item-avatar>
                                <v-icon>mdi-domain</v-icon>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="item.title"
                                ></v-list-item-title>
                                <v-list-item-subtitle class="primary--text">
                                  <v-icon small color="primary"
                                    >mdi-home</v-icon
                                  >
                                  Partido State University
                                </v-list-item-subtitle>
                                <v-list-item-subtitle
                                  v-text="item.subtitle"
                                ></v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-container>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-2'">
                  <v-card flat class="grey lighten-3">
                    <v-card-text>tab 2</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet min-height="40vh">
              <v-card-title style="padding-bottom: 0">Contacts</v-card-title>
              <v-divider></v-divider>

              <v-list two-line>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>(63) 9302418587</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action></v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>(63) 9302418587</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      >sebogueroaldwin@gmail.com</v-list-item-title
                    >
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action></v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title
                      >aldwin.seboguero@parsu.edu.ph</v-list-item-title
                    >
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Zone 3 Matacla, Goa</v-list-item-title>
                    <v-list-item-subtitle
                      >Camarines Sur, Philippines 4422</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
        "Html 5",
        "CSS 3",
        "Laravel",
        "Vuejs",
        "Mysql",
        "Postgresql",
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