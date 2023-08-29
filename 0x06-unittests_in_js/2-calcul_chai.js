function calculateNumber(type, a, b) {
    const anum = Math.round(a);
    const bnum = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = anum + bnum;
	break;
    case 'SUBTRACT':
	c = anum - bnum;
	break;
    case 'DIVIDE':
      if (bnum === 0) {
            c = "Error";
      } else {
            c = anum / bnum;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
