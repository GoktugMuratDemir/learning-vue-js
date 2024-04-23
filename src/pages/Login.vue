<template>
  <div class="login">
    <div class="login__wrapper">
      <p class="text -xxxl -bold">Login</p>
      <form class="login__form">
        <div class="login__form-group">
          <img
            class="login__form-group__icon img -icon"
            src="../assets/img/icons/ic_mail.svg"
            alt=""
          />
          <input class="login__form-group__input" type="email" required />
          <label class="login__form-group__label">Email</label>
        </div>

        <div class="login__form-group">
          <img
            class="login__form-group__icon img -icon"
            src="../assets/img/icons/ic_password.svg"
            alt=""
          />
          <input class="login__form-group__input" type="password" required />
          <label class="login__form-group__label">Password</label>
        </div>

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

        <button class="btn -contained -dark-400">Login</button>

        <p class="text -xs -medium -dark-400">
          Don't have an account? <a class="text -link" href="#">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>
