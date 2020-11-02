<template>
  <div class="information">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <h3>Hospital Information</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12">
        <div class="card bg-dark text-white">
          <img class="card-img" src="img/img1.jpg" alt="Card image" />
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-lg-12 col-sm-12 col-xs-12"
        v-for="item in hospitleData"
        :key="item.id"
      >
        <card>
          <h4 class="card-title">{{ item.hospital.name_si }}</h4>
          <h5 class="card-title">{{ item.hospital.name }}</h5>
          <h5 class="card-title">{{ item.hospital.name_ta }}</h5>
          <p class="card-text">
            {{ item.hospital.updated_at }} updated patient in
            {{ item.hospital.name }} counted as {{ item.cumulative_local }}
          </p>
          <a href="#" class="btn btn-primary" @click="GetInformation(item.id)">show More</a>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "LocalInformation",
  components: {},
  data() {
    return {
      hospitleData: {},
    };
  },
  computed: {},
  methods: {
    getSrilankaHospitleData() {
      axios
        .get("https://hpb.health.gov.lk/api/get-current-statistical")
        .then((response) => {
          (this.hospitleData = response.data.data.hospital_data),
            console.log("GLobal New deaths:", this.hospitleData);
        });
    },
    GetInformation(index){
        let id = index;
        // console.log("get ID",id);
        this.$router.push({ path: `localInformation/${id}` });
    }
  },

  mounted() {},
  created() {
    this.getSrilankaHospitleData();
  },
};
</script>
<style></style>
