<template>
  <div class="auth">
    <div class="auth__wrapper">
      <p class="text -xxxl -bold">Login</p>
      <form class="auth__form">
        <AuthTextField icon="ic_mail" type="email" label="Email" />

        <AuthTextField icon="ic_password" type="password" label="Password" />

        <AuthCheckBox label="Remember Me" linkText="Forgot Password?" />

        <button class="btn -contained -dark-400">Login</button>

        <AuthPrompt promptText="Don't have an account?" linkText="Register" linkHref="/register" />
      </form>
    </div>
  </div>
</template>

<script>
import AuthTextField from "@/components/textfields/AuthTextfield.vue";
import AuthCheckBox from "@/components/checkboxs/AuthCheckBox.vue";
import AuthPrompt from "@/components/propmts/AuthPrompt.vue";

export default {
  components: {
    AuthTextField,
    AuthCheckBox,
    AuthPrompt
  },
};
</script>
