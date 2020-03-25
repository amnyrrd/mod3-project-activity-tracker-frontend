document.addEventListener('DOMContentLoaded', () => {
    const divLogin = document.getElementById("login");
    const form = document.getElementById("login_form");

    const div2 = document.getElementById("seed");
    const submit = document.getElementById("submit_button");
    const input = document.getElementById("login_input");
    const greetDiv = document.getElementById("greet");
    console.log(input)






    const allActivitiesUrl = `http://localhost:3000/activities`
    // console.log(div2)

    // console.log(form);








    
    form.addEventListener('submit', function (e) {
    
        //prevent the normal submission of the form
        e.preventDefault();
    
        const ul = document.createElement('ul')
        ul.setAttribute('id','users_list' )
        const h3 = document.createElement('h3')
        h3.innerText = "Activity Tracker Users"
        div2.append(h3)
        div2.append(ul)

       

        



        
        
    // fetch the seed data
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(data => renderSeed(data))
    
    function renderSeed(seeds){

        // console.log(seeds.data)




        seeds.data.forEach(seed => {
            const li = document.createElement('li')
            li.setAttribute('id', 'user_names')
            ul.append(li)
            
           
          
            
            
            
            
            console.log(seed.attributes);
            li.innerText = `${seed.attributes.name}`
            
            


        });
    }

        
        
        
        
        
        // Removes login box and button adds custom message
        console.log(input.value);   
        divLogin.remove();
        const h1 = document.createElement('h1')
        h1.innerText = `Hello ${input.value}`
        greetDiv.append(h1)




        // const div = document.createElement('div')
        // div.setAttribute('class','users')




       
 
    });
    

});



//     document.getElementById("try").addEventListener("click", function(){ 
//     document.getElementById("text").innerText = "GeeksforGeeks"; 
// }); 



    // console.log(form);








    




