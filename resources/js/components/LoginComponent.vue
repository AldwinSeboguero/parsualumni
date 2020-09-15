<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                     <v-row>
                        <v-col cols="12" md="8">
                          <v-card-text class="mt-12">
                             
                               
                            <div class="text-center pb-4 mt-4">
                            
                                 <v-btn class="mx-2" fab  >
                                 <v-img
                                    src="http://parsu-oscs.herokuapp.com/img/profile/picture.jpg"
                                    alt="Vuetify"  
                                    width="100px" 
                                ></v-img>
                              </v-btn>
                            </div>
                            <h1 class="text-center display-2 teal--text text--accent-3">Sign in to ParSU Alumni</h1>
                            <!-- <div class="text-center pb-2 mt-4">
                              <v-btn class="mx-2" fab  >
                                <v-icon>mdi mdi-facebook</v-icon>
                              </v-btn>
                              <v-btn class="mx-2" fab  >
                                <v-icon>mdi mdi-google-plus</v-icon>
                              </v-btn>
                              <v-btn class="mx-2" fab  >
                                <v-icon>mdi mdi-linkedin</v-icon>
                              </v-btn> 
                            </div> -->
                            
                            <h4 class="text-center mt-4">Ensure your email for sign in</h4>
                            <v-form>
                              <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3" />
                              <v-text-field 
                              :type="showPassword ? 'text' : 'password'" 
                              label="Password"
                              prepend-icon="mdi-account-lock-outline"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPassword = !showPassword"
                            />
                            </v-form>
                            <h3 class="text-center mt-3">Forgot your password?</h3>
                          </v-card-text>
                          <div class="text-center mt-3 pb-3">
                            <v-btn rounded color="blue accent-3" dark>SIGN IN</v-btn>
                          </div>
                        </v-col>
                        <v-col cols="12" md="4" class="teal accent-3">
                          <v-card-text class="white--text mt-12">
                            <h1 class="text-center display-1">Hello, Friends !</h1>
                            <h5 class="text-center">Enter your personal details and start journey with us</h5>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                          </div> 
                        </v-col>
                      </v-row>                                  
                  </v-window-item> 
                  <v-window-item :value="2">
                      <v-row class="fill-height">
                        <v-col cols="12" md="4" class="teal accent-3">
                          <v-card-text class="white--text mt-12">
                            <h1 class="text-center display-1">Welcome Back!</h1>
                            <h5 class="text-center">To Keep connected with us please login with your personal info</h5>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                          </div>
                        </v-col>
                        <v-col cols="12" md="8">
                          <v-card-text class="mt-12">
                            <h1 class="text-center desplay-2 teal--text text--accent3">Create Account</h1>
                            
                            <h4 class="text-center mt-4">Ensure your email for registration</h4> 
                            <v-form>
                              <v-text-field
                              label="Student ID Number"
                              name="student_id"
                              prepend-icon="mdi-ticket-account"
                              type="text"
                              color="teal accent-3" /> 
                                <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                             /> 
                                <v-select
                                v-model="e1"
                                :items="batchtype"
                                menu-props="auto"
                                label="Select Batch Type"
                                hide-details
                                prepend-icon="mdi-clipboard-account"
                                class="pb-3"
                                single-line
                              ></v-select>
                              <v-select
                                v-model="e1"
                                :items="batch"
                                menu-props="auto"
                                label="Select High School Batch Year"
                                hide-details
                                prepend-icon="mdi-group"
                                class="pb-3"
                                single-line
                              ></v-select>   
                              <v-select
                                v-model="e1"
                                :items="batch"
                                menu-props="auto"
                                label="Select College Batch Year"
                                hide-details
                                prepend-icon="mdi-group"
                                class="pb-3"
                                single-line
                              ></v-select>    
                               <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3" />
                              <v-text-field 
                              :type="showPassword ? 'text' : 'password'" 
                              label="Password"
                              prepend-icon="mdi-account-lock-outline"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPassword = !showPassword"
                            />
                            <v-text-field 
                              :type="showPasswordc ? 'text' : 'password'" 
                              label="Confirm Password"
                              prepend-icon="mdi-account-lock-outline"
                              :append-icon="showPasswordc ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPasswordc = !showPasswordc"
                            />
                            </v-form>
                          </v-card-text>
                          <div class="text-center mt-3 pb-3">
                            <v-btn rounded color="blue accent-3" dark>SIGN UP</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
 data: () => ({
   step: 1,
   showPassword: false, 
   showPasswordc: false, 
   e1: 'Select Batch', 
        batch: [
          '2000','2001','2002','2003','2004','2005',
          '2006','2007','2008','2009','2010','2011',
          '2012','2013','2014','2015','2016','2017',
          '2018','2019'
        ],
   e1: 'Select Batch Type', 
        batchtype: [
          'High School','College','High School and College' 
        ],     
 }),
 props: {
   source: String
 },
 name: 'App',
  
}
</script>

// <v-main>
//       <v-container
//         class="fill-height"
//         fluid
//       >
//         <v-row
//           align="center"
//           justify="center"
//         >
//           <v-col
//             cols="12"
//             sm="8"
//             md="4"
//           >
//            <v-card >
//               <v-card-title class="pb-6 align-center">
//                 <h1>Login</h1>
//               </v-card-title>
//               <v-card-text>
//                 <v-divider></v-divider>
//                 <v-form>
//                   <v-text-field 
//                     label="Username" 
//                     prepend-icon="mdi-account-circle-outline"
//                   />
//                   <v-text-field 
//                     :type="showPassword ? 'text' : 'password'" 
//                     label="Password"
//                     prepend-icon="mdi-account-lock-outline"
//                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
//                     @click:append="showPassword = !showPassword"
//                   />
//                 </v-form>
//               </v-card-text>
//               <v-divider></v-divider>
//               <v-card-actions>
//                 <v-btn color="success">Register</v-btn>
//                 <v-btn color="info">Login</v-btn>
//               </v-card-actions>
//             </v-card>
//           </v-col>
//         </v-row>
//       </v-container>
//     </v-main>
//   </v-app>