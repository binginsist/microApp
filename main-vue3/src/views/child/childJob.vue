<template>
  <div>
    <micro-app
      :data="globalData"
      @datachange="handleDataChange"
      name="childJob"
      url="http://localhost:8080"
      baseroute="/main/childJob"
    ></micro-app>
  </div>
</template>

<script setup>
import microApp from "@micro-zoe/micro-app";
const globalData = microApp.getGlobalData();

const handleDataChange = (e) => {
  console.log("childJob", e);
};
</script>

<style lang="scss" scoped></style>
