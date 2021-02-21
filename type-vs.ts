// Type Alias

// definição

type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection

type GameCollectionT = Game & DLCT;

// implements

/*class CreateGameT implements GameCollection {}*/

// declarar função

type getSimilarsT = (title: string) => void;

// ====================== Diferenças ======================= //

// permite declarar tipos primitivos

type IDT = string | number;

// pode declarar tuplas normalmente

type TupleT = [number, number];

[1, 2] as TupleT;

// apenas uma declaração por escopo

/*type JQueryT = { a: string };
type JQueryT = { b: string };*/

// mais recomendado na maioria das vezes

// ter consistência
