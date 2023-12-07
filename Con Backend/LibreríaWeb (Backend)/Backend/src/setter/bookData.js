const books = [
    {
        "formato": "Libro f\u00edsico",
        "autor": "Joyce dunbar",
        "editorial": "Edeb\u00e9",
        "categoria": "Infantil y juvenil",
        "anio": "2007",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978842301",
        "titulo": "Software la Superbabosa",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg",
        "nPaginas": "104",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Flores masias, eward; huarote zegarra, raul",
        "editorial": "Fondo editorial universidad c\u00e9sar vallejo",
        "categoria": "Ingenieria",
        "anio": "2019",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978612402",
        "titulo": "Gestion de proyecto de Software",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/20/82/2082a4e5a59dcf7e8531feb8e488c30b.jpg",
        "nPaginas": "128",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Vallejos,  mariela",
        "editorial": "Cuarto propio",
        "categoria": "Ciencias humanas",
        "anio": "2023",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978956303",
        "titulo": "Reemplazada por un Software",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/a0/b2/a0b2c729a04d61a9348942dff8dbaa39.jpg",
        "nPaginas": "214",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Ian sommerville",
        "editorial": "Pearson",
        "categoria": "Computadoras y tecnolog\u00eda",
        "anio": "2011",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978607304",
        "titulo": "Ingenier\u00eda de Software",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/f8/78/f878362b2a6c71f5e7125eafff09a82c.jpg",
        "nPaginas": "792",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Juan f. mateos",
        "editorial": "Anaya multimedia",
        "anio": "2008",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978844105",
        "categoria": "Dispositivos lectores de libros digitales",
        "titulo": "Edici\u00f3n de Medios Digitales con Software Libre (Tratamiento de V\u00eddeo, Audio e Imagen con Software Gratuito) (Gu\u00edas Pr\u00e1cticas)",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/b2/4f/b24f5a1c7adddcc154ad324483235c72.jpg",
        "nPaginas": "368",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Peter h\u00fcnermann",
        "editorial": "Universidad alberto hurtado",
        "categoria": "Ciencias humanas",
        "anio": "2014",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978956306",
        "titulo": "El El Vaticano II como software de la iglesia actualii",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/98/f8/98f851577377e72513d555512f55617f.jpg",
        "nPaginas": "348",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Joyce dunbar",
        "editorial": "Edebe",
        "categoria": "Infantil",
        "anio": "1990",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978842307",
        "titulo": "Goodreads Software y el estupor inform\u00e1tico",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/ef/e8/efe821552b8ec7f23174fbfff1755870.jpg",
        "nPaginas": "100",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Joyce dunbar",
        "editorial": "Edebe",
        "categoria": "Literatura inglesa",
        "anio": "1992",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978842308",
        "titulo": "Software y el Arte de Hacer Media",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/46/f2/46f283d23180e936bb251655dbc699ae.jpg",
        "nPaginas": "120",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Joyce dunbar",
        "editorial": "Edebe",
	    "categoria": "Literatura inglesa",
        "anio": "2004",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978842309",
        "titulo": "Software, La Superbabosa",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/21/6f/216f45ed6c90bd079941db392d9f9a3a.jpg",
        "nPaginas": "186",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "David squires,david mcdougall",
        "editorial": "Morata",
        "anio": "2001",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978847110",
        "categoria": "Recursos y materiales did\u00e1cticos para docentes                                            Tecnolog\u00edas educativas",
        "titulo": "Como Elegir y Utilizar Software Educativo",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/5c/25/5c2576ff6c47d96229b0123281eabcf7.jpg",
        "nPaginas": "176",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Jose manuel ortegacandel",
        "editorial": "Marcombo",
        "nPaginas": "388",
	    "categoria": "Ciencias basicas",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978607511",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/0e/6e/0e6ec68a1786cc8630a06d1265b4fc65.jpg",
        "titulo": "Desarrollo Seguro en Ingenier\u00eda del Software",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "V\u00edlchez",
        "editorial": "Alpha editorial s.a",
        "categoria": "Ciencias basicas",
        "anio": "2021",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "615",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978958712",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/c8/5e/c85e68c9a9823ec4bf06fd7d33e23bae.jpg",
        "titulo": "MATEMATICA DISCRETA CON APOYO SOFTWARE",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "David anfinson,ken quamme",
        "editorial": "Prentice hall",
        "anio": "2009",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "720",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978848313",
        "categoria": "Certificaci\u00f3n inform\u00e1tica: cisco",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/f0/73/f0737908097faa0390c221af2dfab719.jpg",
        "titulo": "Fundamentos de Tecnolog\u00eda de la Informaci\u00f3n: Hardware y Software Para pc",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Alicia durango",
        "editorial": "Createspace",
        "anio": "2015",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "188",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978151914",
        "categoria": "Gesti\u00f3n de proyectos empresariales                                            Programaci\u00f3n inform\u00e1tica - desarrollo de software",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/c7/b1/c7b1825c6ae7e95a758e0aad9a319de2.jpg",
        "titulo": "Dise\u00f1o de Software: 2\u00aa Edici\u00f3n",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Genero",
        "editorial": "Ra-ma s.a. editorial y publicaciones",
        "anio": "2014",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "314",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978849915",
        "categoria": "Ingenier\u00eda del software",
        "FotoLibro": "https://image.cdn0.buscalibre.com/5b5934f317e47391798b4568.__RS180x180__.jpg",
        "titulo": "M\u00e9todo de investigaci\u00f3n en ingenier\u00eda del software",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Joseph joyner",
        "editorial": "Mihails konoplovs",
        "anio": "2015",
        "idioma": "Ingl\u00e9s",
        "nPaginas": "34",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978168216",
        "categoria": "Gesti\u00f3n de proyectos empresariales                                            Programaci\u00f3n inform\u00e1tica - desarrollo de software",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/8c/28/8c28baf1f618aab22fa11871126da4d8.jpg",
        "titulo": "Devops for Beginners: Devops Software Development Method Guide for Software Developers and it Professionals (libro en Ingl\u00e9s)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Robert martin",
        "editorial": "Pearson",
        "anio": "2008",
        "idioma": "Ingl\u00e9s",
        "nPaginas": "464",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978013217",
        "categoria": "Pruebas y verificaci\u00f3n de software",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/10/fb/10fb170d7732b7dca25ebb81ded2572d.jpg",
        "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship (libro en Ingl\u00e9s)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Richard m stallman",
        "editorial": "Traficantes de sue\u00f1os",
        "anio": "2004",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "210",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978849318",
        "categoria": "Pol\u00edtica y gobierno                                            Programaci\u00f3n inform\u00e1tica - desarrollo de software",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/fd/ef/fdef4ebc27a755362e3f74c728ca9532.jpg",
        "titulo": "Software Libre Para una Sociedad Libre",
        "pedidos": "0",        
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Robert martin",
        "editorial": "Pearson",
        "anio": "2017",
        "idioma": "Ingl\u00e9s",
        "nPaginas": "432",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978013419",
        "categoria": "Pruebas y verificaci\u00f3n de software                                            Arquitectura y dise\u00f1o l\u00f3gico de ordenadores",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/71/8a/718a4cccdea44cf4b37c74a93f5bf96d.jpg",
        "titulo": "Clean Architecture: A Craftsman&#39; S Guide to Software Structure and Design: A Craftsman&#39; S Guide to Software Structure and Design (Robert c. Martin Series) (libro en Ingl\u00e9s)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Miguel jim\u00e9nez",
        "editorial": "Editorial universidad icesi",
        "categoria": "Libros",
        "anio": "2020",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "210",
        "ISBN13": "978958520",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/5c/8b/5c8b7c17593470d63c533a4cfe0fa359.jpg",
        "titulo": "Monitores Din\u00e1micos de Software \u2013 Despliegue de Software \u2013 Monitoreo de Espectro",
        "disponibilidad": true,
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Ramon venturaroque hernandez",
        "editorial": "Colofon",
        "categoria": "Lenguajes de programaci\u00f3n",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "116",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978607621",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/c3/6f/c36f5ad308b6ef01cc9147e8453c0269.jpg",
        "titulo": "Temas Selectos de Desarrollo de Software",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Oscar alejandro arreola ramirez",
        "editorial": "Independently published",
        "anio": "2018",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "284",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978179122",
        "categoria": "Tecnolog\u00edas educativas                                            Control de calidad industrial",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/63/64/636428935f8d8d739c6a6bc85b2219e8.jpg",
        "titulo": "C\u00f3mo ser un Tester: Introducci\u00f3n a las Pruebas de Software",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Varios autores",
        "editorial": "Ediciones de la u",
        "categoria": "Temas varios",
        "anio": "2013",
        "nPaginas": "314",
        "ISBN13": "978958723",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/b9/e2/b9e291a609ff946ca348bd8f015a6af9.jpg",
        "titulo": "M\u00e9todos de Investigaci\u00f3n en la Ingenier\u00eda del Software",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Fernando rodr\u00edguez di\u00e9guez",
        "editorial": "Ra-ma s.a. editorial y publicaciones",
        "Tema": "Informatica, informatica",
        "categoria": "Temas varios",
        "anio": "2013",
        "nPaginas": "314",
        "idioma": "Espa\u00f1ol",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978849924",
        "categoria": "Ingenier\u00eda del software",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/27/79/27793f8a8b46674f134511a9dcd20e57.jpg",
        "titulo": "Integraci\u00f3n de Componentes Software en P\u00e1ginas Web (MF0951 2)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Bethesda softworks                                                  jornadas de software libre de la universidad de c\u00e1diz",
        "editorial": "Dark horse books",
        "anio": "2020",
        "idioma": "Ingl\u00e9s",
        "nPaginas": "192",
        "encuadernacion": "Tapa dura",
        "ISBN13": "978150625",
        "categoria": "Historia del arte                                            El arte en videojuegos                                            Cultura popular                                            Juegos de ordenador y en l\u00ednea",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/00/41/00411b323a366836a790780c8dbfe440.jpg",
        "titulo": "The art of Doom: Eternal (libro en Ingl\u00e9s)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Gutierrez",
        "editorial": "Alfaomega grupo editor",
        "anio": "2008",
        "categoria": "Temas varios",
        "idioma": "Espa\u00f1ol",
        "nPaginas": "144",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978970126",
        "FotoLibro": "https://images.cdn2.buscalibre.com/fit-in/180x180/70/c6/70c62270b5a0f03d5e5fc1a444d1873d.jpg",
        "titulo": "Software Gratis y Libre: Encuentre Programas Gratis Para su Computadora ya",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "William vance",
        "editorial": "Joiningthedotstv limited",
        "anio": "2020",
        "idioma": "Espa\u00f1ol",
        "nro-paginas": "524",
        "encuadernacion": "Tapa blanda",
        "ISBN13": "978191327",
        "Categor\u00eda(s)": "Arquitectura y dise\u00f1o l\u00f3gico de ordenadores",
        "imagen-portada-url": "https://images.cdn2.buscalibre.com/fit-in/180x180/4f/26/4f2645629de3977a5eca53d9b9cfaac9.jpg",
        "titulo": "Arquitectura Limpia: 3 en 1",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Warren sack",
        "editorial": "Mit press",
        "anio": "2019",
        "idioma": "Ingl\u00e9s",
        "nPaginas": "400",
        "encuadernacion": "Tapa dura",
        "ISBN13": "978026228",
        "categoria": "Programaci\u00f3n inform\u00e1tica - desarrollo de software",
        "FotoLibro": "https://images.cdn3.buscalibre.com/fit-in/180x180/da/9f/da9f82dd7c5decc520a098f0e693d5ce.jpg",
        "titulo": "The Software Arts (Software Studies) (libro en Ingl\u00e9s)",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
    {
        "formato": "Libro f\u00edsico",
        "autor": "Varios autores",
        "editorial": "Ra - ma, editorial",
        "idioma": "Ingl\u00e9s",
        "ISBN13": "9788499642154",
        "nPaginas": "400",
        "encuadernacion": "Tapa dura",
        "categoria": "Ingenier\u00eda del software",
        "FotoLibro": "https://images.cdn1.buscalibre.com/fit-in/180x180/f4/b5/f4b54d0502a5284930fc5600b466590b.jpg",
        "titulo": "Desarrollo De Software Dirigido Por Modelos",
        "pedidos": "0",
        "FechaDevolucion": "2023-12-02T12:19:49.451Z",
    },
];
module.exports = books;
