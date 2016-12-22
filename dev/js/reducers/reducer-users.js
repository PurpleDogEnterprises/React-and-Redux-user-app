/*
 * The users reducer will always return an array of users no matter what
 * Something needs to be returned, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Skeeter",
            last: "Jones",
            age: 42,
            description: "Skeeter is a vegan doggo.",
            thumbnail: "http://i.imgur.com/6SZIEgh.jpg?1"
        },
        {
            id: 2,
            first: "Elvis",
            last: "Fursley",
            age: 28,
            description: "Phhhhhht!!!!",
            thumbnail: "http://i.imgur.com/LTwexbi.jpg"
        },
        {
            id: 3,
            first: "James",
            last: "Bone",
            age: 49,
            description: "Secret agent doggo 00K9.",
            thumbnail: "http://i.imgur.com/MKxBlgw.png"
        }
    ]
}
