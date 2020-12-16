const section = document.querySelector('.example');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let totalkittens = 0;
  let totalMother = 0;
  let total = 0;
  let male = 0;
  // Add your code here
  let cats = JSON.parse(catString);
  let mothLen = Object.keys(cats).length;

  motherInfo = motherInfo + cats[0].name + ", " + cats[1].name + " and " + cats[2].name;

//Count Total Mother and Total Kittens
  for(a = 0; a < mothLen;a++){
  	if(cats[a].name != null){
  		totalMother = totalMother + 1
  	}
 
  	for(b=0; b < Object.keys(cats[a].kittens).length ; b++){
  		totalkittens = totalkittens + 1;
  	}
  }


//Count Male Cats
let total1 = total;
  for(a = 0 ; a < totalMother ; a++){	
  	for( b = 0 ; b < Object.keys(cats[a].kittens).length ;b++){
  		if(cats[a].kittens[b].gender == "m"){
  			male = male + 1;
  				
  		}
  		
  	}
  }
  total = totalkittens + totalMother;
  kittenInfo = "There are "+ total +"Cats, " + totalkittens + " Kittens and " + male +" of them are male.";
 



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);