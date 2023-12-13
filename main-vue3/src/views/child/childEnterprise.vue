<template>
  <div>
    <!-- 对于子应用是 vite 的，需要加 iframe -->
    <micro-app
      :data="globalData"
      name="childEnterprise"
      url="http://localhost:5174/child/childEnterprise"
      iframe
    ></micro-app>
    <!-- 通过 data 属性传值
      <micro-app
      :data="globalData"
      name="childEnterprise"
      url="http://localhost:5174/child/childEnterprise"
      iframe
    ></micro-app> -->
  </div>
</template>

<script setup>
import microApp from "@micro-zoe/micro-app";
const globalData = microApp.getGlobalData();
microApp.setData("childEnterprise", globalData);
</script>

<style lang="scss" scoped></style>
