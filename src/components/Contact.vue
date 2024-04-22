<template>
  <div class="container">
    <div class="know">Dowiedz się więcej pod</div>
    <a href="tel:+48694642712" class="nr">694 642 712</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  margin: 20px auto 10vh auto;
  max-width: 1200px;
  font-size: 25px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    font-size: 22px;
    flex-direction: column;
  }
}

.nr {
  font-weight: 600;
  font-size: 28px;
  margin-left: 15px;
  background: theme(main);
  padding: 5px 10px;
  color: theme(light);
  border-radius: 10px;
  box-shadow: 0 0 20px theme(main);

  @media (max-width: 1000px) {
    margin: 10px 0;
    font-size: 22px;
    margin-top: 10px;
  }
}
</style>
