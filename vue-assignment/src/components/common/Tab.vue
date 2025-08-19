<script setup>
defineProps({
	active: {
		type: String,
		default: ""
	}
})
</script>

<template>
	<p :class="[active === true ? 'tab-active' : '']">
		<slot />
	</p>
</template>