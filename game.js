//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  //? eger input girilmediyse Kullaniciya uyari ver.

  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerText = "Congrats You Win";
    document.querySelector("body").style.background = "green";
    
  }
});
//? tebrikler bildiiniz
//? background = green

//? eger score > topScore
//?    topScore = score
//? secret_number = gorunur

//! degilse
//? eger score > 0
//!   score = score - 1
//?     eger rastgele < input.value
//?         Azalt
//?     degilse
//?         Arttir
//! degilse
//? uzgunuz kaybettiniz

//* againBtn basildiginda kontrolleri yap
