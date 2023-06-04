const britishRoyals = [
  {
    name: "George I",
    title: "King",
    reign: "1714–1727",
    description: "George Louis, born in 1660, was the Elector of Hanover and became the first king of Great Britain and Ireland from the House of Hanover.",
    image: "//upload.wikimedia.org/wikipedia/commons/thumb/0/02/King_George_I_by_Sir_Godfrey_Kneller%2C_Bt_%283%29.jpg/220px-King_George_I_by_Sir_Godfrey_Kneller%2C_Bt_%283%29.jpg"
  },
  {
    name: "George II",
    title: "King",
    description: "George Augustus, born in 1683, was the last British monarch born outside Great Britain and the last king of Great Britain from the House of Hanover.",
    image: "https://tse1.mm.bing.net/th?id=OIP.xRK_MNB7NY7olRdb292J2AHaI0&amp;pid=Api&amp;rs=1&amp;c=1&amp;qlt=95&amp;w=104&amp;h=123"
  },

  

  {
    name: "George II",
    house: "House of Hanover",
    reign: "1727-1760",
    image: "https://tse1.mm.bing.net/th?id=OIP.xRK_MNB7NY7olRdb292J2AHaI0&amp;pid=Api&amp;rs=1&amp;c=1&amp;qlt=95&amp;w=104&amp;h=123",
    description: "George II was the King of Great Britain and Ireland from 1727 until his death in 1760. He was the last British monarch born outside Great Britain, and his reign saw significant political and social changes.",
     showReign: false
  },
  {
    name: "George III",
    house: "House of Hanover",
    reign: "1760-1820",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Allan_Ramsay_-_King_George_III_in_coronation_robes_-_Google_Art_Project.jpg",
    description: "George III was the King of Great Britain and Ireland from 1760 until the union of the two kingdoms in 1801. His reign was marked by the American Revolutionary War and the loss of the American colonies.",
     showReign: false
  },
  {
    name: "George IV",
    house: "House of Hanover",
    reign: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/King_George_IV_of_the_United_Kingdom_in_Coronation_Robes_%28by_Thomas_Lawrence%29_-_Royal_Collection_%28RCIN_405918%29.jpg/220px-King_George_IV_of_the_United_Kingdom_in_Coronation_Robes_%28by_Thomas_Lawrence%29_-_Royal_Collection_%28RCIN_405918%29.jpg",
    image: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/King_George_IV_of_the_United_Kingdom_in_Coronation_Robes_%28by_Thomas_Lawrence%29_-_Royal_Collection_%28RCIN_405918%29.jpg/220px-King_George_IV_of_the_United_Kingdom_in_Coronation_Robes_%28by_Thomas_Lawrence%29_-_Royal_Collection_%28RCIN_405918%29.jpg",
 
    description: "George IV was the King of the United Kingdom of Great Britain and Ireland from 1820 until his death in 1830. He is known for his extravagant lifestyle and his patronage of the arts.",
     showReign: false
  },
  {
    name: "William IV",
    house: "House of Hanover",
    reign: "1830-1837",
    image: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/William_IV_in_1833_by_Shee_cropped.jpg/220px-William_IV_in_1833_by_Shee_cropped.jpg",
    description: "William IV was the King of the United Kingdom of Great Britain and Ireland from 1830 until his death in 1837. His reign saw the passing of the Great Reform Act of 1832, which expanded voting rights.",
     showReign: false
  },
  {
    name: "Queen Victoria",
    house: "House of Hanover",
    reign: "1837-1901",
    image:"//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/220px-Queen_Victoria_by_Bassano.jpg",
    description: "Queen Victoria was the Queen of the United Kingdom of Great Britain and Ireland from 1837 until her death in 1901. Her reign is known as the Victorian era, a period of industrial, cultural, and political change.",
     showReign: false
  },
  {
    name: "Edward VII",
    house: "House of Saxe-Coburg and Gotha",
    reign: "1901-1910",
    image: "//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/King-Edward-VII_%28cropped%29.jpg/220px-King-Edward-VII_%28cropped%29.jpg",
    description: "Edward VII was the King of the United Kingdom of Great Britain and Ireland from 1901 until his death in 1910. He was known for his diplomatic skills and played a role in improving relations with European powers.",
     showReign: false
  },
  {
    name: "George V",
    house: "House of Windsor",
    reign: "1910-1936",
   image: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/King_George_1923_LCCN2014715558_%28cropped%29.jpg/220px-King_George_1923_LCCN2014715558_%28cropped%29.jpg" ,
    description: "George V was the King of the United Kingdom and the British Dominions, and Emperor of India from 1910 until his death in 1936. He led the country through World War I and saw the transformation of the British Empire.",
     showReign: false
  },
  {
    name: "Edward VIII",
    house: "House of Windsor",
    reign: "1936",
 
    
     image: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a3/HRH_The_Prince_of_Wales_No_4_%28HS85-10-36416%29.jpg/220px-HRH_The_Prince_of_Wales_No_4_%28HS85-10-36416%29.jpg",
    description:"Edward VIII became King of the United Kingdom in 1936 but abdicated later the same year. He chose to marry Wallis Simpson, an American socialite, which was considered controversial at the time.",
     showReign: false
  },
  {
    name: "George VI",
    house: "House of Windsor",
    reign: "1936-1952",
    image: "//upload.wikimedia.org/wikipedia/commons/thumb/2/25/King_George_VI_LOC_matpc.14736_%28cleaned%29.jpg/220px-King_George_VI_LOC_matpc.14736_%28cleaned%29.jpg" ,
    description: "George VI was the King of the United Kingdom and the Dominions of the British Commonwealth from 1936 until his death in 1952. He served as a symbol of national unity during World War II.",
     showReign: false
  },
  {
    name: "Queen Elizabeth II",
    house: "House of Windsor",
    reign: "1952-present",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg",
    description: "Queen Elizabeth II has been the Queen of the United Kingdom and other Commonwealth realms since 1952. She is the longest-reigning current monarch and has seen significant cultural and social changes during her reign.",
     showReign: false
  }


];

