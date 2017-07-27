<template>
	<section>
		<div class="layout-padding">
			<p v-for="n in 4" class="par-text">{{loremipsum}}</p>
			<q-parallax src="http://www.itworldcanada.com/wp-content/uploads/2017/05/cp1_0111.jpg">
				<!-- Dom elements to display while loading image -->
				<div slot="loading">Loading...</div>
			</q-parallax>
			<p v-for="n in 7" class="par-text">{{loremipsum}}</p>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Hello',
	data() {
		return {
			loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	}
})
</script>

<style>
.view-parallax .par-text {
	margin: 5rem 0;
}
</style>