const root = document.getElementById('root')
const preloader = document.getElementById('preloader')

const getData = async(id) => {
    await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => {
        root.innerHTML += `<h2>Name: ${data.name}</h2>
        <p>Username: <b>${data.username}<b><br>
        Email: <b>${data.email}<br>
        ID: <b>${data.id}</p><hr>`
    })
}

const deletePreloader = () => {
    preloader.style.display = 'none'
}

const func = async() => {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
    await getData(6)
    await getData(7)
    await getData(8)
    await getData(9)
    await getData(10)
    deletePreloader()
}

func()