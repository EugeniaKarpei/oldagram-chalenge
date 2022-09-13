const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 1321
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 485
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const mainEl = document.getElementById("main")

renderPosts()

// const iconHeart = document.getElementById("icon-heart")

// iconHeart.addEventListener("click", function(event){
//     console.log(event.target)
// })

function renderPosts(){ 
    for (let i = 0; i < posts.length; i ++){
        const post = posts[i]
        mainEl.innerHTML += getNewSection(post)       
    }   
}

function getNewSection(post){
    const section = 
    
    `<div class="section">
                <div class="user-info">
                    <img class="avatar-img" src="${post.avatar}">
                    <div class="user-info-container">
                        <h1 class="bold">${post.name}</h1>
                        <p class="location">${post.location}</p>
                    </div>
                </div>
            <div>
                <img class="post-img" src="${post.post}">
            </div>
            <div class="likes-info">
                <div class="icons-container">
                    <img id="icon-heart" class="icons" src="images/icon-heart.png">
                    <img class="icons" src="images/icon-comment.png">
                    <img class="icons" src="images/icon-dm.png">
                </div>
                    <p class="bold likes-count">${post.likes} likes</p>
                    <p><span class="bold">${post.username}</span> ${post.comment}</p>
                </div>
                </div>
        </div>`
            
    return section
}


          

