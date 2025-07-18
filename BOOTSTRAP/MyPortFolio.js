var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");   
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");   
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

const target = document.querySelector('.yyy');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

observer.observe(target);

function sendEmail(){
  const templateParams = {
    name:document.querySelector("#nme").value,
    name:document.querySelector("#mail").value,
    name:document.querySelector("#msg").value,
  };

  emailjs.send("service_u3baty6", "template_29nbyf1", templateParams).then(
    ()=> alert("Email Sent").catch(()=>alert("Email Not sent"))
  )
}

var sidemenu= document.getElementById("sidemenu");

    function openmenu(){
      sidemenu.style.right = "0";
    }
    function closemenu(){
      sidemenu.style.right = "-150px";
    }
// const targett = document.querySelector('.skill-list div');

// const observerr = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target1.classList.add('visible');
//     } else {
//       entry.target1.classList.remove('visible');
//     }
//   });
// });

// observerr.observe(targett);