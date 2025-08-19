<script setup>
import Icons from '../common/Icons.vue';
import Clock from '../../icons/Clock.vue';
const notesList = [{
	desc: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
	name: 'John Doe',
}, {
	desc: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
	name: 'John Doe',
}, {
	desc: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
	name: 'John Doe',
}]
</script>

<template>
	<div class="sidebar-tab__card">
		<div class="sidebar-tab__card-list" v-for="(notes, index) in notesList" :key="index">
			<div class="sidebar-tab__card-top_bar">
				<span>
					<Icons name="bx-note" />&nbsp;Notes
				</span>
				<span class="sidebar-tab__card-tag">Todo</span>
			</div>
			<p>{{ notes.desc }}</p>
			<p class="sidebar-tab__card-assc">1 Association(s)</p>
			<div class="sidebar-tab__card-bottom_bar">
				<span>
					<Icons name="bx-user-circle" />&nbsp;{{ notes.name }}
				</span>
				<span>
					<Clock />&nbsp;Jul 12, 2023, 11:54 am
				</span>
			</div>
		</div>
	</div>
</template>