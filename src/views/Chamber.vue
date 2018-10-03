<template>
  <div class="chamber">
    <h4>Chamber: {{chamber.number}}</h4>
    <h5>{{chamber.doctor.name}}</h5>
    <p>{{chamber.doctor.specialization}}</p>

    <table>
      <thead>
        <tr>
          <th>Serial</th>
          <th>Patient</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookingList" :key="booking.serial">
          <td>{{booking.serial}}</td>
          <td>{{booking.patient.name}}</td>
          <td>{{booking.completed}}</td>
          <td>
            <button class="btn" @click="markAsComplete(booking)">Complete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "chamber",
  data: function() {
    return {
      chamber: {
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
      bookingList: [
        {
          serial: 1,
          patient: {
            name: "Sayem",
            phone: "01801091"
          },
          completed: false
        },
        {
          serial: 2,
          patient: {
            name: "Hasan",
            phone: "01801091"
          },
          completed: true
        }
      ]
    };
  },
  methods: {
    markAsComplete(booking) {
      booking.completed = !booking.completed;
    }
  }
};
</script>

