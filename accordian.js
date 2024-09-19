// var acc = document.getElementsByClassName("accordion");

// var i;
// for (i = 0; i < acc.length; i++){
    
//     acc[i].addEventListener("click", function (e) {

//         console.log(e.currentTarget.classList);
        
//         this.classList.toggle("active");
        
//         var panel = this.nextElementSibling;
//         if (panel.style.display == "block") {
         
//             panel.style.display = "none";
        
           
//         } else {
//             panel.style.display = "block";

          
//         }
//     });
// }


// const singleTrigger = document.querySelectorAll(".accordion");
// singleTrigger.forEach(trigger => trigger.addEventListener('click', toggleAccordian));

// function toggleAccordian() {
//     const items = document.querySelectorAll('.accrParent');
//     const thisItem = this.parentNode;
    
//     items.forEach(item => {
        
//         if (thisItem == item) {
//             item.getElementsByTagName('div')[2].style.display = 'block';
//             item.getElementsByTagName('div')[1].classList.remove("acrIcon");
//             item.getElementsByTagName('div')[1].classList.add("acrPlus");
//             return;
//         } else {
//             item.getElementsByTagName('div')[2].style.display = 'none';
//         item.getElementsByTagName('div')[1].classList.add("acrIcon");
//         item.getElementsByTagName('div')[1].classList.remove("acrPlus");
//         }
        
//     })
// }
    
const singleTriggers = document.querySelectorAll('.accordion');
singleTriggers.forEach(item => item.addEventListener('click', toggleAccordian));

function toggleAccordian() {
    
    const panels = document.querySelectorAll('.panel');
    const icons = document.querySelectorAll('.acrPlus');

    icons.forEach(itm => {
        itm.classList.remove("acrPlus");
        itm.classList.add('acrIcon');
    })
    panels.forEach(item => {
        item.style.display = "none";
        const clsn = item.children[0].classList;
    });
    this.nextElementSibling.style.display = 'block';
    
    this.children[0].classList.remove("acrIcon");
    this.children[0].classList.add("acrPlus");
  
}


///new added code for same task
// const accordionTriggerEl = document.querySelectorAll(".accordion-trigger");
// const accordionItemEl = document.querySelectorAll(".accordion-item");
 
// accordionTriggerEl.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     // First we will remove class name "open" to all ".accordion-item" elements
//     accordionItemEl.forEach(function (item) {
//       item.classList.remove("open");
//     });
//     // then we will add class name "open" to only targeted element
//     e.target.parentElement.classList.add("open");
//   });
// });


