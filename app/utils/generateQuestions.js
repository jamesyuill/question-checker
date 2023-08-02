import findRemainingAttributes from "./findRemainingAttributes"
import testAliens from "./testAliens"
import allQuestions from "./allQuestions"
import findValidQuestions from "./findValidQuestions"



const generateQuestions = (aliens) => {
    const remainingAliens = aliens.filter(alien => alien.isActive)
    const remainingAttributes = findRemainingAttributes(remainingAliens)
    console.log(remainingAttributes, "<<<<<< remainingAttributes")
    const validQuestions = findValidQuestions(remainingAttributes, allQuestions)
    console.log(validQuestions, "<<<<<< validQuestions")
}

generateQuestions(testAliens)

export default generateQuestions