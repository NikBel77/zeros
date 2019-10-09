module.exports = function zeros(expression) {

  let num = 0;
  let zero = 0;
  let numF = 0;
  let numT = 0;
  ep = expression.split("*");

  for (let i = 0; i < ep.length; i++) {

    if (ep[i].lastIndexOf("!!") !== -1) {

      num = Number(ep[i].substr(0, ep[i].length - 2));

      //code for !!

      if (num % 2 !== 0) {

        for (let j = 1; Math.pow(5, j) <= num; j++) {

          for (let i = 1; Math.pow(5, j) * i <= num; i += 2) {

            if (Math.pow(5, j) * i <= num) {

              numF +=1;
            }
          }
        }
      }
      else if (num % 2 === 0) {

        for (let j = 1; Math.pow(5, j) <= num; j++) {

          for (let i = 2; Math.pow(5, j) * i <= num; i += 2) {

            if (Math.pow(5, j) * i <= num) {

              zero +=1;
            }
          }
        }

        numT += Math.floor(num / 2);

      }
    }
    else if (ep[i].lastIndexOf('!') !== -1) {

      num = Number(ep[i].substr(0, ep[i].length - 1));

      //code for !

      for (let k = 1; Math.pow(5, k) <= num; k++) {

        zero += Math.floor(num / Math.pow(5, k));

      }

      numT += Math.floor(num / 2)

    }
  }
  
  if (numT > numF) {
    zero += numF;
  }
  else {
    zero += numT;
  }

  return (zero);
}