let hello = "Hello world";

// number | string | boolean | null | undefined

let age: number = 10;
let weight: number = 90.5;
let weight2: number = -90.5;
let weight3: number = NaN;
let weight4: number = Infinity;

// String

let firstName: string = "Mindia";
let firstName2: string = "Mindia";
let firstName3: string = `Mindia`;

// Boolean

let isTrue: boolean = true;
let isFalse: boolean = false;

// Null Undefined

let empty: null = null;
let empty2: undefined = undefined;

// any

let x: any = "hello World";
x = 15;

// firstName.includes("Hello");

// Functions

function add(a: number, b: number): number {
  return a + b;
}

function add2(a: number, b: number): void {
  console.log(a + b);
}

// Object

const user1: {
  name: string;
  age: number;
  isTrue: boolean;
} = {
  name: "Mindia",
  age: 99,
  isTrue: true,
};

const user2: {
  name: string;
  age: number;
  isTrue: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Mindia",
  age: 99,
  isTrue: true,
  address: {
    city: "Tbilisi",
    country: "Georgia",
  },
};

// Type

type User1 = {
  name: string;
  age: number;
  isTrue: boolean;
  address: {
    city: string;
    country: string;
  };
};

const user3: User1 = {
  name: "Mindia",
  age: 99,
  isTrue: true,
  address: {
    city: "Tbilisi",
    country: "Georgia",
  },
};

// InterFace

interface IUser4 {
  name: string;
  age: number;
  isTrue: boolean;
  address: {
    city: string;
    country: string;
  };
}

// Array

const user10: (number | string)[] = ["erti", "ori", "sami", 1, 2, 3];

const user11: number[] = [1, 2, 3];

const user12: Array<string> = ["erti", "ori", "sami"];

// OR

type stringOrNumber = string | number;

let union: stringOrNumber = 5;
let union2: stringOrNumber = "5";

if (typeof union2 === "string") {
  console.log(union2.toUpperCase());
}
type myUser = {
  name: string;
  age: number;
  phone?: string;
  email?: string;
};

const user19: myUser = {
  name: "Mindia",
  age: 21,
  phone: "555555555",
  email: "MiaKhalifa@gmail.com",
};

const user20 = {
  name: "Giorgi",
  age: 18,
};

// OR | &

type MyUser = {
  name: string;
  age: number;
};

type Car = {
  name: string;
  age: number;
};

const user21: MyUser = {
  name: "Mindia",
  age: 12,
};

function renderCarUser(user: Car & MyUser) {}

type NewType = Car & MyUser;

// ! Literal Types

type Direction = "Left" | "Right" | "Up" | "Down";

const myDirection: Direction = "Up";

function getStatus(status: "Success" | "Error" | "Pending") {
  console.log(status);
}

// @ts-ignore
const num20: number = "Hello world";

//// type guard

// unknown

const num99 = "Hello World" as unknown as number;

// ! enum - obj

const enum user100 {
  name = "Mindia",
  age = 30,
}

if (user100.name === "Mindia") {
  console.log("Hello Mindia");
}

type MyInfoObj = {
  name: string;
  getMoreInfo: () => string;
};

const myObj: MyInfoObj[] = [
  {
    name: "Mindia",
    getMoreInfo: () => {
      return "More Info";
    },
  },
];
