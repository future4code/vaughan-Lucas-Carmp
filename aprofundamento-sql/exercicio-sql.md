

##Exercício 1
- Letra A
Altera a tabela "Actor" excluindo a coluna "salary".
​
- Letra B
Altera o nome da coluna "gender" para "sex", com sua propriedade sendo VARCHAR(6).
​
- Letra C
Mantém a coluna se chamando gender, mas agora ela aceita 255 caracteres.
​
​
##Exercício 2
- Letra A
 >UPDATE Actor
SET 
name = "Gabriel Braga Nunes",
birth_date = "2020-02-10"
WHERE id = "003";
​
- Letra B
>UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
​
    >UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
​
- Letra C
>UPDATE Actor
SET 
name = "Carol Castro",
birth_date = "1985-06-22",
salary = 652000,
gender = "female"
WHERE id = "005";
​
- Letra D
A coluna não foi encontrada.
​
##Exercício 3
- Letra A
>DELETE FROM Actor WHERE name = "Fernanda Montenegro";
​
- Letra B
>DELETE FROM Actor WHERE gender = "male" AND salary  > 1000000;
​
​
##Exercício 4
- Letra A
> SELECT MAX(salary) FROM Actor;
​
- Letra B
Exercício 1
Letra A
Altera a tabela “Actor” excluindo a coluna “salary”.

Letra B
Altera o nome da coluna “gender” para “sex”, com sua propriedade sendo VARCHAR(6).

Letra C
Mantém a coluna se chamando gender, mas agora ela aceita 255 caracteres.

Exercício 2
Letra A

UPDATE Actor
SET
name = “Gabriel Braga Nunes”,
birth_date = “2020-02-10”
WHERE id = “003”;

Letra B

UPDATE Actor
SET name = “JULIANA PAES”
WHERE name = “Juliana Paes”;

UPDATE Actor
SET name = “Juliana Paes”
WHERE name = “JULIANA PAES”;

Letra C

UPDATE Actor
SET
name = “Carol Castro”,
birth_date = “1985-06-22”,
salary = 652000,
gender = “female”
WHERE id = “005”;

Letra D
A coluna não foi encontrada.

Exercício 3
Letra A

DELETE FROM Actor WHERE name = “Fernanda Montenegro”;

Letra B

DELETE FROM Actor WHERE gender = “male” AND salary > 1000000;

Exercício 4
Letra A

SELECT MAX(salary) FROM Actor;

Letra B

SELECT MIN(salary) FROM Actor WHERE gender = “female”;

Letra C

SELECT COUNT(*) FROM Actor WHERE gender = “female”;

Letra D

SELECT SUM(salary) FROM Actor

Exercício 5
Letra A
Conta o número de elementos e os divide de acordo com o gênero.

Letra B

SELECT id, name FROM Actor ORDER BY name DESC;

Letra C

SELECT * FROM Actor ORDER BY salary;

Letra D

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

Letra E

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

