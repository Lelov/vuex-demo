<template lang="html">
  <div class="hello">
    <h2>vuex demo</h2>
    <p>
      {{ count }}
      <!-- <button @click="inc">+</button>
      <button @click="dec">-</button> -->
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  // mounted(){
  //   console.log(this.$store.)
  // }
  computed: {
    count () {
        return this.$store.getters.getCount;
    }
  },
  methods: {
    inc () {
        this.$store.commit('inc')
    },
    dec () {
        this.$store.commit('dec')
    }
  },
  mounted() {
    console.log(this.$store.getters.getCount)
  }
}
</script>

<style lang="css">
</style>
