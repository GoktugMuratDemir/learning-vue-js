/**
 * Component for the login page.
 *
 * This component displays a login form with email and password fields.
 * Users can enter their credentials and click the "Login" button to log in.
 * The component also provides a "Remember Me" checkbox and a "Forgot Password?" link.
 * If users don't have an account, they can click the "Register" link to create one.
 *
 * @component
 * @example
 * <Login />
 */
 
<template>
  <div class="login">
    <div class="login__wrapper">
      <p class="text -xxxl -bold">Login</p>
      <form class="login__form">
        <!-- Email field -->
        <div class="login__form-group">
          <img
            class="login__form-group__icon img -icon"
            src="../assets/img/icons/ic_mail.svg"
            alt=""
          />
          <input class="login__form-group__input" type="email" required />
          <label class="login__form-group__label">Email</label>
        </div>

        <!-- Password field -->
        <div class="login__form-group">
          <img
            class="login__form-group__icon img -icon"
            src="../assets/img/icons/ic_password.svg"
            alt=""
          />
          <input class="login__form-group__input" type="password" required />
          <label class="login__form-group__label">Password</label>
        </div>

        <!-- Remember Me checkbox and Forgot Password link -->
        <div class="login__form-actions">
          <label class="login__form-actions__label">
            <input
              class="login__form-actions__checkbox"
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
