
const CIN = 91;
function validateIdentity(CIN) {
  let isPrime = true;

  if (CIN < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i < CIN; i++) {
      if (CIN % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log("Agent Approved: Identity pattern is untraceable.");
  } else {
    console.log("Rejected: Identity pattern shows external links.");
  }
}
validateIdentity(CIN);