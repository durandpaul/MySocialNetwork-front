<template>
  <div id="Login-comp">
    <v-form v-model="valid" v-on:submit.prevent="submit" ref="form" lazy-validation>
      <v-layout>
        <v-flex class="marginRight" xs12 sm6 md3>
          <v-text-field
            v-model="loginFields.username"
            v-validate="'required|max:20'"
            type="text"
            :error-messages="errors.collect('username')"
            label="Username"
            data-vv-name="username"
          ></v-text-field>
        </v-flex>
        <v-flex class="marginRight" xs12 sm6 md3>
          <v-text-field
            v-model="loginFields.password"
            type="password"
            v-validate="'required|min:8'"
            :error-messages="errors.collect('password')"
            label="Password"
            data-vv-name="password"
          ></v-text-field>
        </v-flex>
        <v-btn flat type="submit" small color="orange lighten-1">Connection</v-btn>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    loginFields: {
      username: "",
      password: ""
    },
    valid: false,
    dictionary: {
      attributes: {
        username: "Username",
        password: "Password"
      },
      custom: {
        username: {
          required: () => "Username can not be empty",
          max: "The Username field may not be greater than 15 characters"
        },
        password: {
          required: () => "Password can not be empty",
          min: "The Password field should have minimum 8 characters"
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    ...mapActions({
      login: "login"
    }),
    submit() {

      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.login(this.loginFields)
            .then(data => {
              this.$router.push("/userfield");
              this.clear();
            })
            .catch(err => {
              console.log("err", err);
            });
        }
      });
    },
    clear() {
      this.loginFields.username = "";
      this.loginFields.password = "";
      this.$validator.reset();
    }
  }
};
</script>

<style>
.marginRight {
  margin-right: 20px;
}
</style>