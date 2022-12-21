
import Book from "./script"
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
<li>title</li>
<li>author</li>
<li>pages</li>
<li>headings</li>
<li>footer</li>
<li>theme</li>
</ul>
</article>
</main>`;
document.body.innerHTML=paste;
console.log("the book title",Book)