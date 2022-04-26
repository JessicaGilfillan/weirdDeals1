let button = document.querySelector('button'); 

button.onclick = () => {
    fetch('https://jessicagilfillan.github.io/weirdDeals1/products.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}; 

function appendData(data) {
    var mainContainer = document.querySelector("main");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Product Info: ' + data[i].name + ' ' + data[i].price;
        mainContainer.appendChild(div);
    }
}
