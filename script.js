const documents = [

{
name:"Aadhaar Card Front",
image:"Aadhaar 1.jpg",
pdf:"Aadhar.pdf"
},
{
name:"Aadhaar Card Back",
image:"Aadhaar 2.jpg",
pdf:"Aadhar.pdf"
},
{
name:"Bank Account",
image:"bank.jpg",
pdf:"bank.pdf"
},
{
name:"PAN Card",
image:"pan.jpg",
pdf:"pan.pdf"
},
{
name:"Voter ID Card Front",
image:"voter id 1.jpg",
pdf:"voter id.pdf"
},
{
name:"Voter ID Card Back",
image:"voter id 2.jpg",
pdf:"voter id.pdf"
},
{
name:"SC Certificate",
image:"sc.jpg",
pdf:"sc.pdf"
},
{
name:"Madhyamik Admit",
image:"MP admit.jpg",
pdf:"MP admit.pdf"
},
{
name:"Madhyamik Registration",
image:"MP registration.jpg",
pdf:"MP registration.pdf"
},
{
name:"Madhyamik Marksheet",
image:"MP result.jpg",
pdf:"MP result.pdf"
},
{
name:"Madhyamik Certificate",
image:"MP.jpg",
pdf:"MP.pdf"
},
{
name:"HS Admit",
image:"HS admit.jpg",
pdf:"HS admit.pdf"
},
{
name:"HS Registration",
image:"HS registration.jpg",
pdf:"HS registration.pdf"
},
{
name:"HS Marksheet",
image:"HS result.jpg",
pdf:"HS result.pdf"
},
{
name:"HS Certificate",
image:"HS.jpg",
pdf:"HS.pdf"
},
{
name:"Birth Certificate",
image:"birth.jpg",
pdf:"birth.pdf"
},
{
name:"Caste Certificate",
image:"sc.jpg",
pdf:"sc.pdf"
}
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

let currentFilter = "all";

function showDocuments(data){

gallery.innerHTML = "";

data.forEach(doc => {

let buttons = "";

if(currentFilter === "photo"){

buttons = `
<a href="${doc.image}" target="_blank">
<button>View Photo</button>
</a>

<a href="${doc.image}" download>
<button>Download</button>
</a>
`;

}
else if(currentFilter === "pdf"){

buttons = `
<a href="${doc.pdf}" target="_blank">
<button>View PDF</button>
</a>

<a href="${doc.pdf}" download>
<button>Download</button>
</a>
`;

}
else{

buttons = `
<a href="${doc.image}" target="_blank">
<button>Photo</button>
</a>

<a href="${doc.pdf}" target="_blank">
<button>PDF</button>
</a>

<a href="${doc.pdf}" download>
<button>Download</button>
</a>
`;

}

gallery.innerHTML += `
<div class="card">
<img src="${doc.image}" alt="${doc.name}">
<h3>${doc.name}</h3>

<div class="buttons">
${buttons}
</div>

</div>
`;

});

}

function filterDocs(type){

currentFilter = type;

showDocuments(documents);

}

searchInput.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const filtered = documents.filter(doc =>
doc.name.toLowerCase().includes(value)
);

showDocuments(filtered);

});

showDocuments(documents);
