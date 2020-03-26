document.addEventListener('DOMContentLoaded', () => {
    const allActivitiesUrl = `http://localhost:3000/activities`
    const activitiesDiv = document.getElementById("activities")
    const newActivityButton = document.createElement('button')
    const activitiesButton = document.getElementsByClassName('activities_button')[0]
    const newActivityDiv = document.getElementById('activities_form')
    const postActivityButton = document.createElement('button')
    postActivityButton.innerHTML = `<input type="submit" name="submit" value="Submit Activity" id="submit_new_activity">`
    const newActivityForm = document.getElementById('activities_form')

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
        <form class="activity_form" style="">
        <h3>Upload a new activity</h3>

        <input type="text" name="activity_name" value="" placeholder="Enter the name of your activity here" class="input-text">
        <br>
        <input type="text" name="activity_duration" value="" placeholder="Enter the duration of your activity here" class="input-text">
        <br>
        <input type="text" name="activity_description" value="" placeholder="Enter the description of your activity here" class="input-text">
        <br>
      </form>
      `
      newActivityDiv.append(postActivityButton)
    }

    function toggleActivityForm(){
       if (newActivityForm.style.display === "none"){
           newActivityForm.style.display = "block"
       } else {
           newActivityForm.style.display = "none"
       }
    }

    postActivityButton.addEventListener('click', function(e){
        e.preventDefault()
        toggleActivityForm()
        showActivitiesDiv()
    })




});

