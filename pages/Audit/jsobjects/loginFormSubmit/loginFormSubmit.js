export default {
	async loginFormSubmit() {
		if (!!appsmith.store.sid) {
			return logoutUser.logoutUser()
		}
		if ( loginForm.formData.username === "guest" || !loginForm.formData.username ) {
			const response = await queryGuest.run();
			if (response && response.sid) {
				await storeValue('sid', response.sid);
				await storeValue('username', response.username);
				loginForm.formData.password = ""
				return response;
			}
		} else {
			const response = await queryLogin.run();
			if (response && response.sid) {
				await storeValue('sid', response.sid);
				await storeValue('username', response.username);
				loginForm.formData.password = ""
				return response;
			}
		}
	}
}