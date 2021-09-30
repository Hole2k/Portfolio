export const dataJs = [

    {
        id: "1",
        title: "Komentarze",
        desc: <div>
            <p>Komentarzami posługujemy się, aby poinformować siebie a także innych użytkowników,developerów lub twórców o tym co dzieje się w danym miejscu w kodzie. Jest to także szybki sposób na znalezienie czegoś w kodzie. </p>
            <br />
            <p>Po dwóch ukośnikach // -> <mark>*komentarz jednoliniowy</mark></p>
            <br />
            <p>/*abcd <br />abcd*/ -> <mark>*komentarz wieloliniowy</mark></p>
            <br />
            <p>Bardzo dobrą metodą jest oddzielanie pewnej części kodu za pomocą komentarza zawierającego np. <mark>*gwiazdki</mark>:
                <br />
                <br />
    /* *****Kod zwierający funkcje, która generuje losowe liczby***** */
                <br />
                <br />
                miejsce na kod
                <br />
                <br />
    /* ************************************************************* */
            </p>
            <br />
            <p>Jeżeli tekst jest wieloliniowy, wtedy możemy zaznaczyć taki tekst i przycisnąć <mark>CTRL+?(Powstanie komentarz jednoliniowy przy każdej linii)</mark> lub <mark>CTRL+SHIFT+?(komentarz wieloliniowy)</mark> . W ten sposób cały zaznaczony tekst automatycznie zostanie zakomentowany.</p>
            <br />

            <h1>Zmienne</h1>
            <br />
            <p>! Na starcie należy zaznaczyć że nie powinno się stosować Var, jednak ten typ zostanie opisany.
                <p>Zmienne definiujemy rozpoczynająć od var/let/const</p>
                <br />
                <br />Var:
                <br />
                <mark>var nazwa_zmiennej = </mark>'zwykły tekst';
                <br />
                W JavaScript nie ma znaczenia czy użyjemy cudzysłowu pojedynczego czy podwójnego. Jednak lepiej używać pojedynczego. Dlaczego ? Dlatego, że dzięki takiemu zabiegowi będzię można w środku użyć podwójnego np:<br />
                var zmienna = <mark> a href="#" a </mark>
            </p >
        </div>,
        img: "./imgJS/lesson1.JPG"
    },

    {
        id: "2",
        title: "Operatory cz.1",
        desc: <div><h2>Operatory przypisania:</h2>
            <br />
            <p><mark>+</mark> dodawanie </p>
            <br />
            <p><mark>-</mark> odejmowanie</p>
            <br />
            <p><mark>*</mark> mnożenie</p>
            <br />
            <p><mark>/</mark> dzielenie</p>
            <br />
            <p><mark>%</mark> modulo(reszta z dzielenia)</p>
            <br />
            <h2>Inkrementacja - zwiększenie wartości argumentu</h2>
            <br />
            <p>liczba <mark>++</mark></p>
            <br />
            <h2>Dekrementacja - zmniejszenie wartości argumentu</h2>
            <br />
            <p>liczba <mark>--</mark></p>
            <br />
            <h2>Przypisanie wartości do zmiennej</h2>
            <br />
            <p>liczba = liczba <mark>+</mark> liczba1 </p>
            <br />
            <p>Jest równoważne z zapisem </p>
            <br />
            <p>liczba <mark>+=</mark> liczba1</p>
        </div>,
        img: "./imgJS/lesson3.jpg"
    },

    {
        id: "3",
        title: "Operatory cz.2",
        desc: <div>
            <h2>Operatory porównania</h2>
            <br />
            <p>liczba1 <mark>=</mark> liczba2 -> przypisanie wartości liczba2 do liczba1</p>
            <br />
            <p>liczba1 <mark>!=</mark> liczba2 -> True jeżeli zmienne są różne od siebie</p>
            <br />
            <p>liczba1 <mark>==</mark> liczba2 ->  True, jeżeli liczba1 jest równa liczbie2</p>
            <br />
            <p>liczba1 <mark>!==</mark> liczba2 -> True jeżeli zmienne są rózne od siebie lub są innego typu</p>
            <br />
            <p>liczba1 <mark>===</mark> liczba2 -> True jeżeli liczby oraz typy są równe</p>
            <br />
            <p>liczba1 <mark></mark>  liczba2 -> True jeśli liczba1 jest mniejsza niż liczba2</p>
            <br />
            <p>liczba1 <mark>></mark> liczba2 -> True jeśli liczba1 jest większa niż liczba2</p>
            <br />
            <p>liczba1 <mark>⩾</mark> liczba2  -> True jeśli liczba1 jest mniejsza-równa niż liczba2</p>
            <br />
            <p>liczba1 <mark>⩽</mark> liczba2  -> True jeśli liczba1 jest większa-równa niż liczba2</p>
            <br />
            <p>((liczba1 > liczba2) <mark>||</mark> typeof(liczba1) == 'number') -> liczba1 musi być większa niż liczba2 <mark>LUB</mark> typ liczba1 musi być typem number</p>
            <br />
            <p>((liczba1 > liczba2) <mark>&&</mark> (liczba1 == 80)) -> liczba1 musi być większa niż liczba2 <mark>I/ORAZ</mark> typ liczba1 musi równac się 80
            </p>
            <br />
            <p>(<mark>!</mark>(liczba1 == 80)) -> liczba1 nie <mark>równa</mark> się 80</p>
            <br />
            <p>(liczba == 80 ) <mark>^</mark> (liczba2 == 55) -> <mark>Tylko jeden</mark> z warunków może mieć false lub true. Nie może być 2 takich samych wartości
            </p>
            <br />

        </div>,
        img: "./imgJS/lesson4.jpg"
    },
    {
        id: "4",
        title: "Instrukcje warunkowe",
        desc:
            <div>
                <h1>if</h1>
                <h2>Instrukcja <mark>else if</mark> pozwala na spełnienie jednego warunku. <br /> </h2>
                <br />
                <p>if(warunek)<br />instrukcja<br />else if/if (warunek)<br />instrukcja<br />else<br />warunek</p>
                <br />
                <h2>Skrócony zapis:</h2>
                <p>warunek ? kod dla true : kod dla false;</p>
                <br />
                <p><mark>INACZEJ</mark></p>
                <br />
                <p>warunek ? kod dla if : kod dla else;</p>
                <br />
                <br />
                <h3>!Jeżeli instrukcja warunkowa zawiera TYLKO <mark>if'y</mark>, wtedy zostaną wykonane wszystkie instrukcje, w których warunek zostanie spełniony.</h3>
                <h3>!W skróconym zapisie można użyć jedynie if oraz else . Nie możemy rozbudować konstrukcji o else if'y </h3>
                <br />
                <h1>switch</h1>
                <br />
                <p>switch(zmienna)</p>
                <br />
                <p>case 10:</p>
                <br />
                <p>instrukcja;</p>
                <br />
                <p>break;</p>
                <br />
                <p>case 'jakiś string':</p>
                <br />
                <p>instrukcja;</p>
                <br />
                <p>break;</p>
                <br />
                <p>default:</p>
                <br />
                <p>instrukcja;</p>
                <br />
                <h3>!Jezeli usuniemy <mark>break;</mark> to wtedy tak jak w przypadku  <mark>if</mark> - jezeli warunki są prawdziwe to kody poniżej się wykonają.</h3>

            </div>,
        img: "./imgJS/lesson5.jpg"
    },
    {
        id: "5",
        title: "Petle(while, do while, for)",
        desc: <div>
            <h1>while</h1>
            <br />
            <p>var i = 20;</p>
            <br />
            <p><mark>while(i >13)</mark> </p>
            <br />
            <p>document.write(i);</p>
            <br />
            <p>i--</p>
            <br />

            <h1>do while</h1>
            <br />
            <p>*Ta pętla wykona się co najmniej raz. Pętla zaczyna się od słowa <mark>do</mark>, przechodzi przez instrukcje i na samym końcu sprawdza warunek.</p>
            <br />
            <p><mark>do</mark> </p>
            <br />
            <p>i--;</p>
            <br />
            <p>document.write(i);</p>
            <br />
            <p><mark>while( i >= 10 )</mark></p>
            <br />

            <h1>for</h1>
            <br />
            <p><mark>for(i; i > 20; i++)</mark></p>
            <br />
            <p>document.write(i);</p>
            <br />
            <p>document.write('<br />');</p>
            <br />

            <h1>Zmiana tekstu między znacznikami HTML </h1>
            <br />
            <p>Do zmiennej przypisana jest funkcja, następnie pętla jest wywoływana tyle razy ile wynosi ilośc znacznika <mark>p</mark>. Jako instrukcja przypisana jest tablica oraz funkcja, która podmienia tekst na wpisany przez nas.</p>
            <br />
            <p>var paragrafy = document.getElementsByTagName("p");</p>
            <br />
            <p>for(i = 1; i ≤ paragrafy.length/2; i++)</p>
            <br />
            <p>paragrafy[i].innerHTML = 'inny tekst';</p>
            <br />
        </div>,
        img: "./imgJS/lesson6.jpg"
    },
    {
        id: "6",
        title: "Funkcje",
        desc: <div>
            <p>Wywołanie funkcji może odbyć się w każdym miejscu w kodzie</p>
            <br />
            <p><mark>nazwaFunkcji();</mark></p>
            <br />
            <p>function nazwaFunkcji()</p>
            <br />
            <p>document.write('tekst z wnętrza funkcji')</p>
            <br />
            <p></p>


            <h1>Funkcja anonimowa</h1>

            <br />
            <p>Funkcja anonimowa może być wywołana tylko po jej definicji:</p>
            <br />
            <p><mark>nazwaFunkcji = function()</mark></p>
            <br />
            <p>document.write('Tekst z wnętrza funkcji')</p>
            <br />
            <p><mark>nazwaFunkcji();</mark></p>
            <br />


            <h1>Funkcja z parametrem/parametrami</h1>
            <br />
            <p>Funkcja przyjmująca co najmniej jeden parametr, który później będzie wykorzystany.</p>
            <br />

            <p>
                Tekst pojawi się ze odstępem: <br />
                dw('Jakiś tekst', 'spacja')   <br /> <br />
                Następny tekst pojawi się w nowej lini: <br />
                dw('Jakiś tekst1', 'br')  <br /> <br />
                Wyświetli się zwykły tekst: <br />
                dw('Jakiś tekst2')

            </p>

            <br />
            <p><mark>function dw(parametr1, parametr2)</mark></p>
            <br />
            <p>if(<mark>parametr2</mark> == 'br')</p>
            <br />
            <p>var zmienna = <mark>parametr1</mark> + '<br />';</p>
            <br />
            <p>else if (<mark>parametr2</mark> == 'spacja')</p>
            <br />
            <p>var zmienna = <mark>parametr1</mark> + ' ';</p>
            <br />
            <p>else</p>
            <br />
            <p>var zmienna = <mark>parametr1</mark></p>
            <br />
            <p>return document.write(zmienna); </p>



        </div>,
        img: "./imgJS/lesson7.jpg"
    },
    {
        id: "7",
        title: "Tablice",
        desc: <div>
            <h1>Tablica jednowymiarowa</h1>
            <br />
            <p>Każdy element w tablicy posiada swój własny klucz(ID), który jest numerowany od zera</p>
            <br />
            <p>Tablice można utworzyć na <mark>2</mark> sposoby:</p>
            <br />
            <p><mark>var tablica = new Array('Pomidor ', 'Kalafior ', 'Ogórek ' );</mark></p>
            <br />
            <p>LUB</p>
            <br />
            <p><mark>var tablica1 = ['Pomidor ', 'Kalafior ', 'Ogórek '];</mark></p>
            <br />
            <p>Elementy można także wpisać w taki sposób:</p>
            <br />
            <p><mark>tablica[0] = 'Pierwszy element '<br /></mark>
                <mark> tablica[1] = 'Drugi element '<br /></mark>
                <mark>  tablica[2] = 'Trzeci element '</mark></p>
            <br />
            <p>Teraz można wyświetlić całą tablice</p>
            <br />
            <p><mark>document.write(tablica)</mark></p>
            <br />
            <p>Lub pojedynczy element</p>
            <br />
            <p><mark>document.write(tablica[1]);</mark></p>
            <br />
            <p>Zamiast posługiwać się standardowym nuemrycznym ID można zapisać je literami</p>
            <br />
            <p><mark>tablica['a'] = 'Pierwszy element '  </mark>           <br />
                <mark> tablica['b'] = 'Drugi element ' </mark>           <br />
                <mark> tablica['c'] = 'Trzeci element '</mark></p>
            <br />
            <p><mark>document.write(tablica['a']);</mark></p>
            <br />
            <p>Zwrócenie długośsci tablicy </p>
            <br />
            <p><mark>document.write(tablica1.length);</mark></p>
            <br />
            <p>Wyświetlenie wszystkich elementów tablicy pdbywa się przy pomocy pętli</p>
            <br />
            <p><mark>for(var i=0; i ≤ tablica1.length -1; i++)</mark>
                <br />
                <mark> document.write(tablica1[i]);</mark>
            </p>
            <br />



            <h1>Tablica wielowymiarowa</h1>
            <br />
            <p>Tablica nr. 1</p>
            <br />
            <p><mark>var produkty=[];<br />
                produkty['warzywa'] =['Pomidor ', 'Sałata ', 'Ogórek '];<br />
                produkty['owoce'] = ['Banan ', 'Pomarańcza ', 'Arbuz '];</mark><br />
            </p>
            <br />
            <p>Tablica nr. 2</p>
            <br />
            <p><mark>var pracownicy = []<br />
                pracownicy = ['Gienek ', 'Andrzej ', 'Rafał ']</mark></p>
            <br />
            <p><mark>var tablica =[]</mark><br />
                <mark>tablica['produkty']= produkty -></mark> produkty ze zmiennej produkty<br />
                <mark>tablica['pracownicy']= pracownicy -></mark> pracownicy ze zmiennej pracownicy</p>
            <br />
            <p>Wyswietlenie tablicy ,,produkty", z owocami, a konkretnie drugiego owoc  </p>
            <br />
            <p><mark>document.write(tablica['produkty']['owoce'][2]);</mark></p>
            <br />
            <p>Wyswietlenie tablicy ,,pracownicy", z owocami, a konkretnie pierwszego pracownika  </p>
            <br />
            <p><mark>document.write(tablica['pracownicy'][1])</mark></p>
            <br />
            <h1>Operacje na tablicach</h1>
            <br />
            <h2>Łączenie elementów znakiem podanym w nawiasie</h2>
            <br />
            <p>document.write(tablica['produkty'['owoce']<mark>.join(', ')</mark>])</p>
            <br />
            <h2>Sortowanie(w tym wypadku alfabetycznie)</h2>
            <br />
            <p>document.write(tablica['produkty'['owoce']<mark>.sort</mark>])</p>
            <br />
            <h2>Łączenie tablic</h2>
            <br />
            <p>var produkty = produkty['warzywa']<mark>.concat</mark>(produkty['owoce']);</p>
            <br />
            <h2>Odzielenie elementów tablicy (od-do)</h2>
            <br />
            <p>var produkty - produkty<mark>.slice(0,3);</mark></p>
            <br />
            <h2>Push(dodanie elementu na początku)</h2>
            <br />
            <p>var noweOwoce = owoce<mark>.pushM</mark>('owoc1', 'owoc2');</p>
            <br />
            <h2>Pop(usuwanie elementu na końcu tablicy)</h2>
            <br />
            <p>var usuniecieOstatniegoOwoca = owoce<mark>.pop()</mark>;</p>
            <br />
            <h2>Unshift(dodanie elementu na końcu)</h2>
            <br />
            <p>var dodanieOstatniegoOwoca = owoce<mark>.unshift('kiwi','cytryna')</mark></p>
            <br />
            <h2>Shift(usunięcie pierwszego elementu)</h2>
            <br />
            <p>var usunieciePierwszegoOwoca - owoce<mark>.shift()</mark>;</p>

        </div>,
        img: "./imgJS/lesson8.jpg"
    },
    {
        id: "8",
        title: "Ciągi znaków",
        desc: <div>
            <h2>var string = 'W szczebrzeszynie chrząszcz brzmi w trzcinie';
            </h2>           <br />
            <h2>Sprawdzenie ilości znaków(wraz ze spacjami)</h2>
            <p>document.write(<mark>string.length</mark>);</p>
            <br />
            <br />


            <h2>Sprawdzenie co kryje się w stringu w danym miejscu</h2>
            <p>document.write(<mark>string[2]</mark>);</p>
            <br />
            <br />

            <h2>Wyświetlanie paru liter(od,do)</h2>
            <p>document.write(<mark>string.substring(0,200)</mark>);
            </p>
            <br />
            <br />

            <h2>Wyświetlanie liter od konkretnego miejsca do ilości znaków </h2>
            <p>document.write(<mark>string.substr(10, 10)</mark>);
            </p>
            <br />
            <br />

            <h2>Wycinanie kawałków tekstu</h2>
            <p>document.write(<mark>string.slice(2, -20)</mark>);
            </p>
            <br />
            <br />

            <h2>//Dzielenie string'a na poszczególne fragmenty [konkretne słowo]
            </h2>
            <p>document.write(<mark>string.split(' ')[0]</mark>);
            </p>
            <br />
            <p>//Przed spacją jest jeden element, za spacją drugi itd.
            </p>
            <br />
            <br />

            <h2>Funkcja zastępowania (jeden element na inny)</h2>
            <p>document.write(<mark>string.replace('chrząszcz', 'żuk')</mark>);</p>
            <br />
            <br />

            <h2>Funkcja która zastępuje wszystkie wpisane słowa/litery na inne</h2>
            <p>document.write(<mark>string.replace(/rz/g,'RZ')</mark>);</p>
            <br />
            <br />

            <h2>Zmiana wielkości liter</h2>
            <p>document.write(<mark>string.toUpperCase()</mark>);
            </p>
            <p>document.write(<mark>string.toLowerCase()</mark>);
            </p>
            <br />
            <br />

            <h2>funkcje można łączyć</h2>
            <p>document.write(<mark>string.substring(0,5).toUpperCase()</mark>);
            </p>
            <br />
            <br />

            <h2>Zmiana znaków specjalnych na inne</h2>
            <p>document.write(<mark>escape(string)</mark>);
            </p>
            <br />
            <br />

            <h2>Odwrotnośc escape</h2>
            <p>document.write(<mark>unescape(string)</mark>);
            </p>
            <br />
            <br />

            <h2>Wyswietlenie paska adresu </h2>
            <p>document.write(<mark>document.URL</mark>);
            </p>
            <br />
            <br />

            <h2>Sprawdznie pozycji elementu w tekscie (czy istnieje).Jeżeli danego znaku lub słowa nie ma, zostanie zwrócone ,,-1"</h2>
            <p>document.write(<mark>string.indexOf('W')</mark>);
            </p>
            <br />
            <br />

            <h2>Sprawdzenie czy słowo istnieje</h2>
            <p>if(<mark>string.indexOf('asd')</mark> != -1)
            </p>
            <p>	alert('Słowo istnieje');
            </p>
            <p>else
            </p>
            <p>	alert('Słowo nie istnieje');
            </p>
            <br />

        </div>,
        img: "./imgJS/lesson9.jpg"
    },
    {
        id: "9",
        title: "Wyrazenia regularne",
        desc: <div></div>,
        img: "./imgJs/lesson10.jpg"

    }
]

