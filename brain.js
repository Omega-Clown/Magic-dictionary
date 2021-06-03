console.log('Welcome to Magic Dictionary')


let form = document.getElementById('wordLangForm');
// The api URL
// https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>
form.addEventListener('submit', subFunc)
function subFunc(event) {
    event.preventDefault();
    let input = document.getElementById('textType').value;
    let label = document.getElementById('label').value;
    if (label === "English (US)") {
        label = "en_US"
    } else {
        label = label;
    }
    let url = `https://api.dictionaryapi.dev/api/v2/entries/${label}/${input}`
    // Conjusted Logic defficult to understand
    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        result = data;
        let len = result[0].meanings.length
        for (let i = 0; i < len; i++) {
            const element = result[0].meanings[i];

            let len2 = element.definitions.length;
            for (let j = 0; j < len2; j++) {
                let elem = element.definitions[j]
                // console.log(elem.definition)
                let def = elem.definition
                showArea = document.getElementById('showDef')
                // console.log(def)
                showArea.innerHTML += `<h5>➡️ ${def}</h5>`;
            }
        }
    let textArea = document.getElementById('textType')
    textArea.value = "";
    }).catch(function (error) {
        let showAlert = document.getElementById('showAlert')
        showAlert.innerHTML = `<div class="alert alert-danger" role="alert">
        <b>${result.title}.</b> ${result.resolution}.
      </div>`
      setTimeout(() => {
          showAlert.innerHTML = '';
      }, 2000);
    })

}

form.addEventListener('submit', subFunc);
let submitBtn = document.getElementById('submit').addEventListener('click',clearArea);
function clearArea(){
    let showArea = document.getElementById('showDef')
    showArea.innerHTML = ""
}

