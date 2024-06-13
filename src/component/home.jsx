import Nav from "./nav";
import Book from "./book";
import booksinfo from "../booksinfo";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
        <Book
          img={booksinfo[0].img}
          title={booksinfo[0].title}
          Price={booksinfo[0].Price}
          author={booksinfo[0].author}
        />
        <Book
          img={booksinfo[1].img}
          title={booksinfo[1].title}
          Price={booksinfo[1].Price}
          author={booksinfo[1].author}
        />
        <Book
          img={booksinfo[2].img}
          title={booksinfo[2].title}
          Price={booksinfo[2].Price}
          author={booksinfo[2].author}
        />
        <Book
          img={booksinfo[3].img}
          title={booksinfo[3].title}
          Price={booksinfo[3].Price}
          author={booksinfo[3].author}
        />
        <Book
          img={booksinfo[4].img}
          title={booksinfo[4].title}
          Price={booksinfo[4].Price}
          author={booksinfo[4].author}
        />
        <Book
          img={booksinfo[5].img}
          title={booksinfo[5].title}
          Price={booksinfo[5].Price}
          author={booksinfo[5].author}
        />
      </div>
    </>
  );
}
