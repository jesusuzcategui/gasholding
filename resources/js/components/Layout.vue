<template>
  <div>
    <v-app>
        <div>
            <slot />
        </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Layout",
  metaInfo(){
      return {
          title: this.metaTitle
      }
  },
  data() {
    return {
        metaTitle: ""
    };
  },
  props: {
    showHeader: Boolean,
    showFooter: Boolean,
    titlePage: String,
  },
  components: {
  },
  methods: {
  },
  mounted(){
      this.metaTitle = this.titlePage + " - Tarjeta Locutorios";
  }
};
</script>