export default {
	async logoutUser() {
		if (!appsmith.store.sid) {
			return "SID not in storage"
		}
		try {
			const logoutResponse = await queryLogout.run();
			if (logoutResponse) {
				await removeValue('sid');
				await removeValue('username');
			}
			return logoutResponse
		} catch (error) {
			await removeValue('sid');
			await removeValue('username');
			return error
		}
	}
}