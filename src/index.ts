class Hello {
	private message: string;
	constructor(message: string) {
		this.message = message;
	}
	sayHi(): void {
		console.log(this.message);
	}
}

const instance = new Hello('how are you');

instance.sayHi();
