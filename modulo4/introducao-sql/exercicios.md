##Exercício 1
- Letra A
VARCHAR(n) = uma string com no máximo n carateres.
NOT NULL = o valor da referida chave não pode ser nulo.
DATE = o valor terá o formato de data (aaaa/mm/dd).

- Letra B
SHOW DATABASES = mostra todos os DB.
SHOW TABLES = mostra todas as tabelas.

- Letra C
Mostra informações sobre cada elemento da tabela.

##Exercício 2
- Letra A
> INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

- Letra B
Entrada dupliada na key "PRIMARY". Acontece quando repetimos elementos que não podem ser repetidos.

- Letra C
Quando passamos especificações dentro do INSERT devemos enviar somente as chaves especificadas.
> INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

- Letra D
Se uma chave está marcada como NOT NULL ela deve ser enviada.
> INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Gabriel Braga Nunes",
  400000,
  "1982-04-18", 
  "male"
);

- Letra E
Date deve ser passado como string.
> INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

##Exercício 3
- Letra A
> SELECT * FROM Actor WHERE gender = "female";

- Letra B
> SELECT salary FROM Actor WHERE name = "Tony Ramos";

- Letra C
> SELECT * FROM Actor WHERE gender = "invalid";

Não retorna nada.

- Letra D
> SELECT id, name, salary FROM Actor WHERE salary <= 500000;

- Letra E
> SELECT id, name from Actor WHERE id = "002";

A coluna "nome" não existe.

##Exercício 4
- Letra A
A query retorna todas as infos de usuários cujo nome começa com A ou J e ganham mais de 30000.

- Letra B
> SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

- Letra C
> SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%" ;

- Letra D
> SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

##Exercício 5
- Letra A
> CREATE TABLE Movies (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  synopsis TEXT NOT NULL,
  date DATE NOT NULL,
  score FLOAT NOT NULL
);

Cria uma tabela com as colunas id, name, synopsis, date e score.

##Exercício 6
- Letra A
> SELECT id, name, score FROM Movies WHERE id = 001;

- Letra B
> SELECT * FROM `Movies` WHERE name = "Marighella";

- Letra C
> SELECT id, name, synopsis FROM Movies WHERE score >= 7;

##Exercício 7
- Letra A
> SELECT * FROM Movies WHERE name LIKE "%vida%";

- Letra B
> SELECT * FROM Movies WHERE name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";

- Letra C
> SELECT * FROM Movies WHERE date < "2022-04-04";

- Letra D
> SELECT * FROM Movies WHERE date < "2022-04-04" AND (name LIKE "%TERMO DE BUSCA%" OR name LIKE "%TERMO DE BUSCA%")AND score > 7;


