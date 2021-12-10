var documents = ['CNH', 'CPF', 'RG']

function listDocuments() {
    var ul = document.getElementById('documents')
    ul.innerHTML = ''

    documents.forEach(function (d) {
        var li = document.createElement('li')
        var text = document.createTextNode(d)
        li.appendChild(text)
        ul.appendChild(li)
    })

}