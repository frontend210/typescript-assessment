import MyArray from './MyArray';

console.log('------- String only Array ------')
const stringAry = new MyArray()
stringAry.add('aaa')
stringAry.add('bbb')
stringAry.add('ccc')
stringAry.remove('bbb')
console.log(stringAry.getValues())
//=> [ 'aaa', 'ccc' ]
console.log('')

console.log('------- Number only Array ------')
const numberAry = new MyArray()
numberAry.add(1)
numberAry.add(2)
numberAry.add(3)
numberAry.remove(2)
console.log(numberAry.getValues())
//=> [ 1, 3 ]
console.log('')

console.log('------- Boolean only Array ------')
const booleanAry = new MyArray()
// NOTE: With only definition of MyArray class and tslint, we can detect type error at compile time,
// NOTE: below ts-ignore annotations are just for showing the case of invalid type.
// @ts-ignore
booleanAry.add(true)
// @ts-ignore
booleanAry.add(false)
console.log(booleanAry.getValues())
//=> You shouldn't be able to do these.
console.log('')

console.log('------- TypeMixed Array ------')
const typeMixedAry = new MyArray();
typeMixedAry.add(1);
typeMixedAry.add('bbb');
console.log(typeMixedAry.getValues())
//=> You shouldn't be able to do these.
//   You might need to change the expected result code itself a bit to get it work.
console.log('')

