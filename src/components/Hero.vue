<template>
  <div class="bar" />
  <div class="container">
    <div class="content">
      <div class="company">
        <img src="@/assets/logo/dark.png" />
        <div class="name">
          <div class="estate">Biuro nieruchomości</div>
          <div class="kp"><span>K</span>amiński & Partners</div>
        </div>
      </div>
      <div class="motto">Wspólnie znajdziemy Twój dom marzeń</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.bar {
  height: 40px;
  background: theme(b1);
}
.container {
  height: 80vh;
  background-image: url('@/assets/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(4px);
  background: theme(gold, 0.6);
}

.motto {
  color: theme(light);
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  margin-top: 15px;
  text-shadow: 0px 0px 10px theme(dark);
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    background: theme(b1);
    bottom: -7px;
    left: 0;
    border-radius: 10px;
  }
}

.company {
  display: flex;
  align-items: center;
  img {
    width: 450px;
  }
  span {
    // color: theme(main);
  }
  .name {
    .estate {
      margin-top: 12%;
      font-size: 60px;
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 0px 0px 10px theme(dark);
      color: theme(light);
    }
    .kp {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 10px;
      background: theme(main);
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 800;
      text-shadow: 0px 0px 10px theme(dark);
      color: theme(light);
    }
  }
}
</style>
