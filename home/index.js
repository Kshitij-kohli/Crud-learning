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

selectedData = 0;

let tableContainer = document.getElementById("product-list");
if (tableContainer) {
    setData();
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let id = params.id; // "some_value"
  if(id){
    const readData = productData.find(product => product.id === parseInt(id,10));
    if(readData && readData.id){
        document.getElementById('read-name').innerHTML = readData.name;
        document.getElementById('read-desc').innerHTML = readData.description;
        document.getElementById('read-price').innerHTML = readData.price;
    }
  }

function setData() {

    productData.forEach(product => {
        var newRow = document.createElement('tr');
        let trData = `<td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td> <a class="button read-button" href="read.html?id=${product.id}">Read</a>
            <a class="button edit-button" href="update.html?id=${product.id}">Edit</a>
            <button class="button delete-button">Delete</button>
        </td>`
        newRow.innerHTML = trData;

        tableContainer.appendChild(newRow);
    }
    )
}
