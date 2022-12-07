const posts=[
    {title:'post one' , body:'this is post one'},
    {title:'post two' , body:'this is post two'}
];



function getPosts()
{
    setTimeout(() =>{
        let output = ' ';
        posts.forEach((post, index)=>{
            output += `<li> ${post.title}  </li>`;
        });
    
    document.body.innerHTML=output;
    },1000);
}
function createPost(post)
{
    return new Promise ((resolve,reject) =>
    {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:Something went wrong')
            }
           
        },2000);
    });
    
}


 function deletePost()
 {
    return new Promise ((resolve,reject) =>
    {
       
        setTimeout(() =>{  
           if(posts.length >0)
           {
            resolve(posts.pop());
           }
           else
           {
            reject('ERROR:Array is empty');
           }
        },1000);  
    });
    
}
createPost({title:'post three' , body:'this is post three'}).then(() =>
{
 getPosts()
 deletePost().then(()=>{
 getPosts()
 deletePost().then(()=>{
 getPosts()
 deletePost().then(()=>{
 getPosts()
 deletePost().then(()=>{})
 .catch((err) =>
 console.log('Inside catch block',err))

 
})
})
 })
} );
 