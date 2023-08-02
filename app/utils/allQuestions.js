const allQuestions = {
    skinColour: [
        { checkFor: "blue", question: "blue skin?" },
        { checkFor: "green", question: "green skin?" },
        { checkFor: "purple", question: "purple skin?" }
    ],
    skinTexture: [
        { checkFor: "scaly", question: "scaly skin?" },
        { checkFor: "furry", question: "furry skin?" },
        { checkFor: "normal", question: "normal skin?" }
    ],
    eyes: [
        { checkFor: 1, question: "1 eye?" },
        { checkFor: 2, question: "2 eyes?" },
        { checkFor: 3, question: "3 eyes?" },
        { checkFor: 4, question: "4 eyes?" },
        { checkFor: 5, question: "5 eyes?" }
    ],
    eyeColour: [
        { checkFor: "yellow", question: "yellow eyes?" },
        { checkFor: "red", question: "red eyes?" },
        { checkFor: "orange", question: "orange eyes?" }
    ],
    horns: [
        { checkFor: 0, question: "horns?" },
        { checkFor: 2, question: "2 horns?" },
        { checkFor: 4, question: "4 horns?" }
    ],
    hasAntenna: [
        { checkFor: true, question: "antenna?" },
        { checkFor: false, question: "antenna?" }
    ],
    isFriendly: [
        { checkFor: true, question: "a friendly face?" },
        { checkFor: false, question: "a scary face?" }
    ],
    planet: [
        { checkFor: "ice", question: "an ice planet?" },
        { checkFor: "desert", question: "a desert planet?" },
        { checkFor: "lava", question: "a lava planet?" }
    ]
}


// const allQuestions = {
//     skinColour: {
//         blue: "blue skin?",
//         green: "green skin?",
//         purple: "purple skin?"
//     },
//     skinTexture: {
//         furry: "furry skin?",
//         scaly: "scaly skin?",
//         normal: "normal skin?"
//     },
//     eyes: {
//         1: "1 eye?",
//         2: "2 eyes?",
//         3: "3 eyes?",
//         4: "4 eyes?",
//         5: "5 eyes?"
//     },
//     eyeColour: {
//         yellow: "yellow eyes?",
//         red: "red eyes?",
//         orange: "orange eyes?"
//     },
//     horns: {
//         0: "horns?",
//         2: "2 horns?",
//         4: "4 horns?"
//     },
//     hasAntenna: {
//         true: "antenna?"
//     },
//     isFriendly: {
//         true: "a friendly face?"
//     },
//     planet: {
//         ice: "an ice planet?",
//         desert: "a desert planet?",
//         lava: "a lava planet?"
//     }
// }



// const allQuestions = {
//     skin: {
//         colour: [
//             { variable: "blue", applicable: true, question: "furry skin?" },
//             { variable: "green", applicable: true, question: "scaly skin?" },
//             { variable: "purple", applicable: true, question: "normal skin?" }
//         ],
//         texture: [
//             { variable: "furry", applicable: true, question: "furry skin?" },
//             { variable: "scaly", applicable: true, question: "scaly skin?" },
//             { variable: "normal", applicable: true, question: "normal skin?" }
//         ]
//     },
//     eyes: {
//         colour: [
//             { variable: "red", applicable: true, question: "red eyes?" },
//             { variable: "yellow", applicable: true, question: "yellow eyes?" },
//             { variable: "orange", applicable: true, question: "orange eyes?" },
//         ],
//         number: [
//             { variable: 1, applicable: true, question: "1 eye?" },
//             { variable: 2, applicable: true, question: "2 eyes?" },
//             { variable: 3, applicable: true, question: "3 eyes?" },
//             { variable: 4, applicable: true, question: "4 eyes?" },
//             { variable: 5, applicable: true, question: "5 eyes?" }
//         ],
//     },
//     horns: [
//         { variable: 0, applicable: true, question: "horns?" },
//         { variable: 2, applicable: true, question: "2 horns?" },
//         { variable: 4, applicable: true, question: "4 horns?" }
//     ],
//     hasAntenna: { variable: true, applicable: true, question: "has antenna?" },
//     isFriendly: { variable: true, applicable: true, question: "a friendly face?" },
//     planet: [
//         { variable: "ice", applicable: true, question: "an ice planet?" },
//         { variable: "desert", applicable: true, question: "a desert planet?" },
//         { variable: "lava", applicable: true, question: "a lava planet?" }
//     ]
// }

export default allQuestions