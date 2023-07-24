<template>
  <div>
    <div class="select">
      <label
        for="langSelect"
        :style="{ backgroundImage: selectedLanguage === 'ua' ? 'url(https://cdn3.iconfinder.com/data/icons/finalflags/256/Ukraine-Flag.png)' : 'url(https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/Jarvis-Island-Flag-icon.png)' }"
      ></label>
      <select v-model="selectedLanguage" @change="navigateToPage" id="langSelect">
        <option value="en">English</option>
        <option value="ua">Українська</option>
      </select>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedLanguage: 'ua', // Set 'ua' as the default language
    };
  },
  methods: {
    navigateToPage() {
      const path = this.selectedLanguage === 'en' ? '/en' : '/ua';
      this.$router.push(path);
    },
  },
};
</script>

<style>

.select {
  position: fixed;
  top: 28px;
  left: 50%;
  z-index: 9999;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #fff8;
  border-radius: 5px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  --size: calc(1.5rem + 12px);
}

label {
  position: relative;
  display: block;
  width: var(--size);
  height: var(--size);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

select {
  height: var(--size);
  font-size: 1rem;
  line-height: var(--size);
  position: relative;
  padding: 0 0.5rem;
  top: -50%;
  left: 4rem;
}

</style>
