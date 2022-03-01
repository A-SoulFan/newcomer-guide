<template>
  <div class="member">
    <!--    <a-anchor class="anchor" :target-offset="targetOffset">-->
    <!--      <a-anchor-link href="#navbar" title="&#45;&#45;&#45;&#45;&#45;&#45;"/>-->
    <!--      <a-anchor-link href="#memorabilia" title="&#45;&#45;&#45;&#45;&#45;&#45;"/>-->
    <!--      <a-anchor-link href="#persona" title="persona"/>-->
    <!--      <a-anchor-link href="#personalExperience" title="personalExperience"/>-->
    <!--      <a-anchor-link href="#relatedEntries" title="relatedEntries"/>-->
    <!--      <a-anchor-link href="#personalWorks" title="personalWorks"/>-->
    <!--      <a-anchor-link href="#recommendVideo" title="recommendVideo"/>-->
    <!--    </a-anchor>-->
    <navbar id="navbar"/>
    <memorabilia id="memorabilia"/>
    <persona id="persona"/>
    <personalExperience id="personalExperience"/>
    <relatedEntries id="relatedEntries"/>
    <personalWorks id="personalWorks"/>
    <recommendVideo id="recommendVideo"/>
  </div>
</template>

<script>
import navbar from "../components/navbar/navbar";
import persona from "../components/persona/persona";
import personalExperience from '../components/experience/personalExperience'
import relatedEntries from '../components/relatedEntries/relatedEntries'
import personalWorks from "../components/personalWorks/personalWorks";
import recommendVideo from "../components/recommendVideo/recommendVideo";
import memorabilia from "../components/memorabilia/memorabilia";

export default {
  name: "member",
  components: {
    navbar,
    persona,
    personalExperience,
    relatedEntries,
    personalWorks,
    recommendVideo,
    memorabilia
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical'
      },
      targetOffset: undefined
    }
  },
  mounted() {
    this.targetOffset = window.innerHeight / 2;
  }
}
</script>

<style scoped lang="scss">
.anchor {
  position: fixed;
  left: 10px;
  top: 50vh;
  transform: translateY(-50%);
  z-index: 99999;
  ::v-deep .ant-anchor-wrapper {
    background: unset;
    .ant-anchor-ink {
      display: none;
    }
  }
}


</style>
