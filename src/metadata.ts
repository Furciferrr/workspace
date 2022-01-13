import 'reflect-metadata';

function Injectable(key: string) {
	return (target: Function): void => {
		Reflect.defineMetadata(key, 3.14, target);
	};
}

@Injectable('Meta')
export class Meta {}
