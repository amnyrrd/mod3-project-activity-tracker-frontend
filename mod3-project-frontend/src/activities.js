document.addEventListener('DOMContentLoaded', () => {
    const allActivitiesUrl = `http://localhost:3000/activities`
    const activitiesDiv = document.getElementById("activities")
    const newActivityButton = document.createElement('button')
    const activitiesButton = document.getElementsByClassName('activities_button')[0]

    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))

    function renderAllActivities(activities) {

        activitiesDiv.innerHTML = activities.data
            .map(activity => renderActivity(activity))
            .join("");

        activitiesDiv.style.display = "none"
    }

    function renderActivity(activity) {
        // console.log(activities.data)
        return `
            <div class="activity_card">
                <h3 id="activity_name">${activity.attributes.name}</h3>
                <div class="activity_attr">
                    <p>Expected Duration: ${activity.attributes.duration}</p>
                    <p>Description: ${activity.attributes.description}</p>
                </div>
            </div>
        `
    }

    activitiesButton.addEventListener('click', function(e){
        showActivitiesDiv()
        newActivityButton.innerText = 'Post a new activity'
        activitiesDiv.append(newActivityButton)
    })
    
    function showActivitiesDiv(){
        if (activitiesDiv.style.display === "none"){
            activitiesDiv.style.display = "block";
        }else{
            activitiesDiv.style.display = "none";
        }
    }

    newActivityButton.addEventListener('click', function(e){

    })

    function showNewActivityForm(){

    }
    
});



    // fetch activities og version
    // fetch(allActivitiesUrl)
    // .then(resp => resp.json())
    // .then(actData => renderAllActivities(actData))
    
    // function renderAllActivities(activities) {
    //     // console.log(activities.data)
        
    //     activities.data.forEach(activity => {
    //         // console.log(activity);
    //         const activityNameUl = document.getElementById('activities_ul')
    //         const activityNameLi = document.createElement('li')
    //         activityNameLi.innerText = activity.attributes.name
    //         activityNameUl.append(activityNameLi)
    //         activityNameUl.append()
    //     });
    // }