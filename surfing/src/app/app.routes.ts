import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NewsFeed } from './news-feed/news-feed';
import { Registration } from './Registration/registration';
import { Authorization } from './Authorization/authorization';
import { PasswordReset } from './Password-reset/password-reset';

export const routes: Routes = [
    {path: '', component: NewsFeed}, //лента новостей 
    {path: '/Registration', component: Registration}, //регистрация 
    {path: '/Authorization', component: Authorization}, //авторизация
    {path: '/Password-reset', component: PasswordReset} //сброс пароля 
];

