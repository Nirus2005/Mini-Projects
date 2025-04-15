let items = []
 
const itemsDiv=document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"
function load() {
    const olditems = localStorage.getItem(storageKey)
    if(olditems) items = JSON.parse(olditems)
    render()
}
function render() {
    itemsDiv.innerHTML = null
    if(items.length=== 0 ){
        const container = document.createElement("div")
        const text = document.createElement("p")
        text.textContent = "No Tasks Due"
        text.style.margin = "10px"
        container.appendChild(text)
        itemsDiv.appendChild(container)
        return
    }
    for (const [i,item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        const text = document.createElement("p")
        text.textContent = item
        const button= document.createElement("button")
        button.textContent="Delete"
        button.onclick = ()=>remove(i)
        text.style.display = "inline"
        text.style.margin = "10px"

        container.appendChild(text)
        container.append(button) 
        itemsDiv.appendChild(container)
    }

}
function save() {
    const strItems = JSON.stringify(items);
    localStorage.setItem(storageKey,strItems)
}
function add() {
    const value = input.value
    if (!value){
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    render()
    input.value=""
    save()
}
function remove(i) {
    items.splice(i,1)
    render()
    save()
}
document.addEventListener("DOMContentLoaded", load)
