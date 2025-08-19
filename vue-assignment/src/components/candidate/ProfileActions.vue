<script setup>
import { ref } from 'vue';
import Buttons from '../common/Buttons.vue';
import Icons from '../common/Icons.vue';
import Modal from '../modal/Modal.vue';
const actionItems = [
	{ icon: "bxs-star", action: "star" },
	{ icon: "bxs-hot", action: "hot" },
	{ icon: "bxs-pencil", action: "edit" },
	{ icon: "bx-dots-vertical", action: "menu" }

]
const showModal = ref(false);
const handleAction = (action) => {
	if (action === 'edit') {
		showModal.value = true;
	}
};
</script>
<template>
	<div class="candidate-wrappper__profile-action--wrap">
		<Buttons className="red">Contact Linked</Buttons>
		<Buttons v-for="(item, index) in actionItems" :key="index" @click="handleAction(item.action)">
			<Icons :name="item.icon" />
		</Buttons>
		<Modal :show="showModal" title="Edit Candidate" @close="showModal = false" />
	</div>
</template>