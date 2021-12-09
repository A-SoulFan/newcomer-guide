<template>
  <div class="member">
<!--    <navbar/>-->
<!--    <persona/>-->
<!--    <personalExperience/>-->
<!--    <relatedEntries/>-->
<!--    <recommendVideo/>-->
    <personalWorks/>
  </div>
</template>

<script>
import navbar from "../components/navbar/navbar";
import persona from "../components/persona/persona";
import personalExperience from '../components/experience/personalExperience'
import relatedEntries from '../components/relatedEntries/relatedEntries'
import personalWorks from "../components/personalWorks/personalWorks";
import recommendVideo from "../components/recommendVideo/recommendVideo";
export default {
  name: "member",
  components: {
    // navbar,
    // persona,
    // personalExperience,
    // relatedEntries,
    personalWorks,
    // recommendVideo
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical'
      }
    }
  },
}
</script>

<style scoped>

</style>
