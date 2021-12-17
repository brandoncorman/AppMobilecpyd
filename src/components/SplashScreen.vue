<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
      <img src="../assets/img/Logo_UTEM.png">
  </div>
</template>

<script lang="ts">
export default {
    name: "SplashScreen",
    props: ["isLoading"]
};
</script>

<style scoped>
.loader {
    background-color: #63ab97;
    bottom: 0;
    color: white;
    display: block;
    font-size: 32px;
    left: 0;
    overflow: hidden;
    padding-top: 10vh;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
}

.fadeout {
    animation: fadeout 15s forwards;
}

@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>