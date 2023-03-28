const catListBtnPrev = document.querySelector(".cat-list-btn-prev");
const catListBtnNext = document.querySelector(".cat-list-btn-next");
const catList = document.querySelector(".catog-list");
const catListItems = document.querySelectorAll(".catog-list li");
const sectionTitle = document.querySelector(".section-title");
const workOverviewList = document.querySelector(".work");
const moreButton = document.querySelector(".more");
console.log(catListItems);
let catListScrollNum = 0;
let catogListItemIndex = 0;
let maxCatListWidth = 0;

const projList = [
  {
    industry: "Industry 1",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 2",
    category: "Branding",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 2",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 3",
    category: "Branding",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 3",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 4",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 4",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 5",
    category: "Branding",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 5",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 6",
    category: "Publishing",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 6",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 7",
    category: "Publishing",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 7",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 8",
    category: "Publishing",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 8",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 9",
    category: "Collateral",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 9",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 10",
    category: "Collateral",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 10",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 11",
    category: "Collateral",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 11",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 12",
    category: "Collateral",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 12",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 13",
    category: "Digital",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 13",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 14",
    category: "Digital",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 14",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 15",
    category: "Digital",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 15",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 16",
    category: "Digital",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 16",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 17",
    category: "Motion Graphic",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 18",
    category: "Motion Graphic",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 19",
    category: "Photography",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 20",
    category: "Photography",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 21",
    category: "Photography",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 22",
    category: "Photography",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 23",
    category: "Illustration",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 24",
    category: "Illustration",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 25",
    category: "Illustration",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 26",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 27",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 28",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 29",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 20",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 31",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 32",
    category: "Experiments",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 17",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(2021, 03, 13),
  },
  {
    industry: "Industry 33",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 34",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 35",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 36",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 37",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 38",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 39",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
  {
    industry: "Industry 40",
    category: "Ideas",
    projectTitle: "Title of the Project",
    trimmedTitle: "Project Title 1",
    projectSummary: `
                        Details of eack work shown above Lorem ips um Lorem ipsum
                        Lorem ipsum Lorem ipsum
                    `,
    overview: `Lorem ipsum Lorem ipsum lorem ip sum Lorem ipsum lor em ipsum Lorem ipsum lorem ipsum`,
    service: [
      "Campaign Plan",
      "Target Audience",
      "Brand Identity",
      "Communication",
      "tools",
    ],
    detailsOfProject: [
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
      `Details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsu mhuymh details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum details of the project Lorem ipsum Lorem ipsum Lorem ipsum Lorem`,
    ],
    imgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    socialMediaImgs: [
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
      "sample image path1",
    ],
    date: new Date(),
  },
];

// Work overview cards based on category
// we will start by filtering for Ideas category

const renderWorkOverviewCard = (category) => {
  document.querySelectorAll(".work-overview-card").length &&
    document
      .querySelectorAll(".work-overview-card")
      .forEach((el) => el.remove());
  document.querySelector(".no-projects")?.remove();

  let initialCardToRenderIndex = 0;
  let limit = 6;
  category = category.toLowerCase();
  const projectsToRender = projList.filter(
    (proj) => proj.category.toLowerCase() === category
  );

  console.log(projectsToRender);
  const projectsOverviewCardsHtmlList = projectsToRender.map(
    (project) => `
            <div class="work-overview-card">
                    <a href="work-detail.html">
                    <div class="work-overview-img-wrapper"></div>
                    <div class="work-overview-desc">
                        <h3 class="category-name">${project.industry}</h3>
                        <h4 class="project-title">${project.projectTitle}</h4>
                    </div>
                    </a>
                </div>
  `
  );

  console.log(projectsOverviewCardsHtmlList.length > limit);
  console.log(!document.querySelector(".more"));
  projectsOverviewCardsHtmlList.length > limit &&
    !document.querySelector(".more") &&
    workOverviewList.insertAdjacentElement("beforeend", moreButton);

  const renderCards = () => {
    // removing more button if there are no more projects to show
    projectsOverviewCardsHtmlList.length < limit && moreButton.remove();

    // rendering cards
    for (let i = initialCardToRenderIndex; i < limit; i++) {
      // render before button if more button exists
      projectsOverviewCardsHtmlList[i] &&
        moreButton.parentElement &&
        moreButton.insertAdjacentHTML(
          "beforebegin",
          projectsOverviewCardsHtmlList[i]
        );
      // render before work section ends if more button does not exists
      projectsOverviewCardsHtmlList[i] &&
        !moreButton.parentElement &&
        workOverviewList.insertAdjacentHTML(
          "beforeend",
          projectsOverviewCardsHtmlList[i]
        );
    }
    initialCardToRenderIndex = limit;
    limit += 6;
  };

  if (projectsOverviewCardsHtmlList.length) {
    return renderCards;
  }
  return undefined;
};

// const renderCardsWithLimit = renderWorkOverviewCard("Ideas");
// renderCardsWithLimit();

catList.addEventListener("click", (e) => {
  // Setting background color for link button
  document
    .querySelectorAll("li:has(.list-name)")
    .forEach((el) => el.classList.remove("active"));
  if (e.target.classList.contains("list-name")) {
    e.target.parentNode.classList.add("active");
  } else if (e.target.children[0].classList.contains("list-name")) {
    e.target.classList.add("active");
  }
  if (
    e.target.classList.contains("list-name") ||
    e.target.children[0].classList.contains("list-name")
  ) {
    // considering category
    const category = e.target.textContent || e.target.children[0].textContent;

    // rendering based on category
    const renderCardsWithLimit = renderWorkOverviewCard(category);
    // if projects found for rendering
    renderCardsWithLimit && renderCardsWithLimit();
    // if projects not found for rendering
    if (!renderCardsWithLimit) {
      catList.insertAdjacentHTML(
        "afterend",
        "<p class='no-projects'>No projects found!</p>"
      );
      moreButton.remove();
    }
    moreButton.addEventListener("click", renderCardsWithLimit);
  }
});

// const customEvent = document.createEvent("click");

// customEvent.initEvent("build", true, true);
// document.querySelector(".list-name").addEventListener(
//   "build",
//   (e) => {
//     // e.target matches elem
//   },
//   false
// );

console.log(catList.children[0]);

const event = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: true,
});
catList.children[0].dispatchEvent(event);

