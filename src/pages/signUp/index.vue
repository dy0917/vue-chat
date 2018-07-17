<template>
  <div class="container">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
        <div class="panel-heading">
          <div class="panel-title">Sign Up</div>
        </div>

        <div style="padding-top:30px" class="panel-body" >

          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

          <form class="form-horizontal" role="form">

            <div class="field" style="margin-bottom: 25px" :class="{error: errors.has('username')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.username" v-validate="'required|email'"
                     type="text" class="form-control" name="username" value="" placeholder="username or email">
              <span class="error" v-if="errors.has('username')">{{errors.first('username')}}</span>
            </div>

            <div class="field" style="margin-bottom: 25px" :class="{error: errors.has('firstName')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.firstName" v-validate="'required'"
                     type="text" class="form-control" name="firstName" value="" placeholder="first name">
              <span class="error" v-if="errors.has('firstName')">{{errors.first('firstName')}}</span>
            </div>

            <div class="field" style="margin-bottom: 25px" :class="{error: errors.has('lastName')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.lastName" v-validate="'required'"
                     type="text" class="form-control" name="lastName" placeholder="Last name">
              <span class="error" v-if="errors.has('lastName')">{{errors.first('lastName')}}</span>
            </div>

            <div class="field" style="margin-bottom: 25px" :class="{error: errors.has('password')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.password" v-validate="'required'"
                     type="password" class="form-control" name="password" placeholder="Password">
              <span class="error" v-if="errors.has('password')">{{errors.first('password')}}</span>
            </div>

            <div class="field" style="margin-bottom: 25px" :class="{error: errors.has('passwordRepeat')}">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input v-model="formData.passwordRepeat" v-validate="'required'"
                     type="password" class="form-control"  name="passwordRepeat" placeholder="Repeat password">
              <span class="error" v-if="errors.has('passwordRepeat')">{{errors.first('passwordRepeat')}}</span>
            </div>
            <div class="field" v-show="errorMessage">
              <p>{{errorMessage}}</p>
            </div>
            <div style="margin-top:10px" class="form-group">
              <div class="col-sm-12 controls">
                <a v-on:click="onSignUp(formData)" class="btn btn-success"><span v-show="isLoading"><icon name="spinner" pulse></icon></span>Sign up </a>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 control">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                  Have an account!
                  <router-link to="/"> Sign In</router-link>
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
