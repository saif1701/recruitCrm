<script setup>
import Icons from './Icons.vue';
import Clock from '../../icons/Clock.vue';
import Buttons from './Buttons.vue';
import { ref } from 'vue';
const props = defineProps({
	content: Object,
	required: true
})
const isAssigned = ref(props.content.isAssigned ?? false)
function handleChange(e) {
	isAssigned.value = e.target.checked
}
</script>

<template>
	<div class="tab-card">
		<div class="tab-card__job--wrap">
			<figure class="img-wrapper">
				<img :src="content.recruitImg" alt="">
			</figure>
			<div class="job__wrap-title">
				<p>{{ content.jobTitle }}</p>
				<p>{{ content.company }}</p>
			</div>
		</div>
		<div class="tab-card__recruiter">
			<span>
				<Clock /> &nbsp; {{ content.name }}
			</span>
			<span>
				<Icons name="bx-user-circle" /> &nbsp; {{ content.addedDate }}
			</span>
		</div>
		<div class="tab-card__tag">
			{{ isAssigned ? 'Assigned' : 'Unassigned' }}
		</div>
		<Buttons className="box-shadow black">View Files</Buttons>
		<div class="tab-card__toggleSwitch">
			<label :class="['switch', isAssigned ? 'assigned' : 'unassigned']">
				<input type="checkbox" @change="handleChange" />
				<span class="slider"></span>
			</label>
		</div>
	</div>
</template>