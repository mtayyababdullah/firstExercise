const names = ['Farhan', 'Sajid', 'Faizan',];

names.unshift ('Juraij');
names.splice (2, 0, 'Younas');
names.push ('Amjad');


console.log (names);



for (let name of names) {

    console.log (`Hello ${name} Hope you are fine. You are cordially invited for dinner at my place. \n`);
} 

for (let name of names) {

    console.log (`Hello ${name} Hope you are fine. Due to some space issue i can invite only two persons. `);
}

const friends = names.slice (4);



console.log (friends);