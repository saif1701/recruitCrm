<script setup>
import Icons from '../../common/Icons.vue';
import User from './user.vue';
const actionItems = [
	{ icon: "bx-plus", divider: true },
	{ icon: "bx-gift", divider: false },
	{ icon: "bx-envelope", divider: false },
	{ icon: "bx-bell", divider: false },
]
</script>

<template>
	<div class="header-action__wrapper">
		<template v-for="(item, index) in actionItems" :key="index">
			<button :class="['rounded border', index === 0 ? 'blue-bg white' : '']">
				<Icons :name="item.icon" />
			</button>
			<!-- separator comes after button if divider true -->
			<div v-if="item.divider" class="separator-line"></div>
		</template>

		<User />
	</div>
</template>