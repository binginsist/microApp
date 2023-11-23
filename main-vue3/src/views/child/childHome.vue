<template>
  <div>
    <micro-app
      name="child-home"
      url="http://localhost:3000/childHome/"
      ssr
    ></micro-app>
    <!-- 注意这里配置了 ssr 属性，还要配置主应用和子应用的 base 路径 -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
