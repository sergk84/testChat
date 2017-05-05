import angular from 'angular';

import UserModel from './models/user.model';
import ChatModel from './models/chat.model';

export const CommonModule = 'common';

angular
	.module(CommonModule, [])
	.service('UserModel',UserModel)
	.service('ChatModel',ChatModel);