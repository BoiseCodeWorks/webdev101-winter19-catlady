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
      if (cat.ranAway) {
        continue
      }
        template += `
        <div class="col-6 border rounded shadow">
        <h2 id="name">${cat.name}</h2>
        <h5>Pet Count: <span id="pet-count">${cat.petCount}</span></h5>
        `
        template += cat.ranAway ? `<h5 id="ran">Ran Away</h5>` : "<h5></h5>"
        
        template += `
        <button type="button" class="btn btn-primary" id="pet" onclick="pet('${catName}')">Pet</button>
        <button type="button" class="btn btn-primary" id="reset" onclick="reset('${catName}')">Catnip</button>
        </div>
        `
    }
  }

  catsElem.innerHTML = template
}

function pet(catName) {
  let cat = cats[catName]
  if (cat.petCount < 10) {
    cats[catName].petCount++
  } else {
    cat.ranAway = true
    //Need anonymous function since reset method needed an argument
    setTimeout(function (){reset(catName)}, 3000)
  }
  drawCats()
}

function reset(catName) {
  let cat = cats[catName]
  cat.petCount = 0
  cat.ranAway = false
  drawCats()
}

drawCats()