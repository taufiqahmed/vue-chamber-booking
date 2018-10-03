<template>
  <div class="home">
    <h1>Chamber List</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Doctor</th>
          <th>Specialization</th>
          <th>Schedule</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(chamber) in chamberList" :key="chamber.id">
          <td>{{chamber.number}}</td>
          <td>{{chamber.doctor.name}}</td>
          <td>{{chamber.doctor.specialization}}</td>
          <td>{{chamber.schedule.start}}-{{chamber.schedule.end}}</td>
          <td>
            <button class="btn" @click="viewBookings(chamber)">View Bookings</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      chamberList: [
        {
          id: 1,
          number: 101,
          doctor: {
            name: "Taufiq Ahmed",
            specialization: "Dermatoligst"
          },
          schedule: {
            start: "09:00",
            end: "13:00"
          }
        },
        {
          id: 2,
          number: 102,
          doctor: {
            name: "Tanveer Ahmed",
            specialization: "Medicine"
          },
          schedule: {
            start: "11:00",
            end: "15:00"
          }
        }
      ]
    };
  },

  methods: {
    viewBookings(chamber) {
      this.$router.push(`/chamber/${chamber.id}`);
    }
  }
};
</script>

<style>
.home {
  padding: 0 10px;
}
</style>

