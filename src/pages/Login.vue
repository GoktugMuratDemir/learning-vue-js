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
        <div class="auth__form-group">
          <img
            class="auth__form-group__icon img -icon"
            src="../assets/img/icons/ic_mail.svg"
            alt=""
          />
          <input class="auth__form-group__input" type="email" required />
          <label class="auth__form-group__label">Email</label>
        </div>

        <!-- Password field -->
        <div class="auth__form-group">
          <img
            class="auth__form-group__icon img -icon"
            src="../assets/img/icons/ic_password.svg"
            alt=""
          />
          <input class="auth__form-group__input" type="password" required />
          <label class="auth__form-group__label">Password</label>
        </div>

        <!-- Remember Me checkbox and Forgot Password link -->
        <div class="auth__form-actions">
          <label class="auth__form-actions__label">
            <input
              class="auth__form-actions__checkbox"
              type="checkbox"
              name=""
              id=""
            />Remember Me
          </label>
          <a class="text -link" href="#"> Forgot Password?</a>
        </div>

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
