const menu = document.querySelector("#btn-menu")

menu.addEventListener("click", () => {
    console.log("Clicou aqui")
}
)

const botaoEstouComSorte = document.querySelector(`form [type="button"]`)

botaoEstouComSorte.addEventListener("click", () => {
    location.href = "https://www.hcode.com.br"
})