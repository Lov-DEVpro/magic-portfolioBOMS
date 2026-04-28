# AGENTS.md — Stroga pravila za maksimalne rezultate

## KOMUNIKACIJA (token efikasnost)

- Odgovaraj kratko i precizno. Bez preamble, bez objašnjenja šta ćeš uraditi — samo uradi.
- Nema "Sigurno!", "Naravno!", "Odlično pitanje!" ni sličnih fraza.
- Nema objašnjenja koja nisam tražio. Ako trebam objašnjenje, pitaću.
- Nema ponavljanja onoga što sam rekao u promptu.
- Ne dokumentuj kod koji sam po sebi nije jasan — samo kad je kompleksan.
- Koristi kratka imena varijabli i funkcija osim u javnim API-ima.
- Greške i status prijavi u jednoj rečenici.

---

## PLANIRANJE (obavezno za svaki task)

- Prije pisanja koda, kreiraj kratki plan u 3-5 bullet poena.
- Ako je task nejasan, postavi MAX 2 pitanja — ne više.
- Za kompleksne taskove, predloži podjelu na manje korake i čekaj odobrenje.
- Nikad ne pretpostavljaj šta korisnik želi — pitaj ako nisi siguran u ključne detalje.

---

## KODIRANJE — STROGA PRAVILA

### Opće
- Piši čist, efikasan kod koji rješava tačno ono što je traženo — ništa više.
- Ne dodaj feature koji nije tražen, čak ni ako misliš da bi bio koristan.
- Svaka funkcija radi jednu stvar. Drži funkcije kratkim.
- Izbjegavaj duplikaciju koda — refaktoriši zajednički kod.
- Koristi najpouzdaniji pristup, ne najimpresivniji.

### Greške i validacija
- Svaki novi kod mora imati error handling.
- Ne ostavljaj `console.log`, `print`, `TODO` ili `FIXME` u finalnom kodu.
- Ne ostavljaj zakomentiran stari kod.
- Provjeri edge case-ove: null, undefined, prazan niz, negativni broj.

### Tipovi i stilovi
- Koristi TypeScript gdje god je moguće — uvijek tip-uj argumente i povratne vrijednosti.
- Prati postojeći stil koda u projektu (indentacija, imenovanje, struktura).
- Ako projekt nema stil, koristi standardne konvencije jezika.

---

## TESTIRANJE (obavezno)

- Nakon svake izmjene, pokreni testove: `npm test` / `pytest` / odgovarajuća komanda za projekat.
- Ako testovi ne postoje za izmijenjenu funkcionalnost, napiši ih.
- Ako test faili — STANI. Analiziraj grešku. Popravi. Ponovo pokreni. Ne nastavljaj dalje dok svi testovi ne prođu.
- Pokreni i linter: `npm run lint` / `ruff check` / ekvivalent za projekat.
- Provjeri da nema type errora: `tsc --noEmit` za TypeScript projekte.

---

## VERIFIKACIJA PRIJE ZAVRŠETKA (OBAVEZNO — NE PRESKAKATI)

Prije nego završiš bilo koji task, provjeri SVAKU od ovih stavki:

- [ ] Svi testovi prolaze bez greške
- [ ] Linter ne prijavljuje greške
- [ ] Nema `console.log` / `print` debug outputa u kodu
- [ ] Nema hardcoded vrijednosti koje bi trebale biti u config/env
- [ ] Nema nekorišćenih importa ili varijabli
- [ ] Edge case-ovi su pokriveni
- [ ] Kod radi tačno ono što je traženo — ni više ni manje

Ako ijedan od ovih uvjeta nije ispunjen — POPRAVI PRIJE NASTAVKA.

---

## GIT I GITHUB (obavezno na kraju svakog taska)

Po završetku taska i prolazu svih provjera:

```bash
git add -A
git status          # Provjeri šta ide u commit
git diff --cached   # Provjeri izmjene
git commit -m "<tip>: <kratki opis>"
git push origin HEAD
```

### Format commit poruke

Koristi konvencionalni format:
- `feat: dodana stranica za profil korisnika`
- `fix: popravljen bug u kalkulaciji cijene`
- `refactor: ekstrahovana logika validacije`
- `test: dodani testovi za auth modul`
- `chore: ažurirane zavisnosti`

Nikad ne puši:
- Kod koji ne kompajlira
- Failing testove
- API ključeve, passworde ili env varijable
- Generisane fajlove (`node_modules`, `dist`, `__pycache__`, `.env`)

---

## SIGURNOST

- Nikad ne hardcode-aj API ključeve, passworde, tokene ili credentials.
- Sve osjetljive vrijednosti idu u `.env` fajl (i `.env` mora biti u `.gitignore`).
- Sanitiziraj sve korisničke inpute — ne vjeruj ničemu što dolazi izvana.
- Provjeri da nema SQL injection, XSS ili sličnih ranjivosti u promijenjenom kodu.

---

## PROMPTS KOJI SMANJUJU POTROŠNJU TOKENA

### Šta Codex NE treba raditi
- Ne čitaj fajlove koji nisu relevantni za task
- Ne objašnjavaj standardne koncepte
- Ne generišei alternativna rješenja ako nisam tražio
- Ne ponavljaj kod koji nisam mijenjao

### Šta Codex TREBA raditi
- Čitaj samo fajlove koji su direktno povezani s taskom
- Kada mijenjaš fajl, prikaži samo izmijenjeni dio (diff), ne cijeli fajl
- Summarizuj šta si uradio u 1-2 rečenice na kraju

---

## SETUP ZA OVAJ PROJEKAT

```
Jezik/Framework: TypeScript / Next.js 16
Package manager: npm
Komanda za testove: nije definisana u package.json
Komanda za lint: npm run lint
Komanda za build: npm run build
Glavna grana: integration
```

---

## PRIORITETI (redosljed važnosti)

1. Ispravnost — kod radi kako treba
2. Sigurnost — nema ranjivosti
3. Testovi prolaze — bez izuzetka
4. Čistoća — čitak, maintainable kod
5. Performanse — samo kad je stvarno potrebno
