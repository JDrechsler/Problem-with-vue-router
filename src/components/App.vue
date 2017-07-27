<template>
	<div id="app">
		<q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
	
			<q-toolbar slot="header">
				<q-btn flat @click="$refs.layout.toggleLeft()">
					<q-icon name="menu" />
				</q-btn>
				<q-toolbar-title>
					Layout Header
					<span slot="subtitle">Optional subtitle</span>
				</q-toolbar-title>
			</q-toolbar>
	
			<!-- Left Side Panel -->
			<div slot="left">
				<q-list no-border link>
					<q-list-header>Essential Links</q-list-header>
					<q-side-link item to="/">
						<q-item-side icon="home" />
						<q-item-main label="Home" sublabel="quasar-framework.org" />
					</q-side-link>
					<q-side-link item to="/forum">
						<q-item-side icon="record_voice_over" />
						<q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
					</q-side-link>
					<q-side-link item to="/chat">
						<q-item-side icon="chat" />
						<q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
					</q-side-link>
					<q-side-link item to="/Feed">
						<q-item-side icon="rss feed" />
						<q-item-main label="Feed" sublabel="@quasarframework" />
					</q-side-link>
				</q-list>
			</div>
			<!-- sub-routes get injected here: -->
	
			<router-link to="/home">Go to home</router-link>
			<router-link to="/forum">Go to forum</router-link>
			<router-link to="/chat">Go to chat</router-link>
			<router-view></router-view>
			<!-- Footer -->
			<q-toolbar slot="footer">
				<q-toolbar-title>
					Layout Footer
				</q-toolbar-title>
			</q-toolbar>
		</q-layout>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'App',
	data() {
		return {
			msg: 'Test'
		}
	},
	mounted() {
		console.log('App mounted')
	}
})
</script>

<style></style>
