<template>
  <div id="login">
    <paper-card heading="Login">
      <div class="card-content">
        <vaadin-form-layout>
          <vaadin-text-field label="Phone"></vaadin-text-field>
          <vaadin-password-field label="Password"></vaadin-password-field>
          <vaadin-button theme="primary">Login</vaadin-button>
        </vaadin-form-layout>
      </div>
    </paper-card>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>


