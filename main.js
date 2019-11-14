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
  let template = ""
  for (let catName in cats) {
    if (cats.hasOwnProperty(catName)) {
      let cat = cats[catName];
      template += `
      <div class="col-6 border rounded shadow">
      <h2 id="name">${cat.name}</h2>
      <h5>Pet Count: <span id="pet-count">${cat.petCount}</span></h5>
      `
      template += cat.ranAway? `<h5 id="ran">Ran Away</h5>`: "<h5></h5>"
      
      template += `
      <button type="button" class="btn btn-primary" id="pet" onclick="pet()">Pet</button>
      <button type="button" class="btn btn-primary" id="reset" onclick="reset()">Catnip</button>
    </div>
      `
    }
  }
  catsElem.innerHTML = template
}

function pet() {
  
}

function reset() {

}

drawCats()