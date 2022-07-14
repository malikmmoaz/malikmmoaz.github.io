const form = document.forms["form"]
const task = form["task"]
const list = document.getElementById("list")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = task.value
    if  (value != "")   {
        const item = document.createElement("li")
        item.innerHTML = `${value} <i onclick="deleteTask(this)" class="fa-solid fa-trash-can"></i>`
        list.appendChild(item)
    }
    else    {
        console.log("invalid value")
    }

})


function deleteTask(e) {
    console.log(e)
    e.parentNode.remove()
}