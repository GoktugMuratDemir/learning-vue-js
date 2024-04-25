<template>
  <div class="auth">
    <div class="auth__wrapper">
      <p class="text -xxxl -bold">Register</p>
      <form class="auth__form">
        <AuthTextField icon="ic_user" type="text" label="Username" />

        <AuthTextField icon="ic_mail" type="email" label="Email" />

        <AuthTextField icon="ic_password" type="password" label="Password" />

        <AuthCheckBox label="I agree to the terms & conditions" />

        <button class="btn -contained -bigStone">Register</button>

        <AuthPrompt promptText="Already have an account?" linkText="Login" linkHref="/" />
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
