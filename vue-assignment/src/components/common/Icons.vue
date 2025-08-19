<template>
	<i :class="['bx', name, className]"></i>
</template>

<script setup>
const props = defineProps({
	name: { type: String, required: true }, // e.g. "bx-user" or "bxs-dashboard"
	className: { type: String },
	divider: { type: Boolean }
})
</script>
