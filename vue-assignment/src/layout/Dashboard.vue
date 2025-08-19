<script setup>
import Header from '../components/header/Header.vue';
import Menu from '../components/menu/Menu.vue';
import Breadcrumbs from '../components/header/pageheader/Breadcrumbs.vue';
import HeaderActions from '../components/header/pageheader/HeaderActions.vue';
import Profile from '../components/candidate/Profile.vue';
import ProfileActions from '../components/candidate/ProfileActions.vue';
import EmailPhoneInfo from '../components/candidate/EmailPhoneInfo.vue';
import CandidateDetails from '../components/candidate/CandidateDetails.vue';
import Tabs from '../components/tabs/Tabs.vue';
import SideBar from '../components/sidebar/SideBar.vue';
</script>

<template>
	<main>

		<div class="menu-wrapper">
			<Menu />
		</div>
		<div class="content-wrapper">
			<Header />
			<div class="content-wrapper-block">
				<div class="content-wrapper__left">
					<div class="content-wrapper__page-header">
						<Breadcrumbs />
						<HeaderActions />
					</div>
					<div class="candidate-wrappper">
						<div class="candidate-wrappper__info">
							<Profile />
							<ProfileActions />
						</div>
						<EmailPhoneInfo />
					</div>
					<div class="candidate-details">
						<CandidateDetails />
					</div>
					<Tabs />
				</div>
				<div class="content-wrapper__right">
					<SideBar />
				</div>
			</div>
		</div>
	</main>
</template>