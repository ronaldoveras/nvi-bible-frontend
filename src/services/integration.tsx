async function loadBooks() {
        const res = await fetch('https://nameless-mesa-59302.herokuapp.com/api/v1/books')
        const json = await res.json()
        console.log(json)
        return json
};

async function retrieveVerse(book, chapter, verse) {
    const res = await fetch('https://nameless-mesa-59302.herokuapp.com/api/v1/nvi?id=' + book + '&cap=' + chapter + '&vs=' + verse)
    const json = await res.text()
    
    return json

};

export {loadBooks, retrieveVerse};

