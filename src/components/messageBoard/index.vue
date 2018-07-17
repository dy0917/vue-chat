
<template>
  <div class="col-md-8 bg-white " v-if="selectedUser">
    <div class="chat-message input-group" :class="{error: errors.has('message')}">
        <input v-model="formData.message" v-validate="'required'"
             class="form-control" name="message" placeholder="Type your message here">
      <span class="input-group-btn">
            			<button class="btn btn-success no-rounded" type="button"v-on:click="onSend(formData.message)">Send</button>
              </span>
    </div><!-- /input-group -->
    <div>
      <ul class="chat">
        <messageItem v-for="(message, index) in messages" :message="message" :key="index" :index="index"></messageItem>
        <li class="left clearfix">
                    	<span class="chat-img pull-left">
                    		<img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">John Doe</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li class="right clearfix">
                    	<span class="chat-img pull-right">
                    		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">Sarah</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
            </p>
          </div>
        </li>
        <li class="left clearfix">
                        <span class="chat-img pull-left">
                    		<img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">John Doe</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li class="right clearfix">
                        <span class="chat-img pull-right">
                    		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">Sarah</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
            </p>
          </div>
        </li>
        <li class="left clearfix">
                        <span class="chat-img pull-left">
                    		<img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">John Doe</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </li>
        <li class="right clearfix">
                        <span class="chat-img pull-right">
                    		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">Sarah</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
            </p>
          </div>
        </li>
        <li class="right clearfix">
                        <span class="chat-img pull-right">
                    		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                    	</span>
          <div class="chat-body clearfix">
            <div class="header">
              <strong class="primary-font">Sarah</strong>
              <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
            </p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import script from './component'
export default script
</script>
