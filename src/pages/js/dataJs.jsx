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
        </div>,
        img: "./imgJS/lesson1.JPG"
    },

    {
        id: "2",
        title: "Zmienne",
        desc: <div><p>! Na starcie należy zaznaczyć że nie powinno się stosować Var, jednak ten typ zostanie opisany.
            <p>Zmienne definiujemy rozpoczynająć od var/let/const</p>
            <br />
            <br />Var:
            <br />
            <mark>var nazwa_zmiennej = </mark>'zwykły tekst';
            <br />
            W JavaScript nie ma znaczenia czy użyjemy cudzysłowu pojedynczego czy podwójnego. Jednak lepiej używać pojedynczego. Dlaczego ? Dlatego, że dzięki takiemu zabiegowi będzię można w środku użyć podwójnego np:<br />
            var zmienna = <mark> a href="#" a </mark>
        </p >
        </div >,
        img: ""
    },
    {
        id: "3",
        title: "Operatory cz.1",
        desc: <div><h2>Operatory przypisania:</h2>
            <br />
            <p>+ dodawanie </p>
            <br />
            <p>- odejmowanie</p>
            <br />
            <p>* mnożenie</p>
            <br />
            <p>/ dzielenie</p>
            <br />
            <p>% modulo(reszta z dzielenia)</p>
            <br />
            <h2>Inkrementacja - zwiększenie wartości argumentu</h2>
            <br />
            <p>liczba ++</p>
            <br />
            <h2>Dekrementacja - zmniejszenie wartości argumentu</h2>
            <br />
            <p>liczba --</p>
            <br />
            <h2>Przypisanie wartości do zmiennej</h2>
            <br />
            <p>liczba = liczba + liczba1 </p>
            <br />
            <p>Jest równoważne z zapisem </p>
            <br />
            <p>liczba += liczba1</p>
        </div>,
        img: "./imgJS/lesson3.jpg"
    },

    {
        id: "4",
        title: "Operatory cz.2",
        desc: <div>
            <h2>Operatory porównania</h2>
            <br />
            <p>liczba1 = liczba2 -> przypisanie wartości liczba2 do liczba1</p>
            <br />
            <p>liczba1 != liczba2 -> True jeżeli zmienne są różne od siebie</p>
            <br />
            <p>liczba1 == liczba2 ->  True, jeżeli liczba1 jest równa liczbie2</p>
            <br />
            <p>liczba1 !== liczba2 -> True jeżeli zmienne są rózne od siebie lub są innego typu</p>
            <br />
            <p>liczba1 === liczba2 -> True jeżeli liczby oraz typy są równe</p>
            <br />
            <p>liczba1  liczba2 -> True jeśli liczba1 jest mniejsza niż liczba2</p>
            <br />
            <p>liczba1 > liczba2 -> True jeśli liczba1 jest większa niż liczba2</p>
            <br />
            <p>liczba1 ⩾ liczba2  -> True jeśli liczba1 jest mniejsza-równa niż liczba2</p>
            <br />
            <p>liczba1 ⩽ liczba2  -> True jeśli liczba1 jest większa-równa niż liczba2</p>
            <br />


        </div>,
        img: "./imgJS/lesson4.jpg"
    }
]

