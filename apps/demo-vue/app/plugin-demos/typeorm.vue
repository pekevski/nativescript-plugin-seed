<template>
  <Page>
    <ActionBar>
      <Label text="typeorm"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedTypeorm } from '@demo/shared';
  import { } from '@pekevski/typeorm';

  export default Vue.extend({
    computed: {
      message() {
        return "Test typeorm";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
