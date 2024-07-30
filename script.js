console.log("cria o botao externo v10");
var nonceInput = document.querySelector('#nonce');

var nonceHash = '123456';

if (nonceInput) {
    var nonceHash = nonceInput.getAttribute('data-hash');
}
  
var button = document.createElement('button');
button.textContent = 'Botão inserido por script do primeiro nível, (liberado pela safelist ou adicionado com src pelo GTM)';
button.style.position = 'fixed';
button.style.bottom = '70px';
button.style.left = '20px';
button.style.padding = '10px';
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.borderRadius = '4px';
button.style.border = 'none';
  
document.body.appendChild(button);

var scriptContent = `
    var button = document.createElement('button');
    button.textContent = 'Botão inserido por script inline dentro de um script da safelist -> hash ${nonceHash}';
    button.style.position = 'fixed';
    button.style.bottom = '120px';
    button.style.left = '20px';
    button.style.padding = '10px';
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.style.borderRadius = '4px';
    button.style.border = 'none';
    
    document.body.appendChild(button);
;`

var externalScript = document.createElement('script');
externalScript.textContent = scriptContent;
externalScript.setAttribute('nonce', nonceHash);
document.head.appendChild(externalScript);