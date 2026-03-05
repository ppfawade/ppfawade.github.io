async function loadProject(){

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const response = await fetch("projects.json");

const projects = await response.json();

const project = projects.find(p => p.id === id);

if(!project){
document.getElementById("title").innerText="Project not found";
return;
}

document.getElementById("title").innerText = project.title;

document.getElementById("goal").innerText = project.goal;

document.getElementById("approach").innerText = project.approach;

document.getElementById("demo").href = project.demo;

document.getElementById("source").href = project.source;

const stackList = document.getElementById("stack");

project.stack.forEach(tool => {

const li = document.createElement("li");

li.innerText = tool;

stackList.appendChild(li);

});

}

loadProject();
