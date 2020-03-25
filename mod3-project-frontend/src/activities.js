document.addEventListener('DOMContentLoaded', () => {
    const allActivitiesUrl = `http://localhost:3000/activities`
    const activityCard = document.getElementsByClassName('activity_card')

    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))

    function renderAllActivities(activities) {
        const activityDiv = document.getElementById("activities_div")

        activityDiv.innerHTML = activities.data
            .map(activity => renderActivity(activity))
            .join("");
    }

    function renderActivity(activity) {
        // console.log(activities.data)
        return `
            <div class="activity_card">
                <h3 class="activity_name">${activity.attributes.name}</h3>
                <div class="activity_attr">
                    <p>Expected Duration: ${activity.attributes.duration}</p>
                    <p>Description: ${activity.attributes.description}</p>
                </div>
            </div>
        `
    }

    activityCard.addEventListener('click', function(e){
        showList()
    })
    
    function showList(){
        const list = document.getElementsByClassName('activity_attr')
        if (list.style.display === "none"){
            list.style.display = "block";
        }else{
            list.style.display = "none";
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