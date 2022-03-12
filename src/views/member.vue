<template>
  <div class="member">
    <head-slider/>
    <memorabilia id="memorabilia"/>
    <persona id="persona"/>
    <personalExperience id="personalExperience"/>
    <relatedEntries id="relatedEntries"/>
    <personalWorks id="personalWorks"/>
    <recommendVideo id="recommendVideo"/>
  </div>
</template>

<script>
import headSlider from "../components/head/head";
import persona from "../components/persona/persona";
import personalExperience from '../components/experience/personalExperience'
import relatedEntries from '../components/relatedEntries/relatedEntries'
import personalWorks from "../components/personalWorks/personalWorks";
import recommendVideo from "../components/recommendVideo/recommendVideo";
import memorabilia from "../components/memorabilia/memorabilia";

export default {
  name: "member",
  components: {
    headSlider,
    persona,
    personalExperience,
    relatedEntries,
    personalWorks,
    recommendVideo,
    memorabilia
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">

</style>
