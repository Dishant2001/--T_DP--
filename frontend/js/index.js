

const projectsCont=document.getElementById('projects');

function h(tag, attrs = {}, ...children) {
    const newElement = document.createElement(tag);
  
    Object.keys(attrs).forEach((key) => {
      newElement.setAttribute(key, attrs[key]);
    });
  
    children.forEach((child) => {
      newElement.append(child);
    });
  
    return newElement;
  }

projectsCont.innerHTML='';

const projectIDs=10;
const subjects=['Blockchain','Machine Learning','NLP','Embedded Programming'];
var dates=[];

const projectContHead = h(
    "thead",
    {
      class: "peer-container"
    },
    h(
      "th",
      {
        class: "peer-name"
      },
      'Project_Id'
    ),
    h(
      "th",
      {
        class: "peer-name"
      },
      'Subject_Major'
    ),
    h(
      "th",
      {
        class: "peer-name"
      },
      'Date of Completion'
    )
  );
  projectsCont.append(projectContHead);

for(var i=1;i<=projectIDs;++i){
    let x = Math.floor((Math.random() * subjects.length-1) + 1);
    let yourDate = new Date()
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    yourDate = yourDate.toISOString().split('T')[0]
    const projectCont = h(
      "tr",
      {
        class: "peer-container"
      },
      h(
        "td",
        {
          class: "peer-name"
        },
        'P_'+i
      ),
      h(
        "td",
        {
          class: "peer-name"
        },
        subjects[x]
      ),
      h(
        "td",
        {
          class: "peer-name"
        },
        yourDate
      )
    );
    projectsCont.append(projectCont);

}