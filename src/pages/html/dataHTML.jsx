export const dataHTML = [

    {
        id: "1",
        title: "Lekcja pierwsza",
        desc: <div>

            <p>
                <mark>!DOCTYPE html</mark> -> Wszystkie documenty zaczynają się od tej deklaracji,
                która reprezentuje typ dokumentu oraz pomaga przegląrkom
                w poprawnym wyswietleniu strony<br /><br />
                <mark>html</mark> -> Znacznik, który musi pojawić się u góry strony, przed wszystkimi tagami<br /><br />
                <mark> h1</mark> -> Nagłowek, którego znacziki zaczynają się od h1
                i kończą sięna h6(Od najważniejszego nagłówka do najmniej waznego)<br /><br />
                <mark>p</mark> -> paragraf(zwykły znacznik tekstu)<br /><br />
                <mark>br</mark> -> nowa linia
            </p>
        </div>,
        img: "./imgHTML/lesson1.JPG"
    },
    {
        id: "2",
        title: "Formatowanie",
        desc:
            <div>
                <h2>Elementy formatowania HTML zostały zaprojektowane do wyświetlania specjalnych typów tekstu</h2><br /><br />
                <b>Tekst pogrubiony</b>
                <br />     <br />
                <strong>Ważny tekst</strong>
                <br />     <br />
                <i>Kursywa</i>
                <br />     <br />
                <em>Wyrózniony tekst</em>
                <br />     <br />
                <mark>Tekst zaznaczony</mark>
                <br />     <br />
                <small>Mniejszy tekst</small>
                <br />     <br />
                <del>Tekst usunięty</del>
                <br />     <br />
                <ins>Wstawiony tekst</ins>
                <br />     <br />
                <sub>Tekst indeksu dolnego</sub>
                <br />     <br />
                <sup>Tekst w indeksie górnym</sup>
            </div>,
        img: "./imgHTML/lesson2.jpg"
    },
    {
        id: "3",
        title: "Elementy cytowania",
        desc:
            <div>
                <blockquote>Cytat z innego źródła</blockquote>
                <br />     <br />
                <q>Krótki cytat w znacznikach</q>
                <br />     <br />
                <abbr title="Informacje">Najedź myszką</abbr>
                <br />     <br />
                <address>Dane kontaktowe autora/właściciela(email, nr. telefonu itp)</address>
                <br />     <br />
                <cite>Tytuł pracy twórczej(książka, wiersza, piosenka, film itp)</cite>
                <br />     <br />
                <bdo dir="rtl">tekst napisany od prawej do lewej </bdo>

            </div>,
        img: "./imgHTML/lesson3.jpg"
    },
    {
        id: "4",
        title: "CSS",
        desc:
            <div>
                <p>
                    <mark>head</mark> -> Dodanie nowej sekcji<br /> <br />

                    <mark>link rel="stylesheet" href="styles.css"</mark> ->       Dodanie linku do zewnętrznego arkuszu CSS<br /> <br />
                    Można podać także link www.___.css zawierający CSS<br /> <br />


                    <h1>CSS mozna dodać do dokumentu na 3 sposoby:</h1><br /> <br />
                    <mark>Inline</mark> -> Wewnątrz elementu za pomoca atrybutu ,,style"<br /> <br />
                    <mark>Internal</mark> -> Wewnątrz sekscji head za pomoca elementu style<br /> <br />
                    <mark>External</mark> -> Za pomocą zewnetrznego pliku poprzez link<br /> <br />

                    <mark>h1 style ="color:red;"></mark> Zmiana stylu h1 -> kolor czerwony h1<br /> <br />

                    <mark>background-color: blue;</mark> -> Zmiana tła na niebieski<br /> <br />

                </p>
            </div>,
        img: "./imgHTML/lesson4.jpg"
    },
    {
        id: "5",
        title: "Hiperłącza",
        desc:
            <div>
                <p>
                    <mark>a href="https://www/w3schools.com/"> Link do strony /a></mark> -> Link, który prowadzi do strony
                    <br /> <br />
                    <strong>Argument <mark>target</mark> określa w jaki sposób zostanie otwart link</strong>
                    <br /> <br />
                    <mark>_self</mark> -> domyślna wartość, otwiera dokument w tym samym oknie w którym się znajdujemy<br /> <br />
                    <mark>_blank</mark> -> otwiera dokument w nowym oknie lub karcie<br /> <br />
                    <mark>_parent</mark> -> otwiera dokument w ramce nadrzędnej<br /> <br />
                    <mark>_top</mark> -> otwiera dokument w całej treści okna<br /> <br />

                    <mark>a href="https://www.w3schools.com/" target="_blank" </mark>
                    <br /> <br />

                    <mark>a href="html_images.asp"></mark>Link lokalny(bez http oraz com/pl)/a>
                    <br /> <br />
                    <mark>a href="/css/default.asp"></mark>Link lokalny(bez http oraz com/pl)/a>
                    <br /> <br />
                    <mark>img src="https://www.w3schools.com/html/smiley.gif"></mark>link do zdjęcia, które się wyświetli
                    <br /> <br />
                    <mark>a href="mailto: krystianholubowicz@gmail.com">Link do maila/a></mark>Link, który automatycznie otwiera program mailowy
                    <br /> <br />
                    <mark>button onclick="document.location = 'https://www.w3schools.com/html/smiley.gif'">Link wpisany w przycisk/button> </mark>link wpisany w przycisk
                </p>
            </div >,
        img: "./imgHTML/lesson5.jpg"
    }
]