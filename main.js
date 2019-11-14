let catsElem = document.getElementById("cats")

let cats = {
  Snibbley: {
    name: "Mr. Snibbley",
    petCount: 0,
    ranAway: false
  },
  Pockets: {
    name: "Pockets",
    petCount: 0,
    ranAway: false
  }
}

function drawCats() {
  for (const catName in cats) {
    if (cats.hasOwnProperty(catName)) {
      const cat = cats[catName];
    }
  }
}

function pet() {
  
}

function reset() {

}