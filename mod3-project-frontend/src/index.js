document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("login_form");
<<<<<<< HEAD
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
=======
>>>>>>> c4fcf94bb257bdefc74aba7ef1a0185eeba054d4



    // console.log(form);








    

});
