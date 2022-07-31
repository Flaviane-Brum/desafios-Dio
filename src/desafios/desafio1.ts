// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 10;
// employee.name = "John";
interface IEmployes {
  name: string;
  code: number;
}
let employee = {
  name: "Fulano",
  code: 10,
};
console.log(employee);
