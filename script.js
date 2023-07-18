const btn = document.getElementById('btn');
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const cards = document.getElementById('cards');
    let url = "https://reqres.in/api/users?page=1"
    let response = fetch(url);


    cards.innerHTML = `<div class="loaderbody"><div class="loader"></div></div>`
    let myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
        cards.innerHTML = " "
    }


    let mTimeout = setTimeout(mGreeting, 2000);

    function mGreeting() {
        response.then((v) => {
            return v.json()
        }).then((v) => {
            console.log(v);
            console.log(v.data);
            for (item in v.data) {
                console.log(v.data[item].id);

                cards.innerHTML += `  <div class="card">
                <div class="img">
                    
                    <img class="avatar" src="${v.data[item].avatar}" alt="">
                </div>
                <div class="discription">
                    <p><B>Name: </B>${v.data[item].first_name
                    } ${v.data[item].last_name
                    }</p>
                    <p><B>Id: </B>${v.data[item].id}</p>
                    <p><B>Email: </B> ${v.data[item].email}</p>
                </div>
            </div>`
            }
        })
    }









})