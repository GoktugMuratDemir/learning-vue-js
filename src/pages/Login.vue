/**
* @file Login.vue
* @description This file contains the login page component.
* The login page allows users to enter their email and password to log in.
* It also provides options for remembering the user's login and recovering a forgotten password.
*/

<template>
  <!-- The login page component -->
  <div class="auth">
    <div class="auth__wrapper">
      <!-- Page title -->
      <p class="text -xxxl -bold">Login</p>
      <form class="auth__form">

        <!-- Email field -->
        <AuthTextField icon="ic_mail" type="email" label="Email" />

        <!-- Password field -->
        <AuthTextField icon="ic_password" type="password" label="Password" />

        <!-- Remember Me checkbox and Forgot Password link -->
        <AuthCheckBox label="Remember Me" linkText="Forgot Password?" />

        <!-- Login button -->
        <button class="btn -contained -dark-400">Login</button>

        <!-- Register link -->
        <p class="text -xs -medium -dark-400">
          Don't have an account? <a class="text -link" href="#">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>


<script>
import AuthTextField from '../components/textfields/AuthTextfield.vue';
import AuthCheckBox from '../components/checkboxs/AuthCheckBox.vue';

export default {
  components: {
    AuthTextField,
    AuthCheckBox
  }
}
</script>
