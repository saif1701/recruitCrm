<script setup>
import QuickActions from './QuickActions.vue';
import Tab from '../common/Tab.vue';
import TabCards from './TabCards.vue';
const tabs = [
	{ label: "All" },
	{ label: "Notes & Calls", isActive: true },
	{ label: "Tasks" },
	{ label: "Meeting" },
	{ label: "Files" },
];
</script>

<template>
	<aside class="sidebar">
		<QuickActions />
		<div class="tab-container">
			<Tab v-for="tab in tabs" :key="tab" :active="tab.isActive">{{ tab.label }}</Tab>
		</div>
		<div class="sidebar-tab__content">
			<TabCards />
		</div>
	</aside>
</template>