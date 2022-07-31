// // Como podemos melhorar o esse código usando TS?
enum Profissao {
  Atriz,
  Padeiro,
}
interface IPessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 67,
  profissao: Profissao.Atriz,
};

let pessoa2: IPessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

let pessoa3: IPessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

let pessoa4: IPessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

console.log(pessoa1, pessoa2, pessoa3, pessoa4);
