<template>
  <sp-page class="sp-page--about">
    <template v-slot:header>
      <sp-header></sp-header>
    </template>
  </sp-page>
</template>

<script>
import SpHeader from '@/components/SpHeader.vue';
import SpPage from '@/components/SpPage.vue';

export default {
    name: 'AboutView',
    components: {
        SpHeader,
        SpPage,
    },
};
</script>
