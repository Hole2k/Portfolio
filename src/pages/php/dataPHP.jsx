export const dataPHP = [

    {
        id: "1",
        title: "Wstęp i składnia",
        desc: <div>
            <h1>Kod PHP wykonujemy pomiędzy znacznikami</h1><br />
            <p>W php możemy bez problemu posługiwać się językiem HTML oraz CSS.</p><br />
            <p>Nie domknięcie znacznika php, jest dopuszczalne tylko wtedy jeżeli poniżej znajduje się tylko i wyłacznie kod php</p><br />
            <p><mark>//</mark>Komentarz jednoliniowy w PHP</p><br />
            <p><mark>/*</mark>Komentarz wieloliniowy w PHP<mark>*/</mark></p><br />
        </div>,
        img: "./imgPHP/lesson1.JPG"
    },

    {
        id: "2",
        title: "Typy danych",
        desc: <div>
            <h1>Funkcja, która zwraca to co jest w nawiasach
                oraz informacje o typie danych oraz ilości znaków</h1><br />
            <p>var_dump('adasdsa'); <mark>//String</mark></p><br />
            <p>var_dump(123); <mark>//Integer</mark></p><br />
            <p>var_dump(25.4); <mark>// Float</mark></p><br />
            <p>var_dump(TRUE); <mark>//Boolean(true/false)</mark></p><br />
            <p>var_dump(array('asdasd', 12312, TRUE)); <mark>//Tablica</mark></p><br />
            <p>var_dump((object)'asd'); <mark>//Obiekt</mark></p>

        </div>,
        img: "./imgPHP/lesson2.JPG"
    },


    {
        id: "3",
        title: "Zmienne",
        desc: <div>
            <p><mark> $zmienna = TRUE;</mark><br />
                <mark> var_dump($zmienna);</mark>//Zwraca bool(true)<br />
                <mark> $zmienna2 = (bool) array('asd');</mark><br />
                <mark>  var_dump($zmienna2);</mark>/*Zwraca bool(true),<br />
                ponieważ array nie jest pusty(zwiera ,,asd")*/<br /><br />

                <mark> $zmienna3 = 123;</mark> //INT<br />
                var_dump($zmienna3);<br /><br />

                <mark>  $zmienna5 = 123.4;</mark> //Float(ucina zbyt duże liczby)<br />
                var_dump($zmienna5);<br /><br />

                <mark> $zmienna4 = 'Test';</mark>//String<br />
                var_dump($zmienna4);<br />
                <mark> echo 'John\'s $zmienna4';</mark> /*Wyśwetlenie tekstu,<br />
                jeżeli chcemy wprowadzić znak specjalny to poprzedzamy<br />
                go ukośnikiem /'*/<br /><br />

                <mark> echo "John\'s razem ze $zmienna4 ";</mark>/*Aby zmienna była<br />
                poprawnie czytana nalezy użyć podwójnego znaku " "*/<br /><br />

                //Nowa linia, ale w czystym php<br />
                echo "pierwsza linia \n druga linia";<br /><br />

//W podwójnych cudzysłowach możemy wywoływać np. zmienna.<br />
//Pojedynczych używamy przy tekscie.<br />
/*Jeżeli uzywamy HTML w php to podówjne znaczniki moga być<br />
problemm przy używaniu a href= \ " # \ >  / a>"*/</p>
        </div >,
        img: "./imgPHP/lesson3.JPG"
    },


    {
        id: "4",
        title: "",
        desc: <div>
            <h1></h1>
        </div>,
        img: "./imgPHP/lesson4.JPG"
    },


    {
        id: "1",
        title: "",
        desc: <div>
            <h1></h1>
        </div>,
        img: "./imgPHP/lesson5.JPG"
    },


    {
        id: "1",
        title: "",
        desc: <div>
            <h1></h1>
        </div>,
        img: "./imgPHP/lesson6.JPG"
    },


    {
        id: "1",
        title: "",
        desc: <div>
            <h1></h1>
        </div>,
        img: "./imgPHP/lesson7.JPG"
    },

    {
        id: "1",
        title: "",
        desc: <div>
            <h1></h1>
        </div>,
        img: "./imgPHP/lesson8.JPG"
    },

]