/*
function generateCards() {
  const container = document.getElementById("card-container");

  royalFamily.forEach((royal) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Create card image
    const image = document.createElement("img");
    image.src = royal.image;
    card.appendChild(image);

    // Create card title
    const title = document.createElement("h2");
    title.textContent = royal.name;
    card.appendChild(title);

    // Create card description
    const description = document.createElement("p");
    description.textContent = royal.description;
    card.appendChild(description);
    
    // Create card button
    const house = document.createElement("button");
    house.innerHTML = royal.house;
    card.appendChild(house);

    // Append card to the container
    container.appendChild(card);
  });
}

generateCards();






//new object for testing

/*

var britishRoyals = [
  {
    name: "George II",
    house: "House of Hanover",
    reign: "1727-1760",
    image: "george-ii.jpg",
    description: "George II was the King of Great Britain and Ireland from 1727 until his death in 1760. He was the last British monarch born outside Great Britain, and his reign saw significant political and social changes.",
    showReign: false
  },
  // ...rest of the royals
];

*/


function toggleReign(index) {
  britishRoyals[index].showReign = !britishRoyals[index].showReign;
  displayCards();
}

function displayCards() {
  var cardsContainer = document.getElementById("card-container");
  cardsContainer.innerHTML = "";

  britishRoyals.forEach(function (royal, index) {
    var card = document.createElement("div");
    card.className = "card";

    var image = document.createElement("img");
    image.src = royal.image;
    image.alt = royal.name;
    card.appendChild(image);

    var title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = royal.name;
    card.appendChild(title);

    var button = document.createElement("a");
    button.className = "toggle-info";
    button.href = "#";
    button.textContent = royal.showReign ? "Hide Reign" : "Show Reign";
    button.addEventListener("click", function () {
      toggleReign(index);
    });
    title.appendChild(button);

   

    var description = document.createElement("p");
    description.className = "card-description";
    description.textContent = royal.description;
    card.appendChild(description);
    
     if (royal.showReign) {
      var reign = document.createElement("div");
      reign.className = "reign";
      reign.textContent = "Reign: " + royal.reign;
      card.appendChild(reign);
    }

    cardsContainer.appendChild(card);
  });
}

displayCards();
