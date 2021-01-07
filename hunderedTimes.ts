const cachedResults: { [input: number]: number } = {}
const calcEngine = (input: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(input *100), 2000)
  });
}

const hundredTimes = async (param: number): Promise<number> => {
  if (cachedResults.hasOwnProperty(param) && cachedResults[param]) {
    console.log('cached: ')
    return cachedResults[param];
  }

  cachedResults[param] = await calcEngine(param)
  return cachedResults[param];
}

(async () => {
  console.log(await hundredTimes(1) + '\n')
  //=> 100
  console.log(await hundredTimes(1) + '\n') // cached result should be retunrned intead of calculating again.
  //=> 100
  console.log(await hundredTimes(2) + '\n')
  //=> 200
  console.log(await hundredTimes(2) + '\n') // the same thing for this.
  //=> 200
  console.log(await hundredTimes(1) + '\n') // cached result should be returned again.
  //=> 100
})();



export default hundredTimes;
