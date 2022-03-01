<template>
  <div id="member">
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

</style>
