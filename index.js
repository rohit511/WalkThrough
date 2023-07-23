//highlight section
//popover with next and previous button to move steps
//scrool to element if not i viewpor highlight-+
const steps = ["-1","3", "header", "8", "12", "footer", "5"];
let index=0;
const highlight=(id)=>{
    document.getElementById("lb-highlight")?.remove();
    document.getElementById("lb-popover")?.remove();
    const element=document.getElementById(id);
    const elementDimension=element.getBoundingClientRect(); 
    //is used to get the dimension
highlightHelper(elementDimension,element)
popover(elementDimension,element)
}
const walk=document.getElementById("walkstart");
walk.addEventListener('click',()=>{
    
    highlight(steps[++index]);
    
    

})
// const highlightHelper=(elementDimensions)=>{
//     let top=elementDimensions.top;
//     let left = elementDimensions.top;
//     let width = elementDimensions.width;
//     let height = elementDimensions.height;
//     const ele = document.createElement('div');
//     ele.style = `position:absolute;
// top:${top}px;
// left:${left}px;
// width:${width}px;
// height:${height}px;
// transition:border .2s ease`;

//     document.getElementById('wrapper').appendChild(ele);

// setTimeout(()=>{
//     ele.style.border="4px solid black"
// })
// }
// highlight("1")


const highlightHelper = (elementDimension) => {
    // calculate the css poisition 
    // where the highlighter will be placed
    let top = elementDimension.top + window.scrollY;
    let left = elementDimension.left + window.scrollX;
    let width = elementDimension.width;
    let height = elementDimension.height;

    // create a new element with an id
    // and add a style to it
    const ele = document.createElement('div');
    ele.id = "lb-highlight";

   
    ele.style = `
    position: absolute;
    top: ${top - 4}px;
    left: ${left - 4}px;
    width: ${width}px;
    height: ${height}px;
    transition: border .2s ease;
  `;

    // append the element to the parent
    document.getElementById("wrapper").appendChild(ele);

    // add the border style late to take an effect
    setTimeout(() => {
        ele.style.border = "4px solid #000";
    }, 0);
}

const popover=(elementDimension,element)=>{
    let bottom = elementDimension.bottom + window.scrollY;
    let left = elementDimension.left + window.scrollX;  
    let right=elementDimension.right + window.scrollX;
    const ele = document.createElement('div')
    ele.id = "lb-popover";

    ele.style=`position:absolute;

    top:${bottom+5}px;
    left:${(left+right)/2-50}px;
    background:#fff;
    border:3px solid black;
    border-radius:3px;

    width:100px;
    height:100px;
    `
    document.getElementById("wrapper").appendChild(ele);
ele.appendChild(navigationButton(element));
}

const navigationButton = (element) => {
    // create the next button with click event listener
    const nextButton = document.createElement('button');
    nextButton.textContent = "next";
    nextButton.style=`margin:4px;
    display:inline-block;background-color:crimson;color:white`
   
    nextButton.addEventListener('click', function () {
        // move the next step
        if (index < steps.length - 1) {
            highlight(steps[++index]);
        }

        
    });

    // create the previous button with click event listener
    const prevButton = document.createElement('button');
    prevButton.textContent = "prev";
    prevButton.style = `margin:4px;
    display:inline-block;background-color:crimson;color:white`;
    prevButton.addEventListener('click', function () {
        // move the prev step
        if (index > 0) {
            highlight(steps[--index]);
        }
    });

    const p=document.createElement('p')
    p.textContent =`${element.id} was clicked`
    p.style="margin:10px; color:red;font-weight:bold"
    
    
    const fragment=document.createDocumentFragment();
    fragment.appendChild(nextButton);
    fragment.appendChild(prevButton);
    fragment.appendChild(p);

    return fragment;


}
highlight(steps[index])
