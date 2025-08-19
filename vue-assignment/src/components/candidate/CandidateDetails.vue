<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCandidateStore } from "@/store/candidate";

const candidateStore = useCandidateStore();
const { candidate } = storeToRefs(candidateStore);

onMounted(() => {
	candidateStore.fetchCandidate();
});

// helper: format camelCase → Proper Label
const formatLabel = (key) => {
	return key
		.replace(/([A-Z])/g, " $1")   // add space before capital letters
		.replace(/^./, str => str.toUpperCase()); // capitalize first letter
};
const formatDate = (dateStr) => {
	if (!dateStr) return "";
	const d = new Date(dateStr);
	return isNaN(d) ? dateStr : d.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "2-digit"
	});
};
</script>

<template>
	<div v-if="candidate">
		<ul>
			<li v-for="(value, key) in candidate" :key="key">
				<strong>{{ formatLabel(key) }}:</strong>
				<span>
					<!-- Handle arrays like skills -->
					<template v-if="Array.isArray(value)">
						{{ value.join(", ") }}
					</template>
					<template v-else-if="['dateOfBirth', 'availableFrom'].includes(key)">
						{{ formatDate(value) }}
					</template>
					<template v-else>
						{{ value }}
					</template>
				</span>
			</li>
		</ul>
	</div>
</template>
