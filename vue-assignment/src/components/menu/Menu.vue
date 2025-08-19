<script setup>
import Icons from '../common/Icons.vue';
const menuIcons = [
	{ icon: "bxs-dashboard", divider: false },
	{ icon: "bx-user", divider: false },
	{ icon: "bx-buildings", divider: false },
	{ icon: "bx-user-pin", divider: false },
	{ icon: "bx-briefcase", divider: false },
	{ icon: "bx-envelope", divider: false },
	{ icon: "bx-calendar-event", divider: true },
	{ icon: "bx-dollar-circle", divider: false },
	{ icon: "bx-time", divider: false },
	{ icon: "bx-credit-card", divider: false },
]

</script>

<template>
	<ul class="menu-wrapper__block">
		<template v-for="(item, index) in menuIcons" :key="index">
			<li>
				<Icons :name="item.icon" class="white" />
			</li>
			<div v-if="item.divider" class="separator-line vertical"></div>
		</template>
	</ul>
</template>