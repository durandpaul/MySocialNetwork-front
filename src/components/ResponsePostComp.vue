<template>
  <div id="response">
    <v-list-tile >
      <v-list-tile-avatar color="grey darken-3">
        <v-img
          class="elevation-6"
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-tile-avatar>

      <v-list-tile-content v-if="incomResponseUsername">
        <v-list-tile-title class="headline">{{ incomResponseUsername }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-card-text >{{ newResponse }}</v-card-text>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id", "incomResponse", "incomResponseUsername"],
  data: () => {
    return {
      newResponse: ""
    };
  },
  updated() {
  },
  mounted() {
    this.newResponse = this.incomResponse;
  }
};
</script>

<style>
#response {
  background-color: orangered;
  margin-top: 5px;
}
</style>
