<template>
  <div class="GlobalCountriesDetails">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12"></div>
    </div>
    <div class="row">
      <card class="mb-3">
        <img
          slot="image"
          class="card-img-top"
          src="img/back2.jpg"
          alt="Card image cap"
        />
        <h4 class="card-title">{{ countryHospitalData.hospital.name_si }}</h4>

        <p class="card-text">
          {{ countryHospitalData.hospital.name }}
        </p>
        <p class="card-text">
          {{ countryHospitalData.hospital.name_ta }}
        </p>
      </card>
      <!-- <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="card bg-dark text-white">
          <img class="card-img" src="img/back2.jpg" alt="Card image" />
        </div>
      </div> -->
    </div>
    <div class="row">
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Updated at</h5>

            <h3 class="card-title">
              <img
                src="img/icons/correct.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              {{ countryHospitalData.created_at }}
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">cumulative local</h5>

            <h3 class="card-title">
              <img
                src="img/icons/search.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.cumulative_local"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">cumulative foreign</h5>

            <h3 class="card-title">
              <img
                src="img/icons/search.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.cumulative_foreign"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">treatment local</h5>

            <h3 class="card-title">
              <img
                src="img/icons/death.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.treatment_local"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">treatment foreign</h5>

            <h3 class="card-title">
              <img
                src="img/icons/death.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.treatment_foreign"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">cumulative total</h5>

            <h3 class="card-title">
              <img
                src="img/icons/medic.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.cumulative_total"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-3 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">treatment total</h5>

            <h3 class="card-title">
              <img
                src="img/icons/medic.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.treatment_total"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
      <!-- <div class="col-lg-3 col-xs-6">
         <card type="chart">
          <template slot="header">
            <h5 class="card-category">cumulative_local</h5>

            <h3 class="card-title">
              <img
                src="img/icons/search.gif"
                alt="..."
                style="width:25px;height:25px;margin-right:8px;"
              />
              <animated-number
                :value="countryHospitalData.cumulative_local"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div> -->
    </div>
    <div class="row">
      <div class="col-lg-12">
        <card type="nav-tabs">
          <blockquote class="blockquote mb-0">
            <p>
              To prevent the spread of COVID-19
            </p>
            <footer class="blockquote-footer">
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
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
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </footer>
            <footer class="blockquote-footer">
              Stay home if you feel unwell.
            </footer>
            <footer class="blockquote-footer">
              If you have a fever, cough and difficulty breathing, seek medical
              attention.
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
  name: "localInformation",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      countryHospitalData: [],
    };
  },
  watch: {},
  methods: {
    valueFormat(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getHospitalDetails() {
      let thisListning;
      axios
        .get("https://hpb.health.gov.lk/api/get-current-statistical")
        .then((response) => {
          const id = this.$route.params.id;
          thisListning = response.data.data.hospital_data.find(
            (listning, index) => listning.id == id
          );
          this.countryHospitalData = thisListning;
          console.log("Selected COuntry Data :", this.countryHospitalData);
        });
    },
  },
  created() {
    this.getHospitalDetails();
  },
};
</script>
<style></style>
