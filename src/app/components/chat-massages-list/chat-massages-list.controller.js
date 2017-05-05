class ChatMassagesListController {
  constructor(ChatModel,UserModel){
	  this.UserModel = UserModel;
	  this.massagesList = ChatModel.list;
	}
}

export default ChatMassagesListController;
