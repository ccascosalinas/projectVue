<template lang='pug'>
section
  // Left
  b-breadcrumb(align="is-left")
    b-breadcrumb-item(tag="router-link", to="/") Login
    b-breadcrumb-item(tag="router-link", to="/team.vue") Team
    b-breadcrumb-item(tag="router-link", to="/Schedule.vue") Discover the company
  section#pasos
    b-steps(v-model="activeStep" )
      template(v-for="(step, index) in steps" )
        b-step-item(
          v-if="step.displayed",
          :key="index",
          :visible="step.visible",
          :label="step.label"
        )
          | {{ step.content }}
      div
    b-collapse(:open="false", aria-id="contentIdForA11y1")
      template(#trigger="")
        b-button(
          label="Are you ready?",
          type="is-primary",
          aria-controls="contentIdForA11y1"
        )
      .notification
        h3
          strong Heading to your destination
        p Welcome to the right place, we will help you find the best path, we will guide you through different steps until you discover where you should go.
    section
        b-image(:src="require('@/assets/img/home.jpg')" alt='The Buefy Logo' ratio='601by255')
        
</template>

<script>
export default {
  setup() {
    return {
      activeStep: 0,
      showMusic: true,
      showBooks: false,
      showGames: false,
    };
  },
  computed: {
    baseSteps() {
      return [
        {
          label: "History",
          content:
            "The history of the company is an intermediate discipline between historiography and economic science, which has recently become an academic discipline. Its object is the study of the historical development of the company, unit of production in the capitalist system or in the market economy.The private company or the public company, which coincides with the person of the individual entrepreneur, the family business or the different forms of capital association, from the medieval societas and company to the privileged companies of mercantilism, the public limited company and the large corporation that arises in the 20th century are, in their emergence and historical evolution, studied by the history of the company.",
          displayed: true,
        },
        {
          label: "Achievements",
          content: "Few professionals do a self-analysis exercise prior to starting a search action. The analysis of achievements is one of the most important stages. We assure you that if you do this exercise seriously, you will have a much greater chance that your search will be successful. You will have to make an effort to reflect and return to the past in order to detect the most significant events of your professional career, the actions carried out and the results obtained. You should also write down your possible failures and the lessons you learned from them.",
          displayed: true,
          visible: this.showGames,
        },
        {
          label: "Mision and Vision",
          content: "A company's mission is the description of what a company is trying to do for its customers today. That purpose must answer certain questions: “Who are we? What do we do? and why are we here?. The vision of the company is the path to which it wants to go in the long term. Its definition serves as a guideline and incentive to guide strategic growth and competitiveness decisions.",
          displayed: true,
        },
      ];
    },
    steps() {
      const steps = [...this.baseSteps];
      if (this.showBooks) {
        steps.splice(steps.length - 1, 0, this.bookStep);
      }
      return steps;
    },
    methods: {
      facebook(){
        window.open('https://es-la.facebook.com/')
      },
      instagram(){
        window.open('https://www.instagram.com/?hl=es-la')
      },
      twitter(){
        window.open('https://twitter.com/?lang=es')
      },
      
    }
  },
};
</script>

<style scoped>
div {
  margin: 10px;
}

p {
  font-size: 18px;
}
</style>