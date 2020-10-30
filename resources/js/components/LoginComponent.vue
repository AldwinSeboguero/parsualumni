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
                              label="First Name"
                              name="FName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                              v-model="fname"
                              :error-messages="fnameErrors" 
                              required
                              @input="$v.fname.$touch()"
                              @blur="$v.fname.$touch()"
                             /> 
                                <v-text-field
                              label="Last Name"
                              name="LName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                              v-model="lname"
                              :error-messages="lnameErrors" 
                              required
                              @input="$v.lname.$touch()"
                              @blur="$v.lname.$touch()"
                             /> 
                             <v-text-field
                              label="Middle Name"
                              name="MName"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                              v-model="mname"
                              :error-messages="mnameErrors"  
                              @input="$v.mname.$touch()"
                              @blur="$v.mname.$touch()"
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
                              prepend-icon="mdi-mail"
                              type="text"
                              color="teal accent-3" 
                              v-model="email"
                              :error-messages="emailErrors" 
                              required
                              @input="$v.email.$touch()"
                              @blur="$v.email.$touch()"
                              />
                              <v-text-field 
                              :type="showPassword ? 'text' : 'password'" 
                              label="Password"
                              prepend-icon="mdi-account-lock-outline"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPassword = !showPassword"
                              v-model="password" 
                              :error-messages="passwordErrors" 
                              required
                              @input="$v.password.$touch()"
                              @blur="$v.password.$touch()"
                            />
                            <v-text-field 
                              :type="showPasswordc ? 'text' : 'password'" 
                              label="Confirm Password"
                              prepend-icon="mdi-account-lock-outline"
                              :append-icon="showPasswordc ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPasswordc = !showPasswordc"
                              v-model="confirmPassword" 
                              :error-messages="confirmPasswordErrors" 
                              required
                              @input="$v.confirmPassword.$touch()"
                              @blur="$v.confirmPassword.$touch()"
                            />
                            </v-form>
                          </v-card-text>
                          <div class="text-center mt-3 pb-3">
                            <v-btn rounded color="blue accent-3" @click="register()" dark>SIGN UP</v-btn>
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
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
 
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAsPassword: sameAs("password") }
  },
 data: () => ({
 fname: "",
 lname: "",
 mname: "",
  email: "",
  password: "",
  confirmPassword: "",
  status: null, 
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

 computed: {
    fnameErrors() {
      const errors = [];
      if (!this.$v.fname) return errors;
      !this.$v.fname.minLength &&
        errors.push("Name must be at least 4 characters long.");
      !this.$v.fname.required && errors.push("Name is required.");
      return errors;
    },
    lnameErrors() {
      const errors = [];
      if (!this.$v.lname) return errors;
      !this.$v.lname.minLength &&
        errors.push("Name must be at least 4 characters long.");
      !this.$v.lname.required && errors.push("Name is required.");
      return errors;
    },
    mnameErrors() {
      const errors = [];
      if (!this.$v.mname) return errors;
      !this.$v.mname.minLength &&
        errors.push("Name must be at least 4 characters long.");
      !this.$v.mname.required && errors.push("Name is required.");
      return errors;
    },
     emailErrors() {
      const errors = [];
      if (!this.$v.email) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
     passwordErrors() {
      const errors = [];
      if (!this.$v.password) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("Password must be at least 8 characters long");
      return errors;
    }
 },
 methods: {
    async register() {
      this.$v.$touch();
      this.$store
        .dispatch("register", {
          fname: this.fname,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    cancel() {
      return this.$router.push({ name: "Home" });
    }
  }
  
}
</script>
