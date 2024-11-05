<script setup>
  import Header from './components/Header.vue';
  import Aboutme from './components/Aboutme.vue';
  import Profile from './components/Profile.vue';
  import Skill from './components/Skill.vue';
  import Project from './components/Project.vue';
</script>

<template>
  <Header />
  <Aboutme/>
  <Profile />
  <Skill />
  <Project />
</template>

<style>
  html, body {
    scroll-behavior: smooth; /* 부드러운 스크롤 스타일적용 */
    margin: 0;
    padding: 0;

  }

</style>