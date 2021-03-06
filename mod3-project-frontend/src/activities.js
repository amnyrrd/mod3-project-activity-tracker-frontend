const allActivitiesUrl = `http://localhost:3000/activities`
const allLocationsUrl = `http://localhost:3000/locations`
const activitiesDiv = document.getElementById("activities")
const newActivityButton = document.createElement('button')
const activitiesButton = document.getElementsByClassName('activities_button')[0]
const newActivityDiv = document.getElementById('activities_form')
const newActivityForm = document.getElementById('activities_form')
let activityForm;

document.addEventListener('DOMContentLoaded', () => {

    // const allActivitiesUrl = `http://localhost:3000/activities`
    // const allLocationsUrl = `http://localhost:3000/locations`
    // const activitiesDiv = document.getElementById("activities")
    // const newActivityButton = document.createElement('button')
    // const activitiesButton = document.getElementsByClassName('activities_button')[0]
    // const newActivityDiv = document.getElementById('activities_form')
    // const newActivityForm = document.getElementById('activities_form')
    // let activityForm;

    // fetch activities
    fetch(allActivitiesUrl)
    .then(resp => resp.json())
    .then(actData => renderAllActivities(actData))

    function renderAllActivities(activities) {
        activitiesDiv.innerHTML = activities.data.map(activity => { return renderActivity(activity)  
        })
            .join("");

        activitiesDiv.style.display = "none"
    }

    function renderActivity(activity) {
        return `
            <div class="activity_card" id="activity${activity.id}">
                <h3 id="activity_name">${activity.attributes.name}</h3>
                <div class="activity_attr">
                    <p>Expected Duration: ${activity.attributes.duration}</p>
                    <p>Description: ${activity.attributes.description}</p>
                </div>
                <button onclick="handleDeleteActivity(event)"  name="delete_button" id=${activity.id}>Delete this activity</button>
            </div>
        `
    }
   

    // shows hidden div of all activities and post activity button
    activitiesButton.addEventListener('click', function(e){
        showActivitiesDiv()
        newActivityButton.innerText = 'Post a new activity'
        newActivityButton.className = 'new_activity_button'
        activitiesDiv.append(newActivityButton)
    })
    
    function showActivitiesDiv(){
        if (activitiesDiv.style.display === "none"){
            activitiesDiv.style.display = "block";
        }else{
            activitiesDiv.style.display = "none";
        }
    }

    // shows post activity form
    newActivityButton.addEventListener('click', function(e){
        e.preventDefault()
        showNewActivityForm()
    })

    function showNewActivityForm(){
        activitiesDiv.style.display = "none"
        newActivityDiv.innerHTML = ` 
        <form class="activity_form" id="activity_form" style="">
        <h3>Upload a new activity</h3>
        <input type="text" name="name" value="" placeholder="Enter the name of your activity here" class="input-text">
        <br>
        <input type="text" name="duration" value="" placeholder="Enter the duration of your activity here" class="input-text">
        <br>
        <input type="text" name="description" value="" placeholder="Enter the description of your activity here" class="input-text">
        <br>
        <input type="text" name="location_name" value="" placeholder="location name" class="input-text">
        <br>
        <input type="submit" name="submit" value="Submit Activity" id="submit_new_activity">
      </form>
      `
      activityForm = document.getElementById('activity_form')
      activityFormListener()
    }

    function toggleActivityForm(){
       if (newActivityForm.style.display === "none"){
           newActivityForm.style.display = "block"
       } else {
           newActivityForm.style.display = "none"
       }
    }

    // post location to activity so activity can access the location
    // skip this post for user
    function postLocationToActivity(activity_data){
        fetch(allLocationsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({
                "name": activity_data.location_name.value
            })
        })
        .then(resp => resp.json())
        .then(location_data => {
            return postActivity(activity_data, location_data)
        })
    }


    // post activity
    function postActivity(activity_data, location) {
        console.log(activity_data, location)
        fetch(allActivitiesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": activity_data.name.value,
                "duration": activity_data.duration.value,
                "description": activity_data.description.value,
                "user_id": 1,
                "location_id": location.data.id
            })
        })
        .then(resp => resp.json())
        .then(activityObj => {
            renderNewActivity(activityObj, location)
        })
    }

    function renderNewActivity(activity, location){
        console.log(activity.data.attributes)
        activitiesDiv.innerHTML += `
        <div class="activity_card" id="activity"+${activity.id}>
            <h3 id="activity_name">${activity.data.attributes.name}</h3>
            <div class="activity_attr">
                <p>Expected Duration: ${activity.data.attributes.duration}</p>
                <p>Description: ${activity.data.attributes.description}</p>
            </div>
        </div>
        <button onclick="handleDeleteActivity(event)" name="delete_button" id=${activity.id}>Delete this activity</button>
        `
    }
    function activityFormListener(){
        activityForm.addEventListener('submit', function(e){
            e.preventDefault()
            postLocationToActivity(e.target)
            toggleActivityForm()
            showActivitiesDiv()
        })
    }
});

// let activityCard = document.getElementsByClassName('activity_card')

function handleDeleteActivity(event){
    let activityId = event.target.id
    event.target.parentElement.remove()
    deleteActivity(activityId)
    // activitiesDiv.remove()
    // console.log(activityCard)
    // activityCard.remove()
}

function deleteActivity(activityId) {
    // console.log(activity_data, location)
    fetch(`${allActivitiesUrl}/${activityId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}