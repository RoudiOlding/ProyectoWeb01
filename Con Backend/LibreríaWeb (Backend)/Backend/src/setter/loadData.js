const { getRegisterBookService } = require("../service/book.service");


async function seedBook() {
    try {
      const books = require("./bookData.js");
      books.map((book, id) => {
        const body = {
          id:id,
          qualification:book.formato,
          author:book.autor,
          editorial:book.editorial,
          category:book.categoria,
          anio:book.anio,
          language:book.idioma,
          nropages:book.nPaginas,
          binding:book.encuadernacion,
          isbn13:book.ISBN13,
          photobook:book.FotoLibro,
          title:book.titulo,
          cont:book.pedidos,
          ReturnDate:book.FechaDevolucion,
        };
        getRegisterBookService(body)
          .then((result) => {
            console.log("Data inserted:", result);
          })
          .catch((error) => {});
      });
      console.log("Libros agregadas con éxito.");
    } catch (error) {
      console.log("error on seedBook");
    }
  }

  const loadData = async () => {
    const seeders = [
        seedBook,
    ];
  
    for (let seed of seeders) {
      await seed();
    }
  };
  
  module.exports = loadData;
