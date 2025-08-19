<script setup>
defineProps({
	className: {
		type: String
	}
})
</script>

<template>
	<button :class="['btn rectangle border', className]">
		<slot />
	</button>
</template>