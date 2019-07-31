<template>
  <div id="post">
    <v-card>
      <v-card-actions>
        <v-btn color="orange darken-2" dark v-on:click.prevent="deletePost($event, id)">
          <v-icon>clear</v-icon>
        </v-btn>
        <v-btn color="orange darken-1" dark v-on:click.prevent="modifyPost">
          <v-icon>create</v-icon>
        </v-btn>
      </v-card-actions>
      <v-img></v-img>
      <v-list-tile>
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content v-if="incomUsername">
          <v-list-tile-title class="headline">{{ incomUsername }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-card-text>
        <v-form v-on:submit.prevent="sendModif($event, postId)">
          <v-textarea
            :disabled="canModifPost"
            v-model="newMessage"
            :value="incomMess"
            :auto-grow="true"
            :rows="1"
          ></v-textarea>
          <v-btn type="submit" v-if="!canModifPost" color="orange lighten-1">apply change</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-form v-on:submit.prevent="sendResponse()">
          <v-textarea
            v-model="newResponse"
            outline
            v-validate="'required|min:1'"
            type="text"
            label="Response to this post"
            :auto-grow="true"
            :rows="1"
          ></v-textarea>
          <v-btn type="submit" color="orange lighten-3">Your response</v-btn>
        </v-form>
      </v-card-actions>
      <div v-for="(response, i) in getResponseById" :key="`${i}`">
        <response-post-comp
          v-if="response"
          :incomResponse="response.data[i].message"
          :incomResponseUsername="response.data[i].username"
          :id="i"
        ></response-post-comp>
      </div>
    </v-card>
  </div>
</template>

<script>
import ResponsePostComp from "../components/ResponsePostComp";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "response-post-comp": ResponsePostComp
  },
  props: ["incomMess", "incomUsername", "postId"],
  data: () => {
    return {
      canModifPost: true,
      newMessage: "",
      newResponse: "",
      responses: ""
    };
  },
  mounted() {
    this.newMessage = this.incomMess;
  },
  created() {    
    this.loadResponseByP(this.postId);
  },
  computed: {
    ...mapGetters({
      getPostResponses: "getResponsesById",
      allResponse: "getResponseArray"
    }),
    getResponseById() {
      // console.log('getResponseById', this.getPostResponses(this.postId));
      return this.getPostResponses(this.postId);
    }
  },
  methods: {
    ...mapActions({
      delete: "deleteThisPost",
      update: "updateThisPost",
      createResponse: "addResponseToPost",
      loadResponseByP: "loadResponseByPost"
    }),
    // created() {},
    deletePost(event, id) {
      this.delete(id);
    },
    modifyPost() {
      this.canModifPost = false;
    },
    sendModif(event, postId) {
      // console.log("sendModif", this.postId);

      this.update({ message: this.newMessage, postId: this.postId });
      this.canModifPost = true;
    },
    sendResponse(event) {
      this.createResponse({
        postId: this.postId,
        username: this.incomUsername,
        message: this.newResponse
      })
        .then(data => {
          // console.log("data", data);
          this.clear();
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    clear() {
      // this.valid = false;
      this.newResponse = "";
      // this.$validator.reset();
    }
  }
};
</script>

<style>
#post {
  margin-bottom: 50px;
}
</style>
