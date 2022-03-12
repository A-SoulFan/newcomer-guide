<template>
  <div class="team">
    <head-slider/>
    <bg-story/>
    <teamWorks />
    <personalExperience id="personalExperience"/>
  </div>
</template>

<script>
import teamWorks from "../components/teamWorks/teamWorks"
import headSlider from "../components/head/head";
import personalExperience from '../components/experience/personalExperience'
import bgStory from '../components/backgroundStory/backgroundStory'
export default {
  name: 'team',
  components: {
    teamWorks,
    headSlider,
    personalExperience,
    bgStory
  },
  data () {
    return {
    }
  }
}
</script>
<style>
</style>

