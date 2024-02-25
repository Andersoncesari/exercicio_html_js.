document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form-deposito')
    const inputa = document.getElementById('campo-a')
    const inputb = document.getElementById('campo-b')
    const erromensagem = document.querySelector('.error-messagem')
    const sucessomensagem = document.querySelector('.success-message')

    form.addEventListener('submit', function(a){
        a.preventDefault()

        erromensagem.style.display = 'none'
        sucessomensagem.style.display = 'none'

        if (inputa.value === '' || inputb.value === '') {
            erromensagem.innertext = 'preencha este campo'
            erromensagem.style.display = 'block'
            return
        }

        const cama = parseInt(inputa.value)
        const camb = parseInt(inputb.value)

        if (cama <0 || cama >10) {
            erromensagem.style.display = 'block'
            return
        }

        if (camb <1 || camb >11 || camb <= cama) {
            erromensagem.innertext = 'O número do campo B deve ser maior que o número do campo A'
            erromensagem.style.display = 'block'
            return
        }

        sucessomensagem.innertext = 'Parabens'
        sucessomensagem.style.display = 'block'

        

        

        inputa.addEventListener('input', function(){
            sucessomensagem.style.display = 'none'
            erromensagem.style.display = 'none'
        })

        inputb.addEventListener('input', function(){
            sucessomensagem.style.display = 'none'
            erromensagem.style.display = 'none'
        })


    })
})