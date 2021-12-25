<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
        <img class="center" src="../assets/img/Logo_UTEM.png">
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  background-color: white;
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
    animation: fadeout 0.2s forwards;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>