document.addEventListener('DOMContentLoaded', () => {
    const divLogin = document.getElementById("login");
    const form = document.getElementById("login_form");
    const div2 = document.getElementById("seed");
    const submit = document.getElementById("submit_button");
    const input = document.getElementById("login_input");
    const greetDiv = document.getElementById("greet");
    console.log(input)






    console.log(input)
    // console.log(div2)

    // console.log(form);

    // fetch the seed data
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(data => renderSeed(data))
    
    function renderSeed(seeds){

        // console.log(seeds.data)

        seeds.data.forEach(seed => {
            console.log(seed.attributes);
            const li = document.createElement('li')
            div2.append(li)
            li.innerText = seed.attributes.name

        });
    }
})    