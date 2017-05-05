import angular from 'angular';
import LoginComponent from './login/login.component';
import ChatComponent from './chat/chat.component';


export const PagesModule = 'pages';
angular
	.module(PagesModule, [])
	.component('login', LoginComponent)
	.component('chat', ChatComponent);
