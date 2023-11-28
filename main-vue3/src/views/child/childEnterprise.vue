<template>
  <div>
    <!-- 对于子应用是 vite 的，需要加 iframe -->
    <micro-app
      name="childEnterprise"
      url="http://localhost:5174/child/childEnterprise"
      iframe
    ></micro-app>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
