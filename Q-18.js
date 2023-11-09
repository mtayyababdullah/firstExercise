 const worldTour = ['London', 'Saudia', 'Canada', 'Africa', 'New Zealand'];



 console.log('Original', worldTour);

 const sortedArray = [...worldTour].sort();
 
 console.log('Shorted', sortedArray);

 console.log('Original', worldTour);

 const revdArray = [...sortedArray].reverse();

 console.log('Reversed', revdArray);

 console.log('Original', worldTour);

 const revArray = [...worldTour].reverse();

 console.log('Reversed', revArray);

 const reArray = [...revArray].toReversed();

 console.log('ReversedBack', reArray);

 console.log('Shorted', sortedArray);
 
 console.log('Reversed', revdArray);

 