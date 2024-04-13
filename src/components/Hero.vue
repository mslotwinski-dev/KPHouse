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
    <img src="@/assets/eg/aaa.png" alt="" class="easter" v-if="skalniak" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      easteregg: 0,
      skalniak: false,
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress(e: any) {
      if (e.key == '2' && this.easteregg == 0) this.easteregg = 2
      else if (e.key == '1' && this.easteregg == 2) this.easteregg = 3
      else if (e.key == '3' && this.easteregg == 3) this.easteregg = 7
      else if (e.key == '7' && this.easteregg == 7) this.skalniak = true
      else this.easteregg = 0
    },
  },
  mounted() {
    document.addEventListener('keydown', this.onPress)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.bar {
  height: 60px;
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
  box-shadow: 0 0 20px theme(b3);
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
  @media (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    background: theme(b1);
    bottom: -7px;
    left: 0;
    border-radius: 10px;
    @media (max-width: 800px) {
      height: 4px;
    }
  }
}

.name {
  @media (max-width: 800px) {
    text-align: center;
  }
}

.company {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 450px;
    @media (max-width: 800px) {
      width: 250px;
    }
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

      @media (max-width: 800px) {
        font-size: 30px;
        text-align: center;
      }
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
      text-align: center;

      @media (max-width: 800px) {
        font-size: 28px;
        margin: auto;
      }
    }
  }
}

.easter {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100px;
  filter: opacity(0.5);
}
</style>
