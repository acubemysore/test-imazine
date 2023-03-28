const fetchProjects = async () => {
  try {
    const response = await fetch("/api/v1/projects");
    const jsonResponse = await response.json();
    const projList = jsonResponse.data.projectsList;
    console.log(projList);

    projList = [
      ...projList.map((el, i) => {
        el.projectTitle = "Title of the project " + (i + 1);
        el.industry = "Industry " + (i + 1);
        return el;
      }),
    ];

    const newDetailHTML = projList.map((proj) => {
      return `
        <li class="next-detail-slide">
            <a href="#">
                <div class="next-detail-desc">
                    <h2 class="section-title">${proj.category}</h2>
                    <h3 class="next-detail-title">${proj.projectTitle}</h3>
                    <p class="next-detail-brief">
                        ${proj.projectSummary}
                    </p>
                    <div class="next-detail-img-wrapper"></div>
                </div>
            </a>
        </li>
        `;
    });

    const newDetailList = document.querySelector(".next-detail-list");
    newDetailList.insertAdjacentHTML("beforeend", newDetailHTML.join(""));

    const newDetailSectionTitles = document.querySelectorAll(
      ".next-detail-slide .section-title"
    );

    const newDetailBtnRight = document.querySelector(
      ".next-detail-slider-arrows .right"
    );
    const newDetailBtnLeft = document.querySelector(
      ".next-detail-slider-arrows .left"
    );
    newDetailSectionTitles.forEach((el) => {
      el.style.top = `${getComputedStyle(newDetailSectionTitles[0]).height}`;
      el.style.left = `${
        parseFloat(getComputedStyle(newDetailSectionTitles[0]).height) - 10
      }px`;
    });

    const nextSlide = () => {
      console.log(newDetailList.scrollLeft);
      newDetailList.scrollLeft += parseFloat(
        getComputedStyle(document.querySelector(".next-detail-slide")).width
      );
      newDetailBtnRight.removeEventListener("click", nextSlide);

      setTimeout(() => {
        newDetailBtnRight.addEventListener("click", nextSlide);
      }, 1000);
    };

    newDetailBtnRight.addEventListener("click", nextSlide);
    newDetailBtnLeft.addEventListener("click", function () {
      console.log(newDetailList.scrollLeft);
      newDetailList.scrollLeft -= parseFloat(
        getComputedStyle(document.querySelector(".next-detail-slide")).width
      );
    });

    const nextSlideLinks = document.querySelectorAll(".next-detail-slide");

    nextSlideLinks.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        document.querySelector(".container").scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        const dataToRender = projList.filter((proj, index) => index == i)[0];
        e.preventDefault();
        // el.parentElement.parentElement.remove();

        document.querySelector(".detail-boxes").innerHTML = "";
        document.querySelector(".detail-boxes").innerHTML = `
            <h2 class="section-title">${dataToRender.category}</h2>
              <div class="proj-title">${dataToRender.projectTitle}</div>
              <article class="article">
                <div class="article-show-desc">
                  <div class="article-title">OVERVIEW</div>
                  <h3 class="article-title-desc">
                  ${dataToRender.overview}
                  </h3>
                </div>
                <div class="article-img"></div>
                <p class="article-desc">
                  ${dataToRender.projectSummary}
                </p>
              </article>
              <article class="article">
                <div class="article-show-desc">
                  <div class="article-title">SERVICES</div>
                  <h3 class="article-title-desc">
                  ${dataToRender.service.join("\n")}
                  </h3>
                </div>
                <div class="article-img"></div>
                <p class="article-desc">
                ${dataToRender.detailsOfProject.join("\n")}
                </p>
                <div class="article-img"></div>
                <div class="article-img"></div>
    
                <div class="img-composition">
                  <div class="large-img"></div>
                  <div class="small-imgs">
                    <div class="small-img"></div>
                    <div class="small-img"></div>
                  </div>
                </div>
                <div class="article-img"></div>
              </article>
            `;

        nextSlide();
        // newDetailList.insertAdjacentHTML("beforeend", newDetailHTML.join(""));
        // document
        //   .querySelector(".detail-boxes")
        //   .insertAdjacentElement("afterend", newDetailList);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

fetchProjects();
