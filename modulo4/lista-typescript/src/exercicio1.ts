const presentMyself = (name: string, birth: string): string => {
  const numberBirth: string[] = birth.split("/");
  return `Olá, me chamo ${name} e nasci no dia ${numberBirth[0]} do mês ${numberBirth[1]} do ano de ${numberBirth[2]} `;
};
