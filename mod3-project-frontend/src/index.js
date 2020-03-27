document.addEventListener('DOMContentLoaded', () => {
    
    const divLogin = document.getElementById("login");
    const form = document.getElementById("login_form");
    const div2 = document.getElementById("seed");
    const submit = document.getElementById("submit_button");
    const input = document.getElementById("login_input");
    const greetDiv = document.getElementById("greet");
    const usersButton = document.getElementsByClassName('users_button')[0]
    const newUsersButton = document.createElement('button')
    const newUsersDiv = document.getElementById('users_form')
    const newUserForm = document.getElementById('activities_form')
    const allUsersUrl = `http://localhost:3000/users`
    
    // console.log(input)



  

        // fetch the seed data
    fetch(allUsersUrl)
    .then(resp => resp.json())
    .then(data => renderAllUsers(data))


    
    function renderUser(users){
        // console.log(seeds.data[0])
        
        return `
            <div class="user_card">
                <h3 id="user_name">${users.attributes.name}</h3>
            </div>
        `

         

    }


    
    function renderAllUsers(users) {
        console.log(users.data)
        div2.innerHTML = users.data
            .map(user => renderUser(user))
            .join("");

        div2.style.display = "none"
    }

    // Shows users, adds user button
    usersButton.addEventListener('click', function(e){
        showUsersDiv()
        console.log("button was clicked")
        newUsersButton.innerText = 'Post a new user'
        newUsersButton.className = 'new_user_button'
        div2.append(newUsersButton)
    })

    function showUsersDiv(){
        if (div2.style.display === "none"){
            div2.style.display = "block";
        }else{
            div2.style.display = "none";
        }
    }

    // shows post User form
    newUsersButton.addEventListener('click', function(e){
        e.preventDefault()
        showNewUserForm()
    })

    function showNewUserForm(){
        div2.style.display = "none"
        newUsersDiv.innerHTML = ` 
        <form class="user_form" id="user_form" style="">
        <h3>Upload a new user</h3>
        <input type="text" name="name" value="" placeholder="Enter your first name" class="input-text">
        <input type="text" name="age" value="" placeholder="Enter your age" class="input-text">
        <input type="text" name="gender" value="" placeholder="Enter your gender" class="input-text">
        <input type="submit" name="submit" value="Submit User" id="submit_new_user">
      </form>
      `
      userForm = document.getElementById('user_form')
      userFormListener()
    }

    
    function toggleUserForm(){
        if (newUserForm.style.display === "none"){
            newUserForm.style.display = "block"
        } else {
            newUserForm.style.display = "none"
        }
    }




/******  This function below is not being read for some reason ********/

    // post user
    function postUser(user_data) {
        console.log("Hello Newman")
        console.log(user_data)
        fetch(allUsersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": user_data.name.value,
                "age": user_data.age.value,
                "gender": user_data.gender.value,
                "user_id": 1
            })
        })
        .then(resp => resp.json())
        .then(userObj => {
            renderNewUser(userObj)
        })
    }


    function renderNewUser(user){
        console.log(user)
        div2.innerHTML += `
        <div class="user_card">
            <h3 id="user_name">${user.data.attributes.name}</h3>
            <div class="user_attr">
                <p>Age: ${user.data.attributes.age}</p>
                <p>Gender: ${user.data.attributes.gender}</p>
            </div>
        </div>
    `
    }


    function userFormListener(){
        userForm.addEventListener('submit', function(e){
            e.preventDefault()
            postUser(e.target)
            toggleUserForm()
            showUsersDiv()
        })
    }







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






    




