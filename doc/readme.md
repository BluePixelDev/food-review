# Pravidla
Zde je přehled pravidel ve stručném formátu pro tým při vývoji React webové aplikace pomocí Scrum metodiky:
Pravidla pro vývoj týmu

**Použití Typescriptu**
- Všechny soubory budou používat Typescript (.tsx nebo .ts) místo JavaScriptu.
- Soubory React komponent by měly mít příponu .tsx.

**Práce s Gitem**
- Neprovádějte commity přímo do master branch.
- Vytvořte vlastní branch pro změny, kterou následně mergneme s hlavní branch po schválení.
- Commit zprávy by měli mít smysluplné názvy a měli by popisovat co jste změnili a na čem pracujete.
- Každý merge do hlavní branch by měl projít code review jiným členem týmu.

**Dokumentace**
- Udržujte dokumentaci aktuální (README, specifikace API, přehled komponent).
- Při složitějších funkcích přidejte komentáře přímo do kódu nebo přiložte popis v Markdown souboru.

**Respektování kódu ostatních**
- Bez souhlasu autora neměňte a neupravujte kód ostatních členů týmu.
- V případě že naleznete bug nebo máte připomínku tak na github vytvořte novou issue a tagněte tvůrce kódu

**Stylování s Tailwind CSS**
- Pro stylizaci prvků používejte výhradně Tailwind CSS.
- Nepoužívejte vlastní třídy nebo inline styly, pokud to není nezbytné.

**Pojmenovávací konvence**
- React komponenty: Pojmenovávejte pomocí CamelCase (např. UserProfile.tsx).
- Typescript soubory: Používejte kebab-case pro názvy souborů (např. user-profile.ts).

**Modulární architektura**
- Rozdělujte projekt na logické moduly (např. ``features``, ``components``,``services``, ``utils``).
- Složky modulů by měly obsahovat pouze relevantní soubory a být přehledné.

**Dodržujte Single Responsibility Principle (SRP)**
- Každá komponenta nebo funkce by měla mít jednu jasnou odpovědnost.
- Nepište příliš velké komponenty, rozdělte je na menší, znovupoužitelné části.

**Kódová konzistence**
- Dodržujte stejný styl psaní kódu.
- Nezapomeňte odstranit testovací konzolové logy.

**IDE**
- Doporučuju aby jste si stáhly, nebo pokuď už máte, použili **visual studio code** s doporučenými rozšířeními (Jsou zahrnuty v repu a autamaticky se vám navrhout při otevření ve VS code.

---

# Setup
Pro lokální setup musíte nejprve nainstalovet packages a to uděláte pomocí ```npm i```
Pro vytvoření lokální databáze použijte ``npx prisma migrate dev``, to vytvoří lokální sqlite databázi
Nakonec, pro spuštění vývojového serveru použijte ```npm run dev```, v konzoli se vám napíše adresa vývojového serveru a ten poté zadejte do prohlížeče.

# Pages
V Next.js se správa stránek a routingu provádí pomocí složek a souborů v adresáři app.
Každý soubor page.tsx uvnitř složky je automaticky dostupný jako samostatná stránka:
**Příklad**
```
/app
  /auth
    page.tsx
```
**Výsledná URL:**
```
/auth
```

Pokud přidáte další page.tsx do podsložky, vytvoří se podstránka:
**Příklad**
```
/app
  /auth
    /login
      page.tsx
```

**Výsledná URL:**
```
/auth/login
```

## Seskupování stránek bez změny URL
**Adresářová struktura:**
```
/app
  /(auth)
    /login
      page.tsx
```

**Výsledná URL:**
```
/login
```

## Dynamické parametry
**Adresářová struktura:**
```
/app
  /product
    /[id]
      page.tsx

```

**Výsledná URL:**
```
/product/123
```