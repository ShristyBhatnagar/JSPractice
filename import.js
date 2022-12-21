
import Book from "./script.js"
const nBook=new Book(
    "Malgudi days",
    "M K Gandhi",
    43,
    14,
    2,
    "Mystery"


)
console.log(nBook)
const paste=`
<main>
<article>
<ul>
<li>Title-${nBook.title}</li>
<li>Author-${nBook.author}</li>
<li>Pages-${nBook.pages}</li>
<li>Heading-${nBook.headings}</li>
<li>Footer-${nBook.footer}</li>
<li>Theme-${nBook.theme}</li>
</ul>
</article>
</main>`;
document.body.innerHTML=paste;
console.log("the book title",Book)