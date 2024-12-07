function highAndLow(numbers){
const n = Array.from(numbers.split(" "), Number);
  const high = Math.max(...n);
  const low =  Math.min(...n);
  return `${high} ${low}`; 
  
}
