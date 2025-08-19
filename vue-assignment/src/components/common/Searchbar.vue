<template>
	<div class="header-search__bar">
		<button class="header-search__bar-icon"><i class='bx  bx-search'></i></button>
		<input type="text" placeholder="Search Pipedrive" />
	</div>
</template>

<style lang="scss">
.search-bar {
	background-color: #F8F9FA;
	padding: 10px;
	width: 360px;
	display: flex;
	align-items: center;
	gap: 10px;

	&-icon {
		line-height: 1;
		font-size: 24px;
	}

	input {
		width: 100%;
		font-size: 14px;
		line-height: 20px;
		font-weight: 400;
	}
}
</style>