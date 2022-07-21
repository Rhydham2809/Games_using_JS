const DraggableElements = document.querySelectorAll(".draggable");
const DropableElements  = document.querySelectorAll(".droppable");

const rightaudio = new Audio(); 
rightaudio.src = "(1).wav";

const wrongaudio = new Audio(); 
wrongaudio.src = "(2).wav";

// For DraggableElements

DraggableElements.forEach(e =>{
    e.addEventListener('dragstart',dragstart);
    e.addEventListener('dragend',dragend);
})

function dragstart(event)
{
    event.dataTransfer.setData("text",event.target.id);
}

function dragend(event)
{
    // event.target.classList.add("image2");
    // event.target.classList.add("hide");
    // event.target.style.opacity = "0.1";
    
}

// For DropableElements

DropableElements.forEach(e =>{

    e.addEventListener('dragenter',dragenter);
    e.addEventListener('dragleave',dragleave);
    e.addEventListener('drop',drop);
    e.addEventListener("dragover",dragover);

});

function dragenter(event)
{
    event.target.classList.add("change");
}

function dragleave(event)
{
    event.target.classList.remove("change");
}

function dragover(event)
{
    event.preventDefault();
}

function drop(event)
{
    event.preventDefault();
    event.target.classList.remove("change");
    const DraggableElementsData = event.dataTransfer.getData("text");
    const DropableElementsData = event.target.getAttribute("data-draggable-id");
    
    const DraggableImage = document.getElementById(DropableElementsData);
    // console.log(DropableElementsData)

    if(DraggableElementsData===DropableElementsData)
    {
        images = event.target.insertAdjacentHTML("afterbegin", `<img src="${DraggableImage.src}" id="drop${DropableElementsData}">`);
        idOfDroppedImage = "drop"+DropableElementsData;
        dropImage = document.getElementById(idOfDroppedImage);
        dropImage.style.width = 72+"px";
        dropImage.style.height = 72+"px"
        dropImage.style.borderRadius = 20+"px";
        DraggableImage.style.opacity = "0.3";
        document.getElementById(DraggableElementsData).draggable = false;

       rightaudio.play();

        // DraggableImage.style.display = "none";
    }
    else
    {
        wrongaudio.play();
    }
}