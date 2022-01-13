import 'reflect-metadata';
import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import { json } from 'body-parser';
import { TYPES } from './types';

@injectable()
export class App {
	app: Express;
	server: Server = new Server();
	port: number;
	constructor() {
		this.app = express();
		this.port = 8000;
	}
	useMiddleWare(): void {
		this.app.use(json());
	}
	public async init(): Promise<void> {
		this.useMiddleWare();
		this.server = this.app.listen(this.port);
		//this.loggerService.log('server ready');
	}
}
