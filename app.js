fetch("data.json")
    .then(response => response.json())
    .then(data => {
        afficher(data)


    });

//role: afficher les cartes recettes
//paramètre: tableau recettes
//return: rien
function afficher(tableauProduits) {

    // une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(recette => {
        let nom = recette.nom
        let srcImg = recette.img
        let description = recette.desc
        let preparation = recette.tempPreparation
        let cuisson = recette.tempCuisson
        let portion = recette.portions
        let ingredientsLi = liste(recette.ingredients)
        let etapeLi = Etape(recette.etapes)
        let aliment = recette.ingredients.aliment
        let etape = recette.etapes
        let numEtape = recette.etapes.numeroEtapes
        let descriptionEtape = recette.etapes.descEtape

        //cible l'endroit où je veux injecter mes cartes
        document.getElementById("cardContainer").innerHTML += `
                <section class="container">
            <div class="card">
                <div class="flex gap16 align-center">
                    <h2>${nom}</h2>

                    <a href="" class="little-btn"><span
                            class="material-icons material-icons-outlined">favorite</span></a>
                    <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                            share
                        </span></a>

                </div>
                <!-- 3 colonnes -->
                <div class="flex align-start gap32 mt-16">
                    <!-- Partie images -->
                    <div class="large-3 small-12 medium-4">
                        <div class="align-start flex gap16">
                            <div class="large-12">
                                <img src="${srcImg[0]}" alt="" class="responsive">
                                <div class="legende">${nom}</div>
                            </div>
                            <div class="large-4">
                                <img src="${srcImg[1]}" alt="" class="responsive">
                            </div>
                            <div class="large-4">
                                <img src="${srcImg[2]}" alt="" class="responsive">
                            </div>
                            <div class="large-4">
                                <img src="${srcImg[3]}" alt="" class="responsive">
                            </div>
                        </div>
                    </div>
                    <!-- Partie ingredients-->
                    <div class="gap32 large-3 small-12 medium-4">
                        <div class="flex gap16">
                            <p class="etiquette"><span class="material-icons material-icons-outlined">
                                    restaurant
                                </span>${portion}</p>
                            <p class="etiquette"><span class="material-icons material-icons-outlined">
                                    alarm
                                </span>${preparation}</p>
                            <p class="etiquette"><span class="material-icons material-icons-outlined">
                                    local_fire_department
                                </span>${cuisson}</p>
                        </div>
                        
                        <div>
                            <h2>Détails</h2>
                            <p class="text-orange">
                                ${description}
                            </p>
                        </div>
                        <div>

                            <h2>Ingrédients</h2>
                            <ul>
                              ${ingredientsLi}
                            </ul>
                        </div>

                    </div>

                    <!-- Partie etapes -->
                    <div class="large-6 small-12 medium-12">
                        <h2>Etapes</h2>
                        <ol>
                            ${etapeLi}
                           
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        `

    });
}
//FONCTION POUR MA LISTE D'INGREDIENTS
//role: afficher liste ingredients
//parametre: tableau ingredient
//return: rien
function liste(listeIngredients) {
    let listeIgt = ""

    listeIngredients.forEach(i => {
        listeIgt += `<li> ${i.quantite} ${i.unite} ${i.aliment} </li> `

    })
    return listeIgt
}
//FONCTION POUR MES ETAPES
//role: afficher les étapes
//paramètre: le tableau des étapes
//return: rien

function Etape(etapes) {
    let etape = " "

    etapes.forEach(i => {
        etape += `<li> ${i.descEtape} </li> `
    })

    return etape

}

fetch("articles-data.json")
    .then(response => response.json())
    .then(data => {
        afficherArticles(data)


    });
function afficherArticles(tab) {
    tab.forEach(article => {
        let titre=article.titre
        let img=article.img
        let resume=article.resume
        let auteur=article.auteur
        let date=article.date
        document.getElementById("cardArticle").innerHTML += `

            <div class="card large-6 flex gap align-center">
                <!-- partie gauche -->
                <img src="${img}" alt="" class="large-6 img-card" />

                <!-- partie de droite -->
                <div class="large-6 flex gap-12 ">
                    <h2>${titre}</h2>
                    <div class= "flex large-12 justify-between align-center">
                        <p>${date}</p>
                        <p>${auteur}</p>
                    </div>
                    <p>
                      ${resume}
                    </p>
                    <a href="" class="btn left">lire l'article</a>
                </div>
            </div>
`
    });
}





