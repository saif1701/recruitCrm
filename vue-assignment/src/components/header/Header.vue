<script setup>
import Searchbar from '../common/Searchbar.vue';
import Logo from '../../assets/images/logo.svg';
import Action from './profile/Action.vue';
</script>

<template>
	<header class="header-top__bar">

		<Searchbar />
		<a href="/" class="header-logo">
			<img :src="Logo" alt="">
		</a>
		<Action />
	</header>
</template>