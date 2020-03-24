<template>
  <div class="flex h-screen flex-col justify-center items-center bg-black">
      <div class="flex flex-col text-red-600 text-xl w-full text-center">
        <span class="font-bold text-white text-2xl mb-2">PHARAOH</span>
        <span>{{ left.days }} DAYS </span>
        <span>{{ left.hours | date }} HOURS</span>
        <span>{{ left.minutes | date }} MINUTES</span>
        <span>{{ left.seconds | date }} SECONDS</span>
        <span>{{ left.millesecounds | date }} MS</span>
      </div>
  </div>
</template>


<script>
import Countdown from 'countdown-vue'

export default {
  components: { Countdown },
  filters: {
    date: function(value) {
      return (value + '').length === 1 ? '0' + value : value;
    }
  },
  data() {
    return {
      left: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        millesecounds: ''
      }
    }
  },
  methods: {
    updateTimer() {
      let now = new Date().getTime();
      let distance = new Date("Mar 27, 2020 00:00:00").getTime() - now
      this.left.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.left.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.left.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.left.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.left.millesecounds = Math.floor((distance) % (100));
    }
  },
  created() {
    this.updateTimer();
    setInterval(() => this.updateTimer(), 2)
  }
}
</script>
