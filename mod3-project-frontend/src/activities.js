document.addEventListener('DOMContentLoaded', () => {
   
   
   
    const allActivitiesUrl = `http://localhost:3000/activities`




    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))
    
    function renderAllActivities(activities) {
        // console.log(activities.data)
        
        activities.data.forEach(activity => {
            // console.log(activity);
            const activityNameUl = document.getElementById('activities_ul')
            const activityNameLi = document.createElement('li')
            activityNameLi.innerText = activity.attributes.name
            activityNameUl.append(activityNameLi)
            activityNameUl.append()
        });
    }
        




});