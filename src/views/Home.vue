<template>
<div>
    <ul id="nav">
        <li class="item1">Item1</li>
        <li class="item2">hellow so s</li>
        <li class="item3">hellow so s</li>
        <li class="item4">hellow so s</li>
        <li class="item5">hellow so s</li>
    </ul>
    Hello World
</div>
</template>

<script>

// Home.vue
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}

</script>