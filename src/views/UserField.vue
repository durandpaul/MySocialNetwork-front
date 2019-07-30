<template>
  <div id="userfield">
    <bar-left-comp v-model="good"/>
    <v-container>
      <v-layout align-space-around justify-space-around row fill-height>
        <v-flex xs12 sm6 md4 lg4>{{good}}</v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <v-form v-model="valid" v-on:submit.prevent="submitPost" ref="form" lazy-validation>
            <v-textarea
              box
              v-model="message"
              v-validate="'required|min:1'"
              type="text"
              :error-messages="errors.collect('message')"
              label="Enter your feelings"
              :auto-grow="true"
              :rows="3"
              data-vv-name="message"
            ></v-textarea>
            <v-btn flat type="submit" small color="orange lighten-1">New Post</v-btn>
          </v-form>
          <v-layout v-for="(item, i) in getPostArray" :key="`${i}`" align-center column >
            <post-comp
              v-if="item"
              :incomMess="item.message"
              :incomUsername="item.username"
              :postId="item._id"
              style="width:100%"
            ></post-comp>
          </v-layout>
        </v-flex>
      
        <v-flex xs12 sm6 md4 lg4></v-flex>
      </v-layout>
    
    </v-container>
  </div>
</template>

<script>
import BarLeftComp from "../components/BarLeftComp";
import PostComp from "../components/PostComp";
import { mapActions, mapGetters } from "vuex";


export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {
    "bar-left-comp": BarLeftComp,
    "post-comp": PostComp
  },
  data: () => ({
    good: false,
    visited: 0,
    message: "",
    valid: false,
    dictionary: {
      attributes: {
        message: "Message"
      },
      custom: {
        message: {
          required: () => "Message can not be empty",
          min: "The Message field should have minimum 1 characters"
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);    
  },
  computed: {
    ...mapGetters({
      getPostArray: "getPostArray",
      currentUser: "currentUser"
    })
  },
  created() {
    this.loadUserPosts(this.currentUser._id);
  },
  methods: {
    ...mapActions({
      createPost: "createPost",
      loadUserPosts: "loadPostsByUser"
    }),
    submitPost() {
      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.createPost({ userId: this.currentUser._id ,username: this.currentUser.username, message: this.message, image: ''})
            .then(data => {
              this.clear();
            })
            .catch(err => {
              console.log("err", err);
            });
        }
      });
    },
    getValue() {
      if (this.currentUser) {
        return this.currentUser["username"];
      }
      return;
    },
    clear() {
      this.valid = false;
      this.message = "";
      this.$validator.reset();
    }
  },
};
</script>
<style>
/* .fill-height {
  height: 20%;
} */
</style>
