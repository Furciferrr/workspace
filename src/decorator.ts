export function logger(data: string) {
	return function <T extends FunctionConstructor>(target: T): void {
		console.log(target, data);
	};
}

type FunctionConstructor = { new (...args: any[]) };
