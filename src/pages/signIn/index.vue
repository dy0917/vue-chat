<template>
  <div class="container">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
        <div class="panel-heading">
          <div class="panel-title">Sign In</div>
          <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">Forgot password?</a></div>
        </div>

        <div style="padding-top:30px" class="panel-body" >
          <form class="ui form">
            <div class="field" :class="{error: errors.has('username')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.username" v-validate="'required|email'"
                     type="text" class="form-control" name="username" value="" placeholder="username or email">
              <span class="error" v-if="errors.has('username')">{{errors.first('username')}}</span>
            </div>

            <div class="field" :class="{error: errors.has('password')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input v-model="formData.password" v-validate="'required'"
                     type="password" class="form-control" name="password" placeholder="password">
              <span class="error" v-if="errors.has('password')">{{errors.first('password')}}</span>
            </div>

            <div class="field" v-show="errorMessage">
              <p>{{errorMessage}}</p>
            </div>


            <div class="input-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="remember" value="1"> Remember me
                </label>
              </div>
            </div>

            <div style="margin-top:10px" class="form-group">
              <!-- Button -->
              <div class="col-sm-12 controls">
                <a v-on:click="onLogin(formData)" class="btn btn-success" :disabled="isLoading == 1">
                  <span v-show="isLoading"><icon name="spinner" pulse></icon></span>
                  Login
                </a>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 control">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                  Don't have an account!
                  <router-link to="signup"> Sign Up Here</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import script from './component'
export default script
</script>
