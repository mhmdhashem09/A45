const nameinput = document.getElementById("name");
const ageinput = document.getElementById("age");
const username = localStorage.getItem("name") || "";
const userage = localStorage.getItem("age") || "";
nameinput.value = username;
ageinput.value = userage;

nameinput.addEventListener("change", function(e){
    localStorage.setItem("name", e.target.value)
})

ageinput.addEventListener("change", function(e){
    localStorage.setItem("age", e.target.value)
})

const userform = document.getElementById("userform");
userform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = {
        name:e.target.elements.name.value,
        age: e.target.elements.age.value
    }
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("output").innerHTML =
    "Name: " + user.name + ", Age: " + user.age;

    console.log(user)
})