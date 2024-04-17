
      displayProjectElement();

      function displayProjectElement() {
        let ProjectElement = document.querySelector(".pmain_container");

        if (!ProjectElement) {
          return;
        }

        let innerHTML = "";

        project.forEach((item) => {
          innerHTML += `
    
    <div class="project_container">
    <div class="title_container">
    <img src="${item.img}" alt="" class="P_image">
    <div class="">${item.title}</div>
    </div>
    <div class="Projects_info">${item.project_info}</div> 
    <div class="skills_used">${item.skills}</div>
    
  </div>
    `;
        });
        ProjectElement.innerHTML = innerHTML;
      }

      // function displayTag()
      // {
      //   let tagElement=document.querySelector('.');

      // }
   