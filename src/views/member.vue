<template>
  <div class="member">
    <navbar/>
    <persona style="display: none"/>
    <personalExperience/>
  </div>
</template>

<script>
import navbar from "../components/navbar/navbar";
import persona from "../components/persona/persona";
import personalExperience from '../components/experience/personalExperience'
export default {
  name: "member",
  components: {
    navbar,
    persona,
    personalExperience
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>

</style>
