const question = () => {
    const Month = document.getElementById("Month");
    const Day = document.getElementById("Day");
    const message = document.getElementById("message");

    const BirthDay = 5;
    const BirthMonth = 2;
  
    const updateMessage = () => {
      const M = parseInt(Month.value);
      const D = parseInt(Day.value);
      
      if((M*40 + D) < (BirthMonth *40 + BirthDay)) {
        message.textContent = `too early`;
      } else if ((M*40 + D) == (BirthMonth *40 + BirthDay)) {
        message.textContent = `you got it!`;
      } else {
        message.textContent = `too late`;
      }

    };
    Month.addEventListener("input", updateMessage);
    Day.addEventListener("input", updateMessage);
  
  };
  
document.addEventListener("DOMContentLoaded", (event) => {
    try {
      question();
    } catch (e) {
      console.error(e);
    }
});