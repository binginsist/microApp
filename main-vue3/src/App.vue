<script setup>
import { useRoute } from "vue-router";
import commonHeader from "@/components/commonHeader.vue";
import commonFooter from "@/components/commonFooter.vue";
import mainContainer from "@/components/mainContainer.vue";

const route = useRoute();
</script>

<template>
  <el-config-provider namespace="ep">
    <common-header v-if="route.name !== 'login'" />
    <main-container />
    <common-footer v-if="route.name !== 'login'" />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
