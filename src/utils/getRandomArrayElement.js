// Get random element in array.
// If prevEl is passed, any equal element to prevEl in given array will not be chosen
export const getRandomArrayElement = (arr, prevEl) => {
  // Get new sample prompts array without prevPrompt
  const newArr = arr.filter(currEl => currEl !== prevEl)

  // Get random element
  let randEl = newArr[Math.floor(Math.random() * newArr.length)]
  return randEl
}
