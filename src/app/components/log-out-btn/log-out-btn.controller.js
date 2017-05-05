class LogOutBtnController {
  constructor(UserModel,$state){
	  this.logOut = () => {
		  UserModel.logOut().then(()=>{
			  $state.go('login');
		  });
	  };
	}
}

export default LogOutBtnController;
