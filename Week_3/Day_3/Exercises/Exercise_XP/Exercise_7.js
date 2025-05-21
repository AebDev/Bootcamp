let allBooks = [
    {
        title: "The Dark Tower",
        author: "Stephen King",
        image: "https://upload.wikimedia.org/wikipedia/en/4/49/The_Dark_Tower_teaser_poster.jpg",
        alreadyRead: true,
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780345534835/primary/renditions/700",
        alreadyRead: false,
    }
];

div = document.createElement("div");

for (book of allBooks) {
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.width = 100;
    img.src = book.image;
    p.innerHTML = `${book.title} written by  ${book.author}`;
    div.appendChild(p);
    div.appendChild(img);
    if (book.alreadyRead) {
        p.style.color = "red";
    }
}

document.querySelector(".listBooks").appendChild(div);