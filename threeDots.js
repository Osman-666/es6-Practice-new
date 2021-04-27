const ages1 = [12,17,18,15,13];
const ages2 = [17,15,11,10,19,18,13];
const ages3 = [29,26,22,23,20,21,28];
const allAges1 = ages1.concat(ages2).concat([0]).concat(ages3);
const allAges2 = [...ages1, ...ages2, 0, ...ages3];
console.log(allAges1);
console.log(allAges2);