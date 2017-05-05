import angular from 'angular';

import ChatMassageFromComponent from "./chat-massage-form/chat-massage-form.component";
import ChatMassagesListComponent from "./chat-massages-list/chat-massages-list.component";
import LogOutBtnComponent from "./log-out-btn/log-out-btn.component";

export const ComponentsModule = 'components';

angular
	.module(ComponentsModule, [])
	.component('chatMassageFrom',ChatMassageFromComponent)
	.component('chatMassagesList',ChatMassagesListComponent)
	.component('logOutBtn',LogOutBtnComponent);