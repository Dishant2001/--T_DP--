

const projectsCont=document.getElementById('projects');
const closebtn = document.getElementById('close-content');

closebtn.addEventListener("click",()=>{
    var content=document.getElementById('blog-content');
        content.style.display="none";
    closebtn.style.display="none";
});

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

const blogCont=document.getElementById('blogs');

async function apiCall(){
    blogCont.innerHTML='';
    const response =await fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'});
    console.log(response.status);
    const data=await response.json();
    console.log(data);
    let len=data.length;
    for(var i=0;i<len;++i){

        const Card=h(
            "div",
            {
                class:"card"
            },
            h(
                "h5",
                {
                    class:"card-header"
                },
                'User ID '+data[i]['userId'] 
            ),
            h(
                "div",
                {
                    class:"card-body"
                },
                h(
                    "h5",
                    {
                        class:"card-title"
                    },
                    data[i]['title'],
                    h(
                        'br'
                    ),
                    h(
                        "a",
                        {
                            class:"btn btn-primary",
                            id:i
                        },
                        'Read'
                    ),
                ),
            ),
        );
    
        blogCont.append(Card);
    }

    document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target;
            text = target.id || target.innerText;
        var content=document.getElementById('blog-content');
        content.innerHTML="Title: "+ data[text]['title'] + "<br>" + "Body: "+data[text]['body'];
        content.style.display="block";
        closebtn.style.display="inline-block";
    }, false);

    // return data;
}

// const data = apiCall();
apiCall();