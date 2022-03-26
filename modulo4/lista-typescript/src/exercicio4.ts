enum Setores {
  FINANCEIRO = "financeiro",
  MARKETING = "marketing",
  VENDAS = "vendas",
}

type funcionario = {
  nome: string;
  salário: number;
  setor: Setores;
  presencial: boolean;
};

const funcionarios = [
    { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: Setores.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: Setores.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: Setores.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: Setores.MARKETING, presencial: true },
  ];

const customFilter = (array: funcionario[]): funcionario[] => {
    const selection = array.filter((item)=>{
        return item.setor === Setores.MARKETING && item.presencial === true
    });

    return selection
}

//por razões desconhecidas a declaração da chave 'salário' é impressa no console como string ('salário': 2500)