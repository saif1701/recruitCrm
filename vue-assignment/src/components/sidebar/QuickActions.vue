<script setup>
import Icons from '../common/Icons.vue';
const QuickIcons = [
	{ icon: "bxs-dashboard" },
	{ icon: "bx-user" },
	{ icon: "bx-buildings" },
	{ icon: "bx-calendar-event" },
]
</script>

<template>
	<div class="quick-actions__wrapper">
		<button v-for="(item, index) in QuickIcons" :key="index" :class="['rounded border blue-light']">
			<Icons :name="item.icon" />
		</button>
	</div>
</template>