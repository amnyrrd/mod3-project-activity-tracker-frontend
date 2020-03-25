document.addEventListener('DOMContentLoaded', () => {
    const allActivitiesUrl = `http://localhost:3000/activities`
    const activitiesButton = document.getElementsByClassName('activities_button')[0]

    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))

    function renderAllActivities(activities) {
        const activityDiv = document.getElementById("activities")

        activityDiv.innerHTML = activities.data
            .map(activity => renderActivity(activity))
            .join("");

        activityDiv.style.display = "none"
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
    })
    
    function showActivitiesDiv(){
        const activitiesDiv = document.getElementById('activities')
        if (activitiesDiv.style.display === "none"){
            activitiesDiv.style.display = "block";
        }else{
            activitiesDiv.style.display = "none";
        }
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