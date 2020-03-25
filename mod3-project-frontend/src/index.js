document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("login_form");
    const div2 = document.getElementById("seed")

    const allActivitiesUrl = `http://localhost:3000/activities`
    // console.log(div2)
    // console.log(form);


    // fetch the seed data
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(data => renderSeed(data))
    
    function renderSeed(seeds){
        seeds.data.forEach(seed => {
            console.log(seed.attributes);
            const li = document.createElement('li')
            div2.append(li)
            li.innerText = seed.attributes.name
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
        


    

});
    // console.log(form);








    

