const { reviewData } = window;

function review(){
    
    const container = document.getElementById("card-container");
   // container.innerText = " ";

        for(let i=0;i<window.reviewData.length;i++){

        
        let card = document.createElement("div");
        card.classList.add("card"); 

        let reviewDate = document.createElement("card-date");
        reviewDate.innerHTML = window.reviewData[i].date;
        reviewDate.classList.add("card-date");

        let reviewText = document.createElement("card-review");
        reviewText.innerHTML = window.reviewData[i].review;
        reviewText.classList.add("card-review");

        let reviewRate = document.createElement("card-rate");
        reviewRate.innerHTML = window.reviewData[i].rate;
        reviewRate.classList.add("card-rate");

        card.appendChild(reviewDate);
        card.appendChild(reviewText);
        card.appendChild(reviewRate);

        console.log(card);
        container.appendChild(card);
        
        
        }     
};


window.onload = function(){
    review();
};

//console.log({reviewData}, "App Data");