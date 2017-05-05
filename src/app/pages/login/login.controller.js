class LoginController {
  constructor(UserModel,$state){
	  this.continue = () =>{
		  UserModel.login(this.userName).then(() => {
			  $state.go('chat');
		  });

	  };
	}
}

export default LoginController;
