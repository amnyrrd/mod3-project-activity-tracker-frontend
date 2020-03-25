document.addEventListener('DOMContentLoaded', () => {
    const divLogin = document.getElementById("login");
    const form = document.getElementById("login_form");

    const div2 = document.getElementById("seed");
    const submit = document.getElementById("submit_button");
    const input = document.getElementById("login_input");
    const greetDiv = document.getElementById("greet");
    console.log(input)




    const div2 = document.getElementById("seed")

    const allActivitiesUrl = `http://localhost:3000/activities`
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


      

        });
    }

    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))
    
    function renderAllActivities(activities) {
        activities.data.forEach(activity => {
            const activityNameUl = document.getElementById('activities_ul')
            const activityNameLi = document.createElement('li')
            activityNameLi.innerText = activity.attributes.name
            activityNameUl.append(activityNameLi)
        })
    }
        


  

    form.addEventListener('submit', function (e) {
    
        //prevent the normal submission of the form
        e.preventDefault();
    
        console.log(input.value);   
        divLogin.remove();
        const h1 = document.createElement('h1')
        h1.innerText = `Hello ${input.value}`
        greetDiv.append(h1)
       
 
    });
    

});



//     document.getElementById("try").addEventListener("click", function(){ 
//     document.getElementById("text").innerText = "GeeksforGeeks"; 
// }); 



    // console.log(form);








    




