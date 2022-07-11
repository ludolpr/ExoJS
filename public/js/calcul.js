const prompt = prompt("ezhfjezjf")
() =>
.textContent="mon texte ici"

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="dapp"></div>

    <script>
        // Root
        const dapp = document.getElementById('dapp')
        const d = document

        // Header
        const header = d.createElement('header')
        // const nom = prompt('Quel es votre nom svp ?')
        const h1 = d.createElement('h1')
        // h1.textContent = 'Coucou ' + nom
        h1.textContent = 'Coucou'
        dapp.appendChild(header).appendChild(h1)

        // Button first
        const section = d.createElement('section')
        const btnFirst = d.createElement('button')
        btnFirst.textContent = 'first btnf'
        console.log('doc', btnFirst)
        btnFirst.addEventListener('click', () => {
            alert('je suis l evenment du btn !')
        })
        dapp.appendChild(section).appendChild(btnFirst)


        // Section form
        const sectionForm = d.createElement('section')
        const inputFirst = d.createElement('input')
        const inputSecond = d.createElement('input')

        const fnCalcul = () => {
            const result = document.getElementById('result');
            console.log('result', inputFirst.value, selectOpe.value, inputSecond.value)

            // if (selectOpe.value === '+') {
            //     result.textContent = Number(inputFirst.value) + Number(inputSecond.value)
            // } else if (selectOpe.value === '-') {
            //     result.textContent = Number(inputFirst.value) - Number(inputSecond.value)
            // } else return 'error'

            switch (selectOpe.value) {
                case '+':
                    result.textContent = Number(inputFirst.value) + Number(inputSecond.value)
                    break;
                case '-':
                    Number(inputFirst.value) < Number(inputSecond.value) ?
                        result.textContent = Number(inputSecond.value) - Number(inputFirst.value) :
                        result.textContent = Number(inputFirst.value) - Number(inputSecond.value)
                    break;

                default:
                    result.textContent = 'une erreur est survenu'
                    break;
            }
        }

        inputFirst.setAttribute('type', 'number')
        inputFirst.setAttribute('placeholder', 'input first')

        inputFirst.addEventListener('input', (e) => {
            console.log('change')
            fnCalcul()
        })

        inputSecond.setAttribute('type', 'number')
        inputSecond.setAttribute('placeholder', 'input first')
        inputSecond.addEventListener('input', (e) => {
            console.log('change')
            fnCalcul()
        })

        const ope = ['+', '-']
        const selectOpe = document.createElement('select')

        ope.forEach(op => {
            console.log('loop', op)
            const optionOpe = document.createElement('option')
            optionOpe.value = op
            optionOpe.textContent = op
            selectOpe.appendChild(optionOpe)
        })

        selectOpe.addEventListener('input', (e) => {
            console.log('selectOpe', e.target.value)
            const afficheOpe = document.getElementById('listenSelect')
            switch (selectOpe.value) {
                case '+':
                    afficheOpe.textContent = 'Je suis l\' addition'
                    break;
                case '-':
                    afficheOpe.textContent = 'Je suis la soustraction'
                    break;

                default:
                    result.textContent = 'une erreur est survenu'
                    break;
            }

        })

        // const btnResult = document.createElement('button')

        // btnResult.textContent = 'calculer'
        // btnResult.addEventListener('click', () => {
        //     const result = document.getElementById('result');
        //     console.log('result', inputFirst.value, selectOpe.value, inputSecond.value)
        //     if (selectOpe.value === '+') {
        //         result.textContent = Number(inputFirst.value) + Number(inputSecond.value)
        //     } else if (selectOpe.value === '-') {
        //         result.textContent = Number(inputFirst.value) - Number(inputSecond.value)
        //     } else return 'error'
        // })

        const result = document.createElement('h2')
        result.setAttribute('id', 'result')

        const listenSelect = document.createElement('h2')
        listenSelect.setAttribute('id', 'listenSelect')

        dapp.appendChild(sectionForm)
        sectionForm.appendChild(inputFirst)
        sectionForm.appendChild(selectOpe)
        sectionForm.appendChild(inputSecond)
        // sectionForm.appendChild(btnResult)
        sectionForm.appendChild(result)
        sectionForm.appendChild(listenSelect)
    </script>
</body>

</html>