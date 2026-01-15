# Rust server one-page web

## Stručný popis tématu
Tento projekt je jednostránkový web zaměřený na zobrazování informací o Rust serveru Rustanixed a statistik hráčů. Jednotlivé sekce webu se nebudou ukazovat jako dlouhý scroll, ale jejich obsah se bude dynamicky načítat po kliknutí na zálošku v navigaci do jednoho okánka webu. Textové části, interaktivná mapa a tabulka statů budou načítány z JSON souborů pomocí AJAXu. Cílem projektu je vytvořit moderní, rychlou a interaktivní aplikaci pracující s daty.

## Cílová skupina
Hráči hry Rust a konkrétně hráči serveru Rustanixed hledající příkazy, informace o mapě nebo vlastní staty na serveru.

---

## Návrh Obsahových sekcí (načítané přes navigaci)

### 0. Home page
Přivítáni na webu.

### 1. O serveru
Stručný popis serveru a jeho vychytávky.
*(Obsah načítaný z JSON)*

### 2. Příkazy
Seznam příkazů a vysvětlení co dělají.
*(Obsah načítaný z JSON)*

### 3. Interaktivní mapa monumentů
Rust mapa s klikacími body (Launch Site, Dome, Rig, Airfield atd.). Po kliknutí na bod se zobrazí popup s detaily monumentu (loot, radiation, key-card puzzle)
*(Obsah načítaný z JSON)*

### 4. Tabulka statistik hráčů
Tabulka se statistikami hráčů hrajících na serveru. Tabulka bude obsahovat (jméno, K/D, hodiny hraní, vystřelený náboje, zasažený náboje a hlavi)
*(Obsah načítaný z JSON)*

---

## Návrh designu / wireframe
- Navigačná lišta nahoře - přepíná jednotlivé sekce bez reloadu.
- Jeden centrální obsahový panel, do kterého se načítají JSON data.
- Rust styl: tavší barvy, rezavě oranžová, červená
- Mapa: obrázek na pozadí, klikatelné body s hover efektem.
- Statistiky hráčů v moderní tabulce s možností řazení.
- Čisté a moderní UI pomocí CSS

---

## Použité technologie

### Frontend
- HTML
- CSS
- JavaScript

### Data
- Data JSON soubory.

### Verzování
- Git + GitHub
- repozitář zpřístupněný vyučujícímu.

---

## Očekávaný přínos
- Naučení se programovacího jazyka JavaScript.
- Používání JSON dat a jejich dynamické načítání pomocí AJAX.
- Implementaci popup oken a práce s DOM.
- Tvorbu responzivního UI a přepínacích sekcí.
- Správnou organizaci projektu a verzování přes GitHub.
- Práci s tabulkami, filtrováním a řazením dat.