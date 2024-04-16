<template>
  <Hero />
  <Hello />
  <Contact />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Hero.vue'
import Hello from '@/components/Hello.vue'
import Contact from '@/components/Contact.vue'

export default defineComponent({
  mounted() {
    document.title = 'Kamiński & Partners'
  },
  components: {
    Hero,
    Hello,
    Contact,
  },
})
</script>
