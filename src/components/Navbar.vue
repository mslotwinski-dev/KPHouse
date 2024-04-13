<template>
  <nav>
    <img src="@/assets/logo/light.png" alt="" />
    <div>Kamiński & Partners</div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  margin: 0 5vw;
  height: 60px;
  background: theme(b1);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
}

img {
  height: 45px;
  margin: 0 10px;
}

div {
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: theme(light);
}
</style>
