// il faux ecrir books.ts pour activer le typebook

// enum typebook{
//     HISTOIRE='histoire',
//     POLICIER='policier',
//     INFORMATIQUE='informatique',
//     ROMAN='roman',
//     RELIGION='religion'
// }

export const books = [
{
        author:'Moshe',
        titre: 'Nodejs pour les nul',
        price:10,
        publication:'2020',
        description: 'livre qui permet d aprendre node.js',
        types:'informatique'
        // types:typebook.INFORMATIQUE
},
{
    author:'maupassant',
    titre: 'bel ami',
    price:30,
    publication:'1980',
    description: 'roman super ',
    types:'roman'
    // types:typebook.ROMAN
},
{
    author:'hafes haim',
    titre: 'micna beroua',
    price:50,
    publication:'1000',
    description: 'aprendre la micna',
    types:'religion'
    // types:typebook.RELIGION
},
{
    author:'david',
    titre: 'histoire de la guerre',
    price:45,
    publication:'1990',
    description: 'histoire de toute les guerre',
    types:'histoire'
    // types: typebook.HISTOIRE
},
];