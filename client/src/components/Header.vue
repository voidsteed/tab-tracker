<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat fark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark to='register'>
          Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
