// boolean (true | false)
let isOpen: boolean;
isOpen = true;

// string ('foo' | "foo" | `foo`)
let message: string;
//message = "foo";
message = `foo ${isOpen}`;

// number (int | float | hex ! binary)
let total: number;
total = 100;

// array (type[] | Array<type>)
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
  red = "#f00",
  green = "#0f0",
  blue = "#00f",
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = {
  key: "fi",
};
