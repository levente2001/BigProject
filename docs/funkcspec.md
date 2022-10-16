# Funkcionális specifikáció

## 1.	Áttekintés:

A **Yoshihiro kft.** megrendelő cég, egy diákokat foglalkoztató vállalat, azzal a megkereséssel fordult software fejlesztő cégönkhöz, hogy szeretne lefejlesztetni egy web alapú quiz programot, amin keresztül a diákok oktatása és fejlődése egy magasabb szintre emelkedhet. A megrendelő cég fő profilja a felsős általános és a gimnazista diákok játékos és könnyed módon való tanítása, oktatása. Szeretnék ha az iskolákban és otthon is tudnának a gyerekekre motiválóan hatni ha a tanulásról van szó.  A program lényege, hogy a felület mindenki számára könnyedén egy web böngészőből elérhető legyen. A weboldal regisztrációhoz kötött. A felhasználók különböző témakörökből válogathatnak, és azon belül érdekes quizeket tölthetnek ki, így fejlesztve a tudásukat az adott témában. A sorok töbször is kitölthetőek, ennek köszönhetően igazán mly tudást lehet megszerezni. A diákokat pontszámokkal motiváljuk, amikhez a tanárok kitalálhatnak különböző jutalmakat jegyek, vag egyéb juttatások formályában.

    A főbb előnyei:
    
        - Papírok helyett környezetbarát módon lehet a diákokat quizek kitöltésére motiválni
        - Nincs szükség semmilyen speciális képesítésre és eszközre, mindenki a saját mobil telefonján eléri
        - A kiértékelési időt megspórolhatják a dolgozók, mert a program azonnal jelzi a helyes és az elrontott válaszokat és az elért pontszámot.
        
    A főbb feladatai:
    
        - A diákok motiválása és a tanulás megszerettetése
        - Az iskolai tanárok munkájának megkönnyítése, segítése
        - Egyéb diákokkal foglalkozó intézmények, kisegítése
        - Otthoni tanulás és szülők segítése a gyererk tanulásában
        
        
## 2.	Jelenlegi helyzet:

    A cég egy jól bevált, ám elavult technikát használ évek óta. Mivel a Yoshihiro Kft. jeligéje az innováció,
    ezért egy fejlett szoftver használata kulcsfontosságú lehet a további működésünkben. A quizeket jelenleg
    papír alapon gyártja és nyomtatja nagy mennyiségben, témánként és tantárgyanként kategorizálva, melyet aztán
    a kapcsolatban álló intézmények és iskolák között szétosztanak. A papírok kiszállítása időigényes folyamat,
    amely gyakran késéseket és fennakadásokat okozhat, illetve a logisztikai költségek kiküszöbölhetőek lehetnek
    a virtuális felületre való átállás során. Továbbá, a diákokhoz szintén közelebb álló és egyszerűbb megoldás
    lenne, ha néhány kattintással a saját készülékükről tudnák kitölteni a számukra megfelelő kvízt. A cég az
    üzemelésében mihamarabbi változást szeretne, mivel a mostani állapotot fenntartani nem kívánják és nem is tudják.


## 3.	Követelménylista:

|Modul   |ID   |Név   |v.   |Kifejtés   |
|---|---|---|---|-----|
|Jogosultság   |K1   |Bejelentkezési felület|1.0   |A felhasználó az email címe vagy felhasználóneve és jelszava segítségével bejelentkezhet. Ha a megadott paraméterek nem megfelelőek, akkor a felhasználó hibaüzenetet kap.  |
|Jogosultság   |K2   |Regisztráció   |1.0   |A felhasználó regisztrálhatja magát a felhasználó név email cím illetve jelszó megadásával. A jelszó tárolása kódolva történik. Ha valamelyik paramétek hiányzik, vagy nem felel meg a követelményeknek, akkor a rendszer értesíti erről a felhasználót.   |
|Modifikáció   |K3   |Felhasználó módosítása   |1.0   |A felhasználó módosítani tudja a saját felhasználónevét. Ehhez szükséges a régi és az új felhasználónév megadása, és az új megerősítése.    |
|Modifikáció   |K4   |Jelszó módosítása  | 1.0  | A felhasználó módosítani tudja saját jelszavát. Ehhez szükséges a régi és az új jelszavának megadása, valamint az új megerősítése.   |
|Feladattípus  | K5  |Kvíz  |1.0  | Több kérdésből áll, a feladat a helyes válasz kiválasztása több lehetőség közül. A felhasználó pontot kap az eltalált és az el nem talált kvíz illetve teszt kérdések számának függvényében.  |
|Feladattípus   | K6  | Teszt |1.0   |Teszt kérdésre helyesen beírt eredmény ér pontot. A felhasználó pontot kap az eltalált és az el nem talált kvíz illetve teszt kérdések számának függvényében.   |
| Statisztika  | K7  | Toplista  | 1.0  |   Egy lista a játékosok pontszámairól, a lista elején a legtöbb pontot elért felhasználó található. |
|Felület   | K8  | Bejelentkezés  | 1.0  | A felhasználók itt tudnak bejelentkezni a rendszerbe  |


## 4.	Jelenlegi üzleti folyamatok modellje:

