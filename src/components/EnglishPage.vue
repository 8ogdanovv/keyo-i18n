<template>
  <iframe :src="englishPageURL" title="English Page" frameborder="0" width="100%" />
</template>

<script>
export default {
  name: 'EnglishPage',
  computed: {
    englishPageURL() {
      // Modify the URL based on the actual file path in the public directory
      return '/Keyo_Home.html';
    },
  },
};
</script>
