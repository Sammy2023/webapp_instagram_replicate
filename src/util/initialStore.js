/* sample data store*/
export default { 
    currentUserId: "judy",
    users:[
        {
            id:"judy",
            email:"judy@bc.edu",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/user1.png?v=1647287055846",
            name: "Judy Hopps",
            bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species.",
            
        },
        {
            id:"nick",
            email:"nick@bc.edu",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/user2.png?v=1647287056446",
            name:"Nick Wilde",
        },

        {
            id:"flash",
            email:"flash@bc.edu",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/user3.png?v=1647287055930",
            name: "Flash Slothmore",
            bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles.",
            
        }
    ],
    followers:[
        {
            userId:"nick",
            followerId:"judy"
        },
        {
            userId:"judy",
            followerId:"nick"
        },
        {
            userId:"judy",
            followerId:"flash"
        }
    ],
    posts:[
        {   
            id:"post-1",
            userId:"judy",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post1.png?v=1647287012210",
            desc:"#zootopia #excited",
            datetime: "2020-02-09T22:45:28Z",   

        },
        {
            id:"post-2",
            userId:"nick",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post2.png?v=1647287012210",
            desc:"#happy #selfie with Judy",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-3",
            userId:"flash",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post3.png?v=1647287012210",
            desc:"Don't worry I got this",
            datetime: "2020-02-03T22:45:28Z",
        },
        {
            id:"post-4",
            userId:"judy",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post4.png?v=1647287012210",
            desc:"Just trying to make a #friend",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-5",
            userId:"judy",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post5.png?v=1647287012210",
            desc:"I am now the first rabbit officer!",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-6",
            userId:"judy",
            photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post6.png?v=1647287012210",
            desc:"Having #goodtimes with folks here",
            datetime: "2020-02-06T22:45:28Z",
        },
    ],
    comments:[
        {
            userId:"nick",
            postId:"post-1",
            text:"Welcome to Zootopia!",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"judy",
            postId:"post-1",
            text:"Thanks!????Looking forward to meeting you!", 
            datetime:"2020-02-09T22:52:01Z"
        },
        {
            userId:"flash",
            postId:"post-2",
            text:"Looking good you two! ????????", 
            datetime:"2020-02-09T22:54:20Z"
        }
    ],
    likes:[
        {
            userId:"judy",
            postId:"post-1",
            datetime:"2020-02-09T22:50:40Z"
        },
        {
            userId:"nick",
            postId:"post-2",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"flash",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"judy",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        }
    ]
}

