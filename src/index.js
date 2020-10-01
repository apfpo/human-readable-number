module.exports = function toReadable (number) {
	let dict1 = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
let dict2 = ['twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
	let newnum = []
  for(let i = number.toString().length - 1; i >= 0 ; i--){
    if(i == 0){
      if(number.toString() == '0') return 'zero'
      else{
        newnum.push(dict1[Number(number.toString()[number.toString().length - 1])])
        continue
      }
    }
    if(i == 1){
      if(number%100 < 13){
        newnum.push(dict1[Number((number%100).toString())].toString())
        break
      }
      else if(number%100 < 20){
        number.toString()[number.toString().length - 1] === '4' ? newnum.push(dict1[Number(number.toString()[number.toString().length - 2]) + 3].toString() + 'teen') : newnum.push(dict2[Number(number.toString()[number.toString().length - 1]) - 2].toString() + 'teen')
        break
      }
      else{
        newnum.push(dict2[Number(number.toString()[number.toString().length - 2]) - 2].toString() + 'ty')
        continue
      }
    }
    if(i == 2){
      newnum.push(dict1[Number(number.toString()[number.toString().length - 3].toString())] + ' hundred')
      continue
    }
  }
  return newnum.join(" ").trim()
}
