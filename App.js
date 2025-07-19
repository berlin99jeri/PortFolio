const video1=document.getElementById("projectVideo1");
const video2=document.getElementById("projectVideo2");
const video3=document.getElementById("projectVideo3");
const hoverSign=document.querySelector(".hover-sign");
// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector('.close-icon')


const videolist=[video1,video2,video3];

videolist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoverSign.classList.remove("active")

    })
})
// Sidebar elements //
menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
  
})

//to send an mail
document.getElementById('sendButton').addEventListener('click', function () {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    // Clear the form
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Message sent successfully!');
  });


  //auto scroll
  function scrolltoinfo(){
    document.getElementById("target-info").scrollIntoView({ 
      behavior: "smooth" 
    });
  }
  function scrolltoskill(){
    document.getElementById("toskill").scrollIntoView({
      behavior:"smooth"
    })
  }
  function scrolltoproject(){
    document.getElementById("scrollproject").scrollIntoView({
      behavior:"smooth"
    })
  }
  function scrolltocontact(){
    document.getElementById("contactscroll").scrollIntoView({
      behavior:"smooth"
    })
  }