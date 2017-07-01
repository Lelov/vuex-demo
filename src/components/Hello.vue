<template>
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
        this.$store.getter.getCount;
    }
  },
  methods: {
    inc () {
        this.$store.commit('inc')
    },
    dec () {
        this.$store.commit('dec')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
