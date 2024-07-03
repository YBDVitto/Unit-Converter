const inputEl = window.document.getElementById("convert-input")
const inputBtn = window.document.getElementById("convert-btn")
const lengthEl = window.document.getElementById("lengthCnv")
const volumeEl = window.document.getElementById("volumeCnv")
const massEl = window.document.getElementById("massCnv")
const length = (value) => {
    const unit1 = value
    const unit2 = (unit1*3.281).toFixed(3)
    lengthEl.innerHTML = `
        ${unit1} meters = ${unit2} feet | ${unit1} feet = ${(unit1/3.281).toFixed(3)} meters
    `
}

const volume = (value) => {
    const unit1 = value
    const unit2 = (unit1/3.785).toFixed(3)
    volumeEl.innerHTML = `
        ${unit1} liters = ${unit2} gallons | ${unit1} gallons = ${(unit1*3.785).toFixed(3)} liters
    `

}

const mass = (value) => {
    const unit1 = value
    const unit2 = (unit1*2.205).toFixed(3)
    massEl.innerHTML = `
        ${unit1} kilos = ${unit2} pounds | ${unit1} pounds = ${(unit1/2.205).toFixed(3)} kilos
    `
}

inputBtn.addEventListener('click', () => {
    const inputValue = inputEl.value
    length(inputValue)
    volume(inputValue)
    mass(inputValue)

})
