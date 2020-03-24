document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("login_form");
    const div2 = document.getElementById("seed")

    console.log(div2)



    // console.log(form);


    // fetch the seed data
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(data => renderSeed(data))

    
    function renderSeed(seeds){
        console.log(seeds)
        seeds.forEach(seed => {
            const li = document.createElement('li')
            div2.append(li)
            li.innerText = seed.name

        })
    }




    

});



