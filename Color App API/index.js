let colorSchemesContainer = document.getElementById('color-schemes')
let colorFooterHex = document.getElementById('footer')

document.getElementById('get-color').addEventListener( 'click', () => {
    let colorHex = document.getElementById('test').value;
    let schemeMode = document.getElementById('schemes').value;

    fetch("https://www.thecolorapi.com/scheme?hex=" + colorHex.substring(1) 
    + "&mode=" + schemeMode)
        .then( res => res.json() )
        .then( data =>  {

        colorSchemesContainer.innerHTML = '';

        data.colors.forEach(color => {
            let colorDiv = document.createElement('div');
            colorDiv.classList.add('color-schemes');
            colorDiv.style.backgroundColor = color.hex.value;
            colorSchemesContainer.appendChild(colorDiv);
        });
        colorFooterHex.innerHTML = ''

        data.colors.forEach(colorFoot => {
            let colorDivFoot = document.createElement('div');
            colorDivFoot.innerHTML = colorFoot.hex.value;
            colorFooterHex.appendChild(colorDivFoot);
        });
    });
});