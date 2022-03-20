import 'reflect-metadata';
import express, { Express } from 'express';
import { Server } from 'http';
import { injectable } from 'inversify';
import { json } from 'body-parser';
import fs from 'fs';
import { logger } from './decorator';
const { characters, change } = require('./test.ts');

type Person = {
	name: string;
	age: number;
};

type s = Readonly<Person>;

type Required<T> = {
	readonly [P in keyof T]: T[P];
};

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};

type x = MyPick<Person, 'age'>;

@injectable()
@logger('Hello')
export class App {
	app: Express;
	server: Server = new Server();
	port: number;
	newData: Array<{ name: string; isReady: boolean; age: number }>;
	constructor() {
		this.app = express();
		this.port = 8000;
		this.newData = [
			{ name: 'Evgeny', isReady: false, age: 18 },
			{ name: 'Petr', isReady: true, age: 21 },
			{ name: 'Olga', isReady: true, age: 35 },
		];
	}
	useMiddleWare(): void {
		this.app.use(json());
	}

	getIsReady(): Array<string> | [] {
		const result = this.newData.reduce((acc: any, elem) => {
			if (elem.isReady) {
				acc.push(elem.name);
			}
			return acc;
		}, []);
		return result.join(',');
	}

	readFile(): void {
		const data = fs.readFileSync('./src/data.txt');
		console.log(data.toString());
		change();
		console.log(exports);
	}

	public async init(): Promise<void> {
		this.useMiddleWare();
		this.server = this.app.listen(this.port);
		//this.readFile();
		//this.loggerService.log('server ready');
	}
}