// Category button
let indexOfCatList = 0;
for (const item of catListItems) {
  if (
    indexOfCatList == catListItems.length - 1 ||
    indexOfCatList == catListItems.length - 2
  ) {
    continue;
  }
  maxCatListWidth += item.getBoundingClientRect().width;
  indexOfCatList++;
  console.log(maxCatListWidth);
  console.log(indexOfCatList);
}
catListBtnNext.addEventListener("click", function () {
  console.log(catList.scrollWidth);

  if (catList.scrollLeft >= maxCatListWidth) {
    catogListItemIndex = 0;
    catListScrollNum = 0;
    catList.scroll(0, 0);
  }
  catListScrollNum +=
    catListItems[catogListItemIndex].getBoundingClientRect().width;
  catList.scroll(catListScrollNum, 0);
  console.log(catListScrollNum);
  catogListItemIndex++;
});
catListBtnPrev.addEventListener("click", function () {
  catogListItemIndex--;
  if (catList.scrollLeft <= 0) {
    catogListItemIndex = catListItems.length - 3;
    catListScrollNum = catList.scrollWidth;
    // catList.scroll(catList.scrollWidth, 0)
  }
  console.log(catListItems[catogListItemIndex].getBoundingClientRect().width);
  catListScrollNum -=
    catListItems[catogListItemIndex].getBoundingClientRect().width;
  // catListScrollNum-=100
  catList.scroll(catListScrollNum, 0);
});

const toggleHide = () => {
  catList.classList.toggle("cat-list-hide");
};

if (parseInt(window.innerWidth) >= 800) {
  catList.style.top = `${getComputedStyle(sectionTitle).height}`;
  catList.style.left = getComputedStyle(sectionTitle).left;
  catList.style.width = `calc(${
    getComputedStyle(sectionTitle).width
  } + 30px)  `;

  console.log(catList.style.height);
  console.log(parseInt(getComputedStyle(catList).height));
  sectionTitle.addEventListener("click", function () {
    if (parseInt(getComputedStyle(catList).maxHeight) === 0) {
      catList.style.maxHeight = "500px";
      document.querySelector(".section-title span:last-child").textContent =
        "-";
      catList.style.top = getComputedStyle(sectionTitle).height;
      catList.style.left = getComputedStyle(sectionTitle).left;
      catList.style.width = `calc(${
        getComputedStyle(sectionTitle).width
      } + 30px)  `;
      sectionTitle.style.borderBottomColor = "transparent";
    } else {
      catList.style.maxHeight = "0px";
      document.querySelector(".section-title span:last-child").textContent =
        "+";
      catList.style.top = getComputedStyle(sectionTitle).height;
      catList.style.left = getComputedStyle(sectionTitle).left;
      catList.style.width = `calc(${
        getComputedStyle(sectionTitle).width
      } + 30px)  `;
      sectionTitle.style.borderBottom = ".5px solid var(--dark-gray)";
    }
  });
}
