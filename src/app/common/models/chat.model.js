class ChatModel {
	constructor($q,UserModel,ngAudio) {
		this.$q = $q;
		this.UserModel = UserModel;
		this.updateData = false;

		this.sound = ngAudio.load("sounds/icq.wav");

		this.list = [
			{
				userName : 'Jon',
				message : 'Massage 1',
				date : 1493646446000
			},
			{
				userName : 'Jim',
				message : 'Massage 2',
				date : 1493846446000
			},
			{
				userName : 'Max',
				message : 'Massage 3',
				date : 1493946446000
			}
		];

		
	}

	randFunc(){
		if(this.updateData) {
			setTimeout(() => {
				this.getMassages();
				this.randFunc();
			}, Math.floor((Math.random() * 10000) + 1));
		}
	}

	getMassages(){

		this.$q.when(true).then(()=>{
			let obj = {
				userName : 'Bot',
				message : 'Test :)',
				date : Date.now() - 8000
			};
			this.addMassage(obj).then(()=>{
				this.sound.play();


			})
		});



	};

	addMassage(obj){
		this.list.push(obj);
		return this.$q.when(true);
	};

	sendMassage(massage) {
		let obj = {
			userName : this.UserModel.userName,
			message : massage,
			date : Date.now()
		};
		this.addMassage(obj);
		return this.$q.when(true);
	}
}

export default ChatModel;
