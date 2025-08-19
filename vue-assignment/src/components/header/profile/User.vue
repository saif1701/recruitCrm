<script setup>
import UserImg from '../../../assets/images/user.png'
</script>

<template>
	<div class="header-user__wrapper">
		<figure class="img-wrapper">
			<img :src="UserImg" alt="">
		</figure>
		<div class="header-user__content">
			<p class="header-user__content-name">Phyllis Yang</p>
			<p class="header-user__content-address">Silicon Links Inc</p>
		</div>
	</div>
</template>