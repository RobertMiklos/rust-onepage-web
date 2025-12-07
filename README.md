# rust-onepage-web

## Stručný popis tématu (3–5 vět)
Tento projekt je jednostránkový web zaměřený na zobrazování informací o hře Rust a statistik hráčů. Jednotlivé sekce webu se nebudou zobrazovat jako dlouhý scroll, ale jejich obsah se bude dynamicky načítat po kliknutí v navigaci do hlavního obsahového panelu. Textové části i interaktivní tabulka statistik budou načítány z JSON souborů pomocí AJAXu. Součástí webu bude také interaktivní mapa monumentů, kde po kliknutí na konkrétní bod vyjede detail s informacemi o dané lokaci. Cílem projektu je vytvořit moderní, rychlou a interaktivní aplikaci pracující s daty.

## Cílová skupina
Hráči hry Rust, začátečníci hledající základní informace, lidé sledující herní statistiky a členové herní komunity se zájmem o herní data.

---

## Návrh obsahových sekcí (načítané přes navigaci)

### 1. O hře Rust
Stručný popis hry, survival mechaniky, PvP/PvE systém, crafting a základní principy.  
*(Obsah načítaný z JSON souboru.)*

### 2. Začátečnická příručka
Tipy pro první hodiny hraní: získávání surovin, výroba základního vybavení, stavba jednoduché základny.  
*(Obsah načítaný z JSON.)*

### 3. Interaktivní mapa monumentů
Obrázková mapa Rustu s klikacími body (Launch Site, Airfield, Dome atd.).  
Po kliknutí na bod se pomocí AJAXu načtou data o monumentu z JSON a zobrazí se popup s detaily (loot, radiation, popis, doporučené vybavení).  
*(JSON + AJAX + JS popup.)*

### 4. Statistiky hráčů – interaktivní tabulka
Dynamicky načítaná tabulka se statistikami hráčů (jméno, K/D, hodiny hraní…).  
Možnost filtrování podle jména, živého vyhledávání a řazení sloupců.  
*(AJAX + DOM manipulace.)*

---

## Návrh designu / wireframe
- Navigační lišta nahoře – přepíná jednotlivé sekce bez reloadu.  
- Jeden centrální obsahový panel (`#content`), do kterého se načítají JSON data.  
- Rust styl: tmavě šedá, rezavě oranžová, červené prvky.  
- Mapa: obrázek na pozadí, klikatelné hotspoty s hover efektem.  
- Statistiky hráčů v moderní tabulce s možností řazení.  
- Čisté a moderní UI pomocí TailwindCSS.  

---

## Použité technologie

### Frontend
- HTML  
- CSS / TailwindCSS  
- JavaScript  

### Data
- Data JSON soubory pro statistiky hráčů, mapy a informací.

### AJAX  
- Dynamické vkládání obsahu do `#content`  
- Klikací hotspoty na mapě → načtení JSON informací  
- Generování tabulky, filtrace, řazení

### Backend
- Jednoduchý PHP skript.

### Verzování
- Git + GitHub  
- Repozitář zpřístupněný vyučujícímu

---

## Očekávaný přínos / co se naučím
- Používání JSON dat a jejich dynamické načítání pomocí AJAX  
- Práci s interaktivní mapou a klikacími body  
- Implementaci popup oken a práce s DOM  
- Tvorbu responzivního UI a přepínacích sekcí  
- Správnou organizaci projektu a verzování přes GitHub  
- Práci s tabulkami, filtrováním a řazením dat
