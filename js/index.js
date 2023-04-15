let button = document.querySelector(".btnSend")
button.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        input.value = ''
        input.checked = false
    })
    alert("Nenhum dado foi enviado, a página é apenas para mostrar o lado do front-end")
})