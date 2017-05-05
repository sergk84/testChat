class ChatMassagesFromController {
  constructor(UserModel,ChatModel){
	  this.UserModel = UserModel;
	  this.ChatModel = ChatModel;

	  this.sendMessage = () => {
		  ChatModel.sendMassage(this.massage).then(()=>{
			  this.massage = null;
		  });
	  };
	}
	$onInit() {
		this.ChatModel.updateData = true;
		this.ChatModel.randFunc();
	}
	$onDestroy() {
		this.ChatModel.updateData = false;
	}
}

export default ChatMassagesFromController;
