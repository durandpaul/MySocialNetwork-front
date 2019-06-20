<template>
  <div class="signup">
    <h1>Signup Please</h1>
    <v-layout align-center justify-center row fill-height>
      <v-form v-model="valid" v-on:submit.prevent="submit" ref="form" lazy-validation>
       <v-text-field
          v-model="user.username"
          v-validate="'required|max:20'"
          type="text"
          :counter="20"
          :error-messages="errors.collect('username')"
          label="Username"
          data-vv-name="username"
          :autofocus="true"
        ></v-text-field>
        <v-text-field
          v-model="user.firstname"
          v-validate="'required|max:10'"
          type="text"
          :counter="10"
          :error-messages="errors.collect('firstname')"
          label="Firstname"
          data-vv-name="firstname"
        ></v-text-field>
        <v-text-field
          v-model="user.lastname"
          v-validate="'required|max:15'"
          type="text"
          :counter="15"
          :error-messages="errors.collect('lastname')"
          label="Lastname"
          data-vv-name="lastname"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          v-validate="'required|email'"
          type="text"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          type="password"
          v-validate="'required|min:8'"
          :error-messages="errors.collect('password')"
          label="Password"
          data-vv-name="password"
        ></v-text-field>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="user.birthdate"
              label="Your Birthday"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="user.birthdate" @input="menu2 = false"></v-date-picker>
        </v-menu>
    
        <v-btn type="submit">submit</v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import store from '../store/store';
  // import router from "./router";
  import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

  Vue.use(VeeValidate, {
    validity: true
  });

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      newUser: '',
      user : {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        birthdate: '',
        password: '',
      },
      valid: false,
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          username: 'Username',
          firstname: 'First Name',
          lastname: 'Last Name',
          email: 'E-mail Address',
          birthdate: 'Date of Birth',
          password: 'Password',
          // custom attributes
        },
        custom: {
          firstname: {
            required: () => 'Firstname can not be empty',
            max: 'The firstname field may not be greater than 15 characters',
          },
           lastname: {
            required: () => 'Lastname can not be empty',
            max: 'The lastname field may not be greater than 20 characters',
          },
           email: {
            required: () => 'Email can not be empty',
          },
           password: {
            required: () => 'Password can not be empty',
            min: 'The Password field should have minimum 8 characters',
          },
        }
      },
      // date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary);
      // console.log('this.$store', this.$store.state.user.isAuthenticated );      
    },
    updated() {
    },
    computed: {
      ...mapGetters({
        currentUser: 'currentUser'
      }),
    },
    methods: {
       ...mapActions({
         create: 'create'
       }),
      submit() {
        
        this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.create(this.user).then((data) => {
            // console.log('data', data);
            this.clear();
           this.$router.push('/userfield');
          }).catch((err) => {
            console.log('err', err);
          })
        }
      });
      },
      clear() {
        this.user.username = '';
        this.user.firstname = '';
        this.user.lastname = '';
        this.user.password = '';    
        this.user.email = '';
        this.user.birthdate = '';
        this.$validator.reset();
      }
    }
  }
</script>

<style>
  .theme--light.v-messages:invalid, .theme--light.v-messages {
    color: red;
  }
  
</style>