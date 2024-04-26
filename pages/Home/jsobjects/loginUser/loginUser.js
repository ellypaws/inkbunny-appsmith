export default {
	async guestLogin (string username) {
		if (username === "guest") {
			try {
				const queryGuestResponse = await queryGuest.run();
				if (queryGuestResponse && queryGuestResponse.sid) {
					await storeValue('sid', queryGuestResponse.sid);
					await storeValue('username', queryGuestResponse.username);
					return queryGuestResponse
				}
			} catch (error) {
				console.error("Failed to run guest query or store sid:", error);
				return error
			}
		} else {
			try {
				const queryLoginResponse = await queryLogin.run();
					if (queryLoginResponse && queryLoginResponse.sid) {
					await removeValue('sid');
					await removeValue('username');
					return queryLoginResponse
				}
			} catch (error) {
				console.error("Failed to run guest query or store sid:", error);
				return error
			}
		}
	}
}