class UserModel {
	constructor($q, $localStorage) {
		this.$storage = $localStorage;
		this.$q = $q;

		this.userName       = null;

		if(this.$storage.userName){
			this.userName = this.$storage.userName;
		}

		this.userAuthorized = this.userName ? true : false;

	}

	login(userName) {

		this.userAuthorized    = true;
		this.userName          = userName;
		this.$storage.userName = userName;

		return this.$q.when(true);
	}

	logOut() {

		this.userName = null;
		delete this.$storage.userName;
		this.userAuthorized = false;

		return this.$q.when(true);
	}

	isAuthenticated() {
		return this.userAuthorized;
	}

}

export default UserModel;
