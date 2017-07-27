<template>
	<q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
		<div class="layout-padding">
			<h4>Home-Component</h4>
		</div>
	</q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Home',
	data() {
		return {
		}
	},
	methods: {
		sayHello() {
			console.log('Hello from Home.vue')
		}
	},
	mounted() {
		this.sayHello()
	}
})
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
