<template>
  <div class="container">
    <header>
      <div class="big">Witamy w Kamiński & Partners,</div>
      twoim przewodniku w podróży po rynku
      <span class="green">nieruchomości</span>.
    </header>

    <div class="flex">
      <div class="text">
        <div class="about l">
          Myślisz o sprzedaży lub wynajmie swojej
          <b class="green">nieruchomości</b>, a może szukasz idealnego
          <b class="green">mieszkania</b> dla siebie?
        </div>
        <div class="about r">
          Nasz
          <b>zespół doświadczonych agentów</b> jest gotowy wspierać Cię na
          każdym kroku, aby zapewnić Ci komfortową i bezstresową transakcję.
        </div>
        <div class="about l">
          Niezależnie od tego, czy szukasz mieszkania dla siebie, czy planujesz
          inwestycję, nasi agenci służą pomocą, aby znaleźć
          <b>najlepsze rozwiązania</b>.
        </div>
        <div class="about r">
          Twoje <b>bezpieczeństwo</b> i satysfakcja są dla nas priorytetem,
          dbamy o każdy detal.
        </div>
        <div class="about l">
          Zaufaj nam, a będziesz mieć pewność, że jesteś w dobrych rękach.
          Wspólnie znajdziemy twój <b class="green">dom marzeń</b>.
        </div>
      </div>
      <img src="@/assets/hello.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  max-width: 1250px;
  margin: auto;
  @media (min-width: 1000px) {
    padding: 10px;
  }
}

b {
  font-weight: 500;
  color: theme(b1);
}

header {
  padding-top: 20px;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 10px;

  @media (max-width: 1000px) {
    font-size: 20px;
    font-weight: 500;
  }

  .big {
    font-size: 50px;
    font-weight: 700;
    @media (max-width: 1000px) {
      font-size: 30px;
    }
  }
}

.about {
  margin: 10px;
  font-size: 22px;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  &.r {
    text-align: right;
  }
}

.green {
  color: theme(main);
  font-weight: 500;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
}

img {
  width: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px theme(dark);
  margin: 10px;
  @media (max-width: 1000px) {
    width: 100vw;
    margin: 10px 0;
    border-radius: 0;
    box-shadow: none;
  }
}

.text {
  padding: 10px;
}
</style>
