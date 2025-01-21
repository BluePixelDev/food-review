Tohle je interní složka pro dokumentaci projektu v rámci týmu. Zde budete dokumentovat části kódu, které jste napsali.

## Pravidla
- Nešahejte do kódu někoho jiného bez jeho vědomí. V případě nějaké chyby vytvořte na [github issues](https://github.com/BluePixelDev/food-review/issues) novou issue a tagněte koho se to týká
- Nešahat na master branch, master branch je určená jen pro fungující a mergnutý kód
- Vyvíjejte na svých vlastní branších, ty potom mergneme

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
Například míst import button from "./src/components/ui/button, použijete import button "$components/ui/button$ 
- ```$components``` - src/components 
    - Zde jsou uložené různé komponenty viz tlačítka atd...
- ```$lib``` - src/lib
    - Zde jsou skripty
- ```$routes``` - src/routes
    - Odkaz na složku cest

(V případě že by jjste chtěli nakonfigurovat další, tak min napište)