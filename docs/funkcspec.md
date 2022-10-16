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


## 10. Funkció - Követelmény megfeleltetés
