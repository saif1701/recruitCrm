<script setup>
import Buttons from '../../common/Buttons.vue';
</script>

<template>
	<div class="header-actions">
		<Buttons className="white-bg box-shadow">Request Profile Update</Buttons>
		<Buttons className="white-bg box-shadow">Previous</Buttons>
		<Buttons className="white-bg box-shadow">Next</Buttons>
	</div>
</template>

<style scoped lang="scss">
.header-actions {
	display: flex;
	gap: 10px;

	@media screen and (max-width:450px) {
		flex-wrap: wrap;
	}
}
</style>