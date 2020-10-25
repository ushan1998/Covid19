<template>
  <div class="GlobalCountriesDetails">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <card class="mb-3">
          <!-- <img
            slot="image"
            class="card-img-top"
            src="img/covid.jpg" style="height:400px;"
            alt="Card image cap"
          /> -->
          <h4 class="card-title">{{ countryData.Country }}</h4>
          <p class="card-text">
            In {{ countryData.Country }} Today added another
            {{ countryData.NewConfirmed }} New Cases, and now All Confirmed
            people marked as {{ countryData.TotalConfirmed }} . Death count
            marked as {{ countryData.TotalDeaths }}. and today added anoth
            {{ countryData.NewDeaths }} Deaths .
            {{ countryData.NewRecovered }} persons are recovered today and count
            of all Recovered people is now {{ countryData.TotalRecovered }}.
          </p>
          <p class="card-text">
            <small class="text-muted"
              >Lastest update {{ countryData.Date }}</small
            >
          </p>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">New Cases</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.NewConfirmed"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Cases</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.TotalConfirmed"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">New Deaths</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.NewDeaths"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Deaths</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.TotalDeaths"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">New Recovered</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.NewRecovered"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Recovered</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="countryData.TotalRecovered"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <card type="nav-tabs">
          <blockquote class="blockquote mb-0">
            <p>
              To prevent the spread of COVID-19
            </p>
            <footer class="blockquote-footer">
             Clean your hands often. Use soap and water, or an alcohol-based hand rub.
            </footer>
            <footer class="blockquote-footer">
             Maintain a safe distance from anyone who is coughing or sneezing.
            </footer>
            <footer class="blockquote-footer">
            Wear a mask when physical distancing is not possible.
            </footer>
            <footer class="blockquote-footer">
            Don’t touch your eyes, nose or mouth.
            </footer>
            <footer class="blockquote-footer">
             Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
            </footer>
             <footer class="blockquote-footer">
            Stay home if you feel unwell.
            </footer>
             <footer class="blockquote-footer">
             If you have a fever, cough and difficulty breathing, seek medical attention.
            </footer>
          </blockquote>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AnimatedNumber from "animated-number-vue";
export default {
  name: "GlobalDetails",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      countryData: [],
    };
  },
  watch: {},
  methods: {
    valueFormat(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created() {
    let thisListning;

    //   console.log("The Country Owns this page is ",slug)
    axios.get("https://api.covid19api.com/summary").then((response) => {
      const slug = this.$route.params.Slug;
      thisListning = response.data.Countries.find(
        (listning, index) => listning.Slug == slug
      );
      this.countryData = thisListning;
      console.log("Selected COuntry Data :", this.countryData);
      // (this.globalInfo = response.data),
      // (this.Countries = response.data.Countries);
    });
  },
};
</script>
<style></style>
