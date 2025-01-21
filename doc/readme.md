Tohle je interní složka pro dokumentaci projektu v rámci týmu. Zde budete dokumentovat části kódu, které jste napsali.

## Setup
Aby jste mohli locálně spustit tento program musíte:
- Nainstalovat dependecies pomocí ```npm i```
- Vytvořit lokální databázi příkazem ```npx prisma migrate dev --name Init```
- Pokuď pak chcete spustit development tak pužijte ```npm run dev```

Nebo můžete použít ```npm run setup```
- To stáhne dependencies
- Zkopíruje a vytvoří lokální databázi
- Zpustí vývojové prostředí

Pozor: Zpusťte pouze jednou při prvním stažení z gitu.

## Aliasy
Nakonfiguroval jsem pár aliasu (zkracovače importů).
- ```$components``` - src/components
- ```$lib``` - src/lib
- ```$routes``` - src/routes