let listeA = [{id:1, nom:"amine", moyenne:14}, 
            {id:2, nom:"mohamed", moyenne:13},
            {id:3, nom:"youssef", moyenne:16}
            ]
///map =>
let filterNom = listeA.filter(function(item){
    return item.nom == "amine"
})
console.log(filterNom)



