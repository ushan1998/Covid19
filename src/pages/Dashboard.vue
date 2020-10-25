<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-sm-6 col-xs-6">
        <div class="btn-group btn-group-toggle" style="float:left;">
          <label class="btn btn-sm btn-default btn-simple active" style="margin-top:8px;font-size:10px;">
            Last Update 
          </label>
        </div>
        <div class="btn-group btn-group-toggle" style="float:left;">
          <label class="btn btn-sm btn-primary btn-simple active" style="margin-top:8px;font-size:10px;"> 
            {{info.update_date_time}}
          </label>
        </div>

        <div class="btn-group btn-group-toggle" style="float:right;">
          <label
            class="btn btn-sm btn-primary btn-simple active"
            @click="showLocalDataSet"
          >
            Local
          </label>
          <label
            class="btn btn-sm btn-primary btn-simple"
            @click="showGlobalDataSet"
          >
            Global
          </label>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-lg-12">
        <div class="typography-line">
          <h3>COVID 19 Dashboard</h3>
        </div>
      </div>
    </div> -->

    <!-- section start  -> local COVID 19 Data-->
    <div class="row" style="margin-top:20px;" v-if="showLocalData">
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Local New Cases</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.local_new_cases"
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
            <h5 class="card-category">Local Total Cases</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_new_deaths"
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
            <h5 class="card-category">Local Deaths</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.local_deaths"
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
            <h5 class="card-category">Local New Deaths</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.local_new_deaths"
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
                :value="info.local_recovered"
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
            <h5 class="card-category">Active Cases</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>

              <animated-number
                :value="info.local_active_cases"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
    </div>
    <!-- section End   -> local COVID 19 Data-->

    <!-- section start  -> GLobal COVID 19 Data-->
    <div class="row" style="margin-top:20px;" v-if="showGlobalData">
      <div class="col-lg-2 col-xs-6">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Global New Cases</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_new_cases"
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
            <h5 class="card-category">Global Total cases</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_total_cases"
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
            <h5 class="card-category">Global Deaths</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_deaths"
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
            <h5 class="card-category">Global New Deaths</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_new_deaths"
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
            <h5 class="card-category">Global Recovered</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_recovered"
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
            <h5 class="card-category">local_total_cases</h5>

            <h3 class="card-title">
              <i class="tim-icons icon-bell-55 text-primary "></i>
              <animated-number
                :value="info.global_deaths"
                :formatValue="valueFormat"
                :duration="duration"
              />
            </h3>
          </template>
        </card>
      </div>
    </div>
    <!-- section End  -> GLobal COVID 19 Data-->
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <h5 class="card-category">
                  SRILANKA 
                </h5>
                 <img src="img/srilanka.png" alt="..." style="width:50px;height:25px;border-radius: 0.0rem;" />
                <h3 class="card-title">Daily PCR Testing</h3>
              </div>
              <div class="col-sm-6">
                <div
                  class="btn-group btn-group-toggle"
                  :class="isRTL ? 'float-left' : 'float-right'"
                  data-toggle="buttons"
                >
                  <label
                    v-for="(option, index) in bigLineChartCategories"
                    :key="option"
                    class="btn btn-sm btn-primary btn-simple"
                    :class="{ active: bigLineChart.activeIndex === index }"
                    :id="index"
                  >
                    <input
                      type="radio"
                      @click="initBigChart(index)"
                      name="options"
                      autocomplete="off"
                      :checked="bigLineChart.activeIndex === index"
                    />
                    {{ option }}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              chart-id="blue-bar-chart"
              :chart-data="blueBarChart.chartData"
              :gradient-stops="blueBarChart.gradientStops"
              :extra-options="blueBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <card class="card" :header-classes="{ 'text-right': isRTL }">
          <h4 slot="header" class="card-title">
            COVID 19 Global Update
          </h4>
          <div class="table-responsive">
            <user-table></user-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/Charts/LineChart";
import AnimatedNumber from "animated-number-vue";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./Dashboard/TaskList";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";
import axios from "axios";

export default {
  components: {
    LineChart,
    BarChart,
    TaskList,
    UserTable,
    AnimatedNumber,
  },
  data() {
    return {
      info: [],
      global_new_deaths: "",
      showLocalData: true,
      showGlobalData: false,
      value: 1000,
      duration: 1000,
      bigLineChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [{}],
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
    showLocalDataSet() {
      // alert("show local data");
      this.showLocalData = true;
      this.showGlobalData = false;
    },
    showGlobalDataSet() {
      // alert("Show Global Data");
      this.showGlobalData = true;
      this.showLocalData = false;
    },
    valueFormat(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    //     formatToPrice(value) {
    //   return `<h3>$ ${Number(value).toFixed(2)}</h1>`;
    // },
    fetchData(){
      
    }
  },
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    this.initBigChart(0);
    this.getdata();
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = "en";
      this.$rtl.disableRTL();
    }
  },
  created() {
    axios
      .get("https://hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        (this.info = response.data.data), console.log("get Data:", this.info);
        console.log("GLobal New deaths:", this.global_new_deaths);
      });
  },
};
</script>
<style></style>
