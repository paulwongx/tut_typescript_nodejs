import express from "express";
import { config } from "src/config/file";

const app = express();

interface Params {
	a: number;
	b: number;
}

type Subtract = (x: Params) => number;

const subtract: Subtract = x => {
	return x.a - x.b;
};

const add = (a: number, b?: number): number => {
	if (b) {
		return a + b;
	} else {
		return a;
	}
	// @ts-ignore
	// return a + b!;
};

// (req as any).name = 'bob'; escapes the typing
app.get("/", (req: any) => {
	// req.name = "bob";
	add(1);
});

app.listen(3002, () => {
	console.log("config.foo", config.foo);
	// console.log("started 7");
});
