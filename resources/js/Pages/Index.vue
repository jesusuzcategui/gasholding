<template>
  <layoutapp>
    <div>
      <p>Hola mundo</p>
      <v-btn elevation="2">Hola mundo</v-btn>
    </div>
  </layoutapp>
</template>
<script>
import Layout from "../components/Layout.vue";
export default {
  name: "Homepage",
  components: {
    layoutapp: Layout,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>