<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCandidateStore } from "@/store/candidate";

const candidateStore = useCandidateStore();
const { candidate } = storeToRefs(candidateStore);
const formData = ref({});
const props = defineProps({
	show: Boolean,
	title: String
});

const emit = defineEmits(["close", "save"]);

watch(
	() => props.show,
	(isOpen) => {
		if (isOpen) {
			if (!candidateStore.candidate) {
				candidateStore.fetchCandidate();
			}
			formData.value = { ...candidateStore.candidate };
		}
	}
);

const saveCandidate = () => {
	candidateStore.updateCandidate({ ...formData.value });
	emit("save", { ...formData.value });
	emit("close");
};

</script>
<template>
	<div v-if="show" class="modal-overlay" @click.self="emit('close')">
		<div class="modal">
			<header class="modal-header">
				<h3>{{ title }}</h3>
				<button class="close" @click="emit('close')">&times;</button>
			</header>
			<form @submit.prevent="saveCandidate">
				<ul>
					<li class="form-group">
						<label>Current Organization</label>
						<input v-model="formData.currentOrganization" type="text" />
					</li>

					<li class="form-group">
						<label>Skills (comma separated)</label>
						<input v-model="formData.skills" type="text" />
					</li>

					<li class="form-group">
						<label>Available From</label>
						<input v-model="formData.availableFrom" type="date" />
					</li>

					<li class="form-group">
						<label>Current Salary</label>
						<input v-model="formData.currentSalary" type="number" />
					</li>

					<li class="form-group">
						<label>Notice Period (days)</label>
						<input v-model="formData.noticePeriod" type="number" />
					</li>

					<li class="form-group">
						<label>Full Address</label>
						<textarea v-model="formData.fullAddress"></textarea>
					</li>

					<li class="form-group">
						<label>Resume</label>
						<input v-model="formData.resume" type="text" />
					</li>

					<li class="form-group">
						<label>Total Experience</label>
						<input v-model="formData.totalExperience" type="text" />
					</li>

					<li class="form-group">
						<label>Summary</label>
						<textarea v-model="formData.summary"></textarea>
					</li>

					<li class="form-group">
						<label>Employment Status</label>
						<input v-model="formData.currentEmploymentStatus" type="text" />
					</li>

					<li class="form-group">
						<label>Date of Birth</label>
						<input v-model="formData.dateOfBirth" type="date" value="" />
					</li>

					<li class="form-group">
						<label>Relevant Experience</label>
						<input v-model="formData.relevantExperience" type="text" />
					</li>

					<li class="form-group">
						<label>Salary Expectation</label>
						<input v-model="formData.salaryExpectation" type="number" />
					</li>

					<li class="form-group">
						<label>Status</label>
						<input v-model="formData.status" type="text" />
					</li>

					<li class="form-group">
						<label>Salary Type</label>
						<input v-model="formData.salaryType" type="text" />
					</li>

					<li class="form-group">
						<label>Language Skills</label>
						<input v-model="formData.languageSkills" type="text" />
					</li>
				</ul>

				<button type="submit" class="modal-button">Save</button>
			</form>
		</div>
	</div>
</template>