A Yohihiro Kft. kapcsolatban áll bizonyos intézményekkel, melyek között terjeszti a témakörönként megadott kvízeket. A kiszállítást és az elosztást a cég emberei végzik személyatóval, mely időigényes és költséges. A jelenlegi üzleti modell több okból kifolyólag sem alkalmas hosszútávon, sok hátránya van a kevés előnnyel szemben. Egy innovatív megoldásra van szükség, amelyet egy webes felület tenne lehetővé.

    A papír alapú quiz hátrányai:
    
        1. Rengeteg papírlap, illetve tinta szükséges a nyomtatáshoz, amely költségessége 
           mellett nem is környezetbarát megoldás
	2. Az egyesével történő kiértékelés hosszadalmas és fárasztó a dolgozók számára
	3. A kérdőívek terjesztése az iskolák között nehézkes
	4. A kitöltés módja gyakran nem egyértelmű és félrevezető lehet, ami szintén
           elkerülhető lenne
	5.
	6. 


## 5.	Igényelt üzleti folyamatok modellje:


## 6. Használati esetek

A rendszerünkbe bárki felregisztrálhat egy felhasználó névvel és egy jelszóval.  A regisztrált felhasználók, quizeket tölthetnek ki. Választhatnak 5 ketegória közül, és ezen belül lesznek kérdések . A diákok nyomon tudják követni a kapott pontszámokat, és a sikeres valamint a rossz válaszokat. A tanárok, pedig beikatathatják a mindenapi tanórák rendjébe a quizeket. Amennyiben a diákok sikeresen töltik ki a quizt akkor különböző pontszámokat, és mivel többször is ki tölthető egy adott teszt biztosan elméjül a megszerzett tudás. Az iskolákon kívül otthoni tanulásra vagy szórakozásra is alkalmas a program. Továbbá baráti társaságok összejvetelére is kiváló lehetőséget nyújtanak a kérdések. Különböző használati esetek során akár a fiatal diákok akár felnőtt korban lévő embereknél egyaránt fontos szerepet játszhat a tudás gyarapítása és a szellemi állapot minél magasabb szinten tartása. Ebben a quizeknek nagyon fontos szerepe van. A kérdések és a témakörök igény szerint alakíthatók az ügyfél akarata szerint.


## 7. Megfeleltetés

    Reszponzív webdízájn a szoftvernek ki kell elégítenie a következő pontokat mobilon is 
    elérhetőnek és használhatónak kell lennie, ezen felül letisztultnak és mindenki 
    számára érthetőnek kell lennie. A szoftvernek alacsony tárhely igényűnek kell lennie, 
    illetve alacsony hardware igényűnek. A teszt elindÍtása a felhasználóknak egyszerűnek 
    és gyorsnak kell lennie.  A teszt kitöltési felülete legyen letisztult, mindenki 
    számára könnyen kezelhető, egyértelmű. 


## 8. Képernyőterv


## 9.  Forgatókönyv
A szoftverben egy szereplő létezik, amit egy felhasználónév és jelszó azonosít. A kezdő oldalon a felhasználó regisztrálhat, illetve
bejelentkezhet a már meglévő felhasználói fiókjába, ezen felül az szoftverről olvashat információkat. Regisztráláskor a teljes
nevét, egy felhasználó nevet, egy jelszót, illetve egy e-mail címet kell megadni. Sikeres regisztráció után bejelentkezhet. Az
oldalt csak regisztrált felhasználók használhatják. Bejelentkezés után a felhasználó választhat a kölünböző kategóriáju kérdőívek
közül vagy egy teljesen véletlenszerűen generált kérdőívet is kitölthet, amit a rendszer a különbőzö előre beállított témák
kérdéseiből állít össze véletlenszerűen. A kérdőív kitöltése után a rendszer átszámolja, hogy a felhasználó hány kérdésre adott jó,
illetve rossz választ, ez alapján kiértékeli a kérdőívet és megjeleníti a felhasználó számára az eredményt. Az eredményt százalékos
arányban jeleníti meg. A kérdésekre adott helyes válaszokat a rendszer nem adja vissza. 


## 10. Funkció - Követelmény megfeleltetés
A weboldal fő funkciója az, hogy felmérje a diákok tudását. Ezért az a cél,hogy egy olyan számukra is tetszetős modern, fiatalos
színes és reszponzív weboldalt hozzunk létre, amelynek a használata számukra is élvezet. Ennek elérése érdekében a weboldalt gyorsra,
könnyen elérhetőre - tehát bárhonnan akár egy számítógépről, akár egy telefonról elérhető legyen - a modern fiatalság ízlésvilághoz
alkalmazkódra és mindemelet a célnak megfelelően a tudás bővítésére, illetve annak a felmérésére terveztűk. A weboldal bárhonnan 
elérhető lesz, azok számára akiknek a megrendelő szánja. A megrendelő szempontjából a szoftver alacsony hardware igényű, könnyen kezelhető, illetve a fenttartási kölcsége is minimális. A szoftverben fellelhető témákat bármikor megtudjuk változtani, illetve
kitudjuk bővíteni tetszés szerűen. A szoftver fentartását, illetve frissítését és hibajavítását a cégünk igény szerint vállalja.

## 11. Fogalom szótár
    Frontend - a programoknak, weboldalaknak az a része, amelyik a felhasználóval közvetlenül kapcsolatban van. Feladata 
    az adatok megjelenése, befogadása a felhasználó (vagy ritkábban egy másik rendszer) felől.

    Backend - a  programoknak, weboldalaknak a hátsó, a felhasználó elől rejtett, a tényleges számításokat végző része. 
    Feladata a front‑end (a felhasználóval kapcsolatban lévő rész) felől érkező adatok feldolgozása, és az eredményeknek 
    a front‑end felé történő visszajuttatása. 
