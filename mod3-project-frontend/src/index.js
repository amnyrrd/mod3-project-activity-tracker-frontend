document.addEventListener('DOMContentLoaded', () => {
    
    const divLogin = document.getElementById("login");
    const form = document.getElementById("login_form");
    const div2 = document.getElementById("seed");
    const submit = document.getElementById("submit_button");
    const input = document.getElementById("login_input");
    const greetDiv = document.getElementById("greet");
    const usersButton = document.getElementsByClassName('users_button')[0]
    const newUsersButton = document.createElement('button')
    
    // console.log(input)



  

        // fetch the seed data
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(data => renderAllSeeds(data))


    
    function renderSeed(seeds){
        // console.log(seeds.data[0])
        
        return `
            <div class="activity_card">
                <h3 id="user_name">${seeds.attributes.name}</h3>
            </div>
        `

         

    }


    
    function renderAllSeeds(seeds) {
        console.log(seeds.data)
        div2.innerHTML = seeds.data
            .map(seed => renderSeed(seed))
            .join("");

        div2.style.display = "none"
    }



    

    function showUsersDiv(){
        if (div2.style.display === "none"){
            div2.style.display = "block";
        }else{
            div2.style.display = "none";
        }
    }
    

    // Shows users,adds user button
    usersButton.addEventListener('click', function(e){
        showUsersDiv()
        console.log("button was clicked")
        newUsersButton.innerText = 'Post a new user'
        newUsersButton.className = 'new_user_button'
        div2.append(newUsersButton)
     })



 

    form.addEventListener('submit', function (e) {
    
        //prevent the normal submission of the form
        e.preventDefault();
    

        
        const ul = document.createElement('ul')
        ul.setAttribute('id','users_list' )
        div2.append(ul)



        // Remove login
        console.log(input.value);   
        divLogin.remove();
        const h1 = document.createElement('h1')
        h1.innerText = `Hello ${input.value}`
        greetDiv.append(h1)


       

            
               

        
        
        


          


                
                

           
        
        
 




                        
                        
                       

                  
                        

                    


            
    
    });


    // Shows users



})





//     document.getElementById("try").addEventListener("click", function(){ 
//     document.getElementById("text").innerText = "GeeksforGeeks"; 
// }); 



    // console.log(form);


    // before potential destruction
    // document.addEventListener('DOMContentLoaded', () => {
    //     const divLogin = document.getElementById("login");
    //     const form = document.getElementById("login_form");
    //     const div2 = document.getElementById("seed");
    //     const submit = document.getElementById("submit_button");
    //     const input = document.getElementById("login_input");
    //     const greetDiv = document.getElementById("greet");
    //     const allActivitiesUrl = `http://localhost:3000/activities`
    //     const activityNameUl = document.getElementById('activities_ul')
    
    
    //     console.log(input)
    
    
    
    //     // console.log(form);
    
    
    //     // fetch the seed data
    //     fetch(`http://localhost:3000/users`)
    //     .then(resp => resp.json())
    //     .then(data => renderSeed(data))
        
    //     function renderSeed(seeds){
    //         seeds.data.forEach(seed => {
    //             console.log(seed.attributes);
    //             const li = document.createElement('li')
    //             div2.append(li)
    //             li.innerText = seed.attributes.name
    
    //         });
    //     }
        
    //     // fetch activities
    //     fetch(allActivitiesUrl)
    //     .then(resp => resp.json())
    //     .then(actData => renderAllActivities(actData))
    
    //     function renderAllActivities(activities) {
    //         console.log(activities.data)
    //         activities.data.forEach(activity => {
    //             const activityNameLi = document.createElement('li')
    //             const activityDurationLi = document.createElement('li')
    //             const activityDescriptionLi = document.createElement('li')
    //             const activityImageUrlLi = document.createElement('li')
    //             activityNameLi.innerText = activity.attributes.name
    //             activityNameUl.append(activityNameLi)
    //             activityDurationLi.innerText = activity.attributes.duration
    //             activityNameUl.append(activityDurationLi)
    //             activityDescriptionLi.innerText = activity.attributes.description
    //             activityNameUl.append(activityDescriptionLi)
    //             // activityImageUrlLi
    //         })
    //     }
    
    //     activityNameUl.addEventListener('click', function(e){
    //         e.preventDefault()
    //         showList()
    //     })
        
    //     function showList(){
    //         const list = document.getElementById('activities_ul')
    //         if (list.style.display == "none"){
    //             list.style.display = "block";
    //         }else{
    //             list.style.display = "none";
    //         }
    //     }
    
    
    //     form.addEventListener('submit', function (e) {
        
    //         //prevent the normal submission of the form
    //         e.preventDefault();
        
    //         console.log(input.value);   
    //         divLogin.remove();
    //         const h1 = document.createElement('h1')
    //         h1.innerText = `Hello ${input.value}`
    //         greetDiv.append(h1)
           
     
    //     });
        
    
    // });






    




