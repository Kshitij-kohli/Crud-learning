//creating array of objects to store product data
const productData = [{
    id: 1,
    name: 'test1',
    description: 'Smith Smith Smith',
    price: '$2',
},
{
    id: 2,
    name: 'test2',
    description: 'test2test2test2 test2test2 test2test2',
    price: '$21',
},
{
    id: 3,
    name: 'test3',
    description: 'test3 test3 test3 test3',
    price: '$3',
},
{
    id: 4,
    name: 'test4',
    description: 'test4 test4 test4 test4',
    price: '$34',
}];

//fetch table data using id from DOM in a variable
let tableContainer = document.getElementById("product-list");
if (tableContainer) {
    setData();
}

//var newRowButton= document.getElementById('')

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let id = params.id; // "some_value"
if (id) {
    const readData = productData.find(product => product.id === parseInt(id, 10));
    if (readData && readData.id) {
        document.getElementById('read-name').innerHTML = readData.name;
        document.getElementById('read-desc').innerHTML = readData.description;
        document.getElementById('read-price').innerHTML = readData.price;
    }
}

function setData() {
    tableContainer.innerHTML = '';
    const tableHead = document.createElement('tr');
    tableHead.setAttribute('class','header')
    const theadData = `<th>ID</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Action</th>`;
    tableHead.innerHTML = theadData;
    tableContainer.appendChild(tableHead);

    productData.forEach((product, index) => {
        var newRow = document.createElement('tr');
        //passing HTML as template string
        let trData = `<td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td> <a class="button1 read-button" href="read.html?id=${product.id}">Read</a>
            <a class="button1 edit-button" href="update.html?id=${product.id}">Edit</a>
            <button class="button1 delete-button" onclick="deleteData(${index})">Delete</button>
        </td>`

        //checking if it's last index
        if (index === productData.length - 1) {
            trData = `<td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td> <a class="button1 read-button" href="read.html?id=${product.id}">Read</a>
            <a class="button1 edit-button" href="update.html?id=${product.id}">Edit</a>
            <button class="button1 delete-button" onclick="deleteData(${index});">Delete</button>
            <button id="create-new-product" class="new-button button1" onclick="newRow(${index});">Create new product</button>
        </td>`
        }
        //Appending data and HTML in new row.
        newRow.innerHTML = trData;
        tableContainer.appendChild(newRow);
    }
    )
}

function newRow(index) {
    var newRow = document.createElement('tr');

    //tableContainer.insertRow(index+1);
    let trData = `<td>${productData.length+1}</td>
        <td><input id="dataName"></input></td>
        <td><input id="dataDescription"></input></td>
        <td><input id="dataPrice"></input></td>
        <td> <button class="button1 save-button" onclick="saveData()";>save</button>
            <button class="button1 cancel-button" onclick="setData()";>Cancel</button>
        </td>`
    newRow.innerHTML = trData;
    tableContainer.appendChild(newRow);
    document.getElementById("create-new-product").remove();
}

function saveData() {
    let newData = {
        id: productData.length+1,
        name: document.getElementById("dataName").value,
        description: document.getElementById("dataDescription").value,
        price: document.getElementById("dataPrice").value,
    }
    productData.push(newData);
    setData();
}


function deleteData(index){
    alert(`Are you sure you want to delete row number ${index+1}`)

}