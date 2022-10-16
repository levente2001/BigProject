# Követelményspecifikáció

## 1. Áttekintés

 A **Yoshihiro Kft.** megrendelő cég, egy diákokat foglalkoztató vállalat, azzal a megkereséssel fordult software fejlesztő cégönkhöz, hogy szeretne lefejlesztetni egy web alapú quiz programot, amin keresztül a diákok oktatása és fejlődése egy magasabb szintre emelkedhet. A program lényege, hogy a felület mindenki számára könnyedén egy web böngészőből elérhető legyen. A weboldal regisztrációhoz kötött. A felhasználók különböző témakörökből válogathatnak, és azon belül érdekes quizeket tölthetnek ki, így fejlesztve a tudásukat az adott témában. A sorok töbször is kitölthetőek, ennek köszönhetően igazán mely tudást lehet megszerezni.

    A főbb előnyei:
    
        - Papírok helyett környezetbarát módon lehet a diákokat quizek kitöltésére motiválni
        - Nincs szükség semmilyen speciális képesítésre és eszközre, mindenki a saját mobil telefonján eléri
        - A kiértékelési időt megspórolhatják a dolgozók, mert a program azonnal jelzi a helyes és az elrontott válaszokat és az elért pontszámot.
        

## 2. Jelenlegi helyzet

  A cég a quizeket jelenleg papír alapon gyártja és nyomtatja nagy mennyiségben, témánként és tantárgyanként kategorizálva, melyet aztán a kapcsolatban álló intézmények és iskolák között szétosztanak. A papírok kiszállítása időigényes folyamat, amely gyakran késéseket és fennakadásokat okozhat, illetve a logisztikai költségek kiküszöbölhetőek lehetnek a virtuális felületre való átállás során. Továbbá, a diákokhoz közelebb álló és egyszerűbb megoldás lenne, ha néhány kattintással a saját készülékükről tudnák kitölteni a számukra megfelelő kvízt. A Yoshihiro Kft. a működésében mihamarabbi változást szeretne, mivel a mostani állapotot fenntartani nem kívánják és nem is tudják.
  
  
  ## 3. Jelenlegi üzleti modell

 A jelenlegi üzleti modell több okból kifolyólag sem alkalmas hosszútávon, sok hátránya van a kevés előnnyel szemben. Egy innovatív megoldásra van szükség, amelyet egy webes felület tenne lehetővé.
    
     A papír alapú quiz hátrányai:
     
        - nem környezetbarát (rengeteg papírlap szükséges)
        - hosszú a kiértékelési idő
        - a kérdőívek terjesztése nehézkes
        - a kitöltő személy beazonosítása bonyolult
        - a kitöltés módja félrevezető is lehet
        - témakörök közötti váltás nem lehetséges


  ## 6. Követelménylista
  
  |Modul   |ID   |Név   |v.   |Kifejtés   |
|---|---|---|---|-----|
|Jogosultság   |K1   |Bejelentkezési felület|1.0   |A felhasználó az email címe vagy felhasználóneve és jelszava segítségével bejelentkezhet. Ha a megadott paraméterek nem megfelelőek, akkor a felhasználó hibaüzenetet kap.  |
|Jogosultság   |K2   |Regisztráció   |1.0   |A felhasználó regisztrálhatja magát a felhasználó név email cím illetve jelszó megadásával. A jelszó tárolása kódolva történik. Ha valamelyik paramétek hiányzik, vagy nem felel meg a követelményeknek, akkor a rendszer értesíti erről a felhasználót.   |
|Modifikáció   |K3   |Felhasználó módosítása   |1.0   |A felhasználó módosítani tudja a saját felhasználónevét. Ehhez szükséges a régi és az új felhasználónév megadása, és az új megerősítése.    |
|Modifikáció   |K4   |Jelszó módosítása  | 1.0  | A felhasználó módosítani tudja saját jelszavát. Ehhez szükséges a régi és az új jelszavának megadása, valamint az új megerősítése.   |
|Feladattípus  | K5  |Kvíz  |1.0  | Több kérdésből áll, a feladat a helyes válasz kiválasztása több lehetőség közül. A felhasználó pontot kap az eltalált és az el nem talált kvíz illetve teszt kérdések számának függvényében.  |
|Feladattípus   | K6  | Teszt |1.0   |Teszt kérdésre helyesen beírt eredmény ér pontot. A felhasználó pontot kap az eltalált és az el nem talált kvíz illetve teszt kérdések számának függvényében.   |
| Statisztika  | K7  | Toplista  | 1.0  |   Egy lista a játékosok pontszámairól, a lista elején a legtöbb pontot elért felhasználó található. |