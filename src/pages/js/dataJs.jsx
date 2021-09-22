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
    }
]

