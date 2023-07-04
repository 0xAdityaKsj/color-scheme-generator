const seedColorEl = document.getElementById('seed-color')
const btnEl = document.getElementById('btn')
const colorSchemeEl = document.getElementById('color-scheme')
const mainEl = document.getElementById('main')





btnEl.addEventListener("click", function () {
    let colorPicked = seedColorEl.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${colorSchemeEl.value}&count=6`)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            mainEl.innerHTML = `<div>
                                    <img src=${data.colors[0].image.bare}>
                                    <p>${data.colors[0].hex.value}</p>
                                </div>
                                <div>
                                    <img src=${data.colors[1].image.bare}>
                                    <p>${data.colors[1].hex.value}</p>
                                </div>
                                <div>
                                    <img src=${data.colors[2].image.bare}>
                                    <p>${data.colors[2].hex.value}</p>
                                </div>
                                <div>
                                    <img src=${data.colors[3].image.bare}>
                                    <p>${data.colors[3].hex.value}</p>
                                </div>
                                <div>
                                    <img src=${data.colors[4].image.bare}>
                                    <p>${data.colors[4].hex.value}</p>
                                </div>
                                <div>
                                    <img src=${data.colors[5].image.bare}>
                                    <p>${data.colors[5].hex.value}</p>
                                </div>`
        })
})


