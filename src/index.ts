import { TYPES } from './types';
import { Container } from 'inversify';
import 'reflect-metadata';
import { Meta } from './metadata';
import { App } from './app';

const appContainer = new Container();
appContainer.bind(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();
