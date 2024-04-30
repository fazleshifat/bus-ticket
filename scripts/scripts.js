const allBtn = document.getElementsByClassName("all-button");

let seat = 0;

let seatAvl = 40;

let arrtotalSeat = [];

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
  
    seat = seat + 1;
    document.getElementById("seat-count").innerText = seat;


    

    arrtotalSeat.push(btn);
    btn.disabled = true;

    if (arrtotalSeat.length === 3) {
      
      document.getElementById("seat-count").innerText = '3';
      
      
    }

    if (arrtotalSeat.length > 3) {
      
      alert("can't book more than three seats");
      return;
    }


    const seatName = btn.innerText;

    const ticketPrice = parseFloat(document.getElementById("550").innerText);

    const selectedSeat = document.getElementById("selected-seat-container");

    const blankSeat = document.getElementById("economy");

    blankSeat.classList.add("hidden");

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedSeat.appendChild(li);

    selectedSeat
      .appendChild(li)
      .classList.add("flex", "justify-between", "font-semibold");

    // price calculation

    // total price

    const totalPrice = document.getElementById("total-price").innerText;

    const convertedTotalCost = parseInt(totalPrice);

    const sum = convertedTotalCost + parseInt(ticketPrice);

    // grand total price

    const grandTotalCost =
      document.getElementById("grand-total-price").innerText;

    const convertedGrandTotalCost = parseInt(grandTotalCost);

    const sum2 = convertedGrandTotalCost + parseInt(ticketPrice);

    // showing total price
    document.getElementById("total-price").innerText = sum;

    // showing grand total price
    document.getElementById("grand-total-price").innerText = sum2;

    // coupon applying part

    const applyCouponBtn = document.getElementById("apply-coupon");

    // const soloCoupon = 'new15';
    const coupleCoupon = "couple20";

    // function of applying coupone

    applyCouponBtn.addEventListener("click", function (e) {
      const couponInput = document.getElementById("couponInput").value;
      const soloCoupon = "new15";
      if (couponInput === soloCoupon) {
        const grandTotal = sum2 - (sum2 * 15) / 100;
        document.getElementById("grand-total-price").innerText =
          parseInt(grandTotal);
       
      }
    });
  });

  btn.addEventListener("click", function (e) {
    seatAvl = seatAvl - 1;
    document.getElementById("available-seat").innerText = seatAvl;
  });
}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function (e) {
  // passenger information

  const passengerName = document.getElementById("passenger-name");
  const passengerNameValue = passengerName.value;
  // console.log(passengerNameValue);

  const passengerNumber = document.getElementById("passenger-number");
  const passengerNumberValue = passengerNumber.value;
  // console.log(passengerNumberValue);

  const passengerEmail = document.getElementById("passenger-email");
  const passengerEmailValue = passengerEmail.value;
  // console.log(passengerEmailValue);

  const passengerInfoContainer = document.getElementById("container");
  const passengerInfoContainer2 = document.getElementById("container-2");

 
  const li = document.createElement("li");
  const li2 = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = "Passenger Name :";
  const p11 = document.createElement("p");
  p11.innerText = passengerNameValue;

  const p2 = document.createElement("p");
  p2.innerText = "Passenger Number :";
  const p22 = document.createElement("p");
  p22.innerText = passengerNumberValue;

  const p3 = document.createElement("p");
  p3.innerText = "Passenger Email :";
  const p33 = document.createElement("p");
  p33.innerText = passengerEmailValue;

  li.appendChild(p);
  li.appendChild(p2);
  li.appendChild(p3);

  li2.appendChild(p11);
  li2.appendChild(p22);
  li2.appendChild(p33);

  // passenger section function
  passengerInfoContainer.appendChild(li);
  passengerInfoContainer2.appendChild(li2);
});

