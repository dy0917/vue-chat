<template>
  <li class="clearfix" :class="[isLeft ? 'left' : 'right']">
                    	<span class="chat-img"  :class="[isLeft ? 'pull-left' : 'pull-right']">
                        <img :src="LetterAvatar" alt="User Avatar">
                    	</span>
    <div class="chat-body clearfix">
      <div class="header">
        <strong class="primary-font">{{name}}</strong>
        <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 12 mins ago</small>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </li>
</template>
<script>
import script from './component'
export default script
</script>
