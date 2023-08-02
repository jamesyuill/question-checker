const findValidQuestions = (remainingAttributes, allQuestions) => {
    const remainingQuestions = {}
    for (let attribute in remainingAttributes) {
        remainingQuestions[attribute] = []
        remainingAttributes[attribute].forEach(variation => {
            const question = allQuestions[attribute].filter(question => question.checkFor === variation)
            remainingQuestions[attribute].push(question[0])
        })
    }
    return remainingQuestions
}

export default findValidQuestions