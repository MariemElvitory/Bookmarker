var bookmarkNameInput=document.getElementById("bookmarkName");
var bookmarURLInput=document.getElementById("bookmarkURL");
var bookmarkContainer;

if (localStorage.getItem("bookmark")==null)
{
    bookmarkContainer=[];
}
else 
{
    bookmarkContainer= JSON.parse (localStorage.getItem("bookmark"));
    displayBookmark();
}


function addBookmark()      
{
    var bookmark =
    {
    name:bookmarkNameInput.value,
    URL:bookmarURLInput.value
    }
     
    bookmarkContainer.push(bookmark);
    localStorage.setItem('bookmark', JSON.stringify(bookmarkContainer));
    displayBookmark()
    clearBookmark()
}


function displayBookmark()   
{
    var cartoona=``;

    for (i=0 ; i<bookmarkContainer.length ; i++)
    {
      
        cartoona+=`<div class="col-4"><h2>${bookmarkContainer[i].name}</h2></div> 
        <div class="col-4"> <a onclick="visitBookmark()" class="btn btn-primary" href="${bookmarkContainer[i].URL}" target="_blank"> visit</a> </div>
         <div class="col-4 "><button onclick="deleteBookmark(${i})" class="btn btn-danger"> delete</button></div> `

    }

    document.getElementById("table-final").innerHTML=cartoona;
}


function clearBookmark()
{
    bookmarkNameInput.value="";
    bookmarURLInput.value="";
}

function deleteBookmark(x)
{
    bookmarkContainer.splice(x,1);
    localStorage.setItem('bookmark', JSON.stringify(bookmarkContainer));
    displayBookmark();
}


function visitBookmark()
{
   
     
}
