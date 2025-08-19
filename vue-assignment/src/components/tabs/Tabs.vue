<script setup>
import Tab from '../common/Tab.vue';
import Buttons from '../common/Buttons.vue';
import TabCard from '../common/TabCard.vue';
import RecruitImg from '@/assets/images/recruiter.png'
const tabs = [
	{ label: "All Details" },
	{ label: "Assigned Jobs", isActive: true },
	{ label: "Related Emails" },
	{ label: "Candidate Questions" },
	{ label: "Hotlists" },
	{ label: "Related Deals" },
	{ label: "Contact(s) Pitched" },
];
const tabsContent = [
	{
		recruitImg: RecruitImg,
		jobTitle: "Senior Product Manager",
		company: 'Recruit CRM',
		name: 'William Sample',
		addedDate: "Jul 10, 2023",
		isAssigned: true,
	},
	{
		recruitImg: RecruitImg,
		jobTitle: "Senior Product Manager",
		company: 'Recruit CRM',
		name: 'William Sample',
		addedDate: "Jul 10, 2023",
		isAssigned: true,
	},
	{
		recruitImg: RecruitImg,
		jobTitle: "Senior Product Manager",
		company: 'Recruit CRM',
		name: 'William Sample',
		addedDate: "Jul 10, 2023",
		isAssigned: false,
	}
]
</script>

<template>
	<div class="tab-container">
		<Tab v-for="tab in tabs" :key="tab" :active="tab.isActive">{{ tab.label }}</Tab>
	</div>
	<div class="assigned-job__wrapper">
		<div class="assigned-job__content">
			<p>Assigned Job to William Sample</p>
			<div class="assigned-job__actions">
				<Buttons className="blue">Assign To Job</Buttons>
				<Buttons>View All Assigned Jobs</Buttons>
			</div>
		</div>
		<div class="tab-card__wrapper">
			<TabCard v-for="(item, index) in tabsContent" :key="index" :content="item" />
		</div>
	</div>
</template>