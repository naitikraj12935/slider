const review=[
    {
        id:1,
        name:"jhon wick",
        job:"frontend devloper",
        img:"https://tse3.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&P=0",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nihil ipsa sapiente architecto similique ut vero delectus quia, vitae ipsum"


    },
    {
        id:2,
        name:"scarlet jhonshon",
        job:"ui designer",
        img:"https://tse4.mm.bing.net/th?id=OIP.ZM4g1vwRVJJh55tXAapA9wAAAA&pid=Api&P=0",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illo vero iure non, officiis tenetur quo atque obcaecati voluptas nobis facilis officia debitis cum reiciendis error, distinctio, eum quidem fuga."

    },
    {
        id:3,
        name:"emmely clark",
        job:"ux designer",
        img:"https://tse1.mm.bing.net/th?id=OIP.CW9Y9r41ysQHnfgkOpejlAAAAA&pid=Api&P=0",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facere modi eius at amet, itaque eligendi delectus unde veniam, deserunt cupiditate iure placeat distinctio non hic officia culpa nihil ratione saepe reiciendis dolorum."

    },
    {
        id:4,
        name:"cristein bale",
        job:"backend devloper",
        img:"https://tse2.mm.bing.net/th?id=OIP.ewdsugvLYhr-nesnB1FmkwHaHa&pid=Api&P=0",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, ab quasi. Reprehenderit iure qui pariatur voluptate ab beatae provident nobis, a dolor alias nesciunt assumenda tempora eligendi facilis neque sit consectetur error! Ullam corporis fuga quos atque sapiente minus temporibus!"

    },
    {
        id:5,
        name:"katherine langford",
        job:"killing by smile",
        img:"https://tse2.mm.bing.net/th?id=OIP.XcyF9FCc1074ieu9GTe74gHaEX&pid=Api&P=0",
        text:"He was confirmed dead by police on Sunday Kristine Langford, 45, from Sydney, is also among those dead. The couple's 19-year-old son Jesse survived the volcano eruption, and is recovering in hospital with burns to 90 per cent of his body. Mr Langford worked for Sydney Water."

    }
    ,
    {
        id:6,
        name:"krestien sterwart",
        job:"to always be attitude girl",
        img:"https://tse3.mm.bing.net/th?id=OIP.FSon6AzWCHHJVoC-zek_KQHaEK&pid=Api&P=0",
        
        text:"Kristen Jaymes Stewart (born April 9, 1990) is an American actress. The world's highest-paid actress in 2012, she has received various accolades, including a British Academy Film Award and a César Award, in addition to nominations for an Academy Award and a Golden Globe Award."


    },
    {
        id:7,
        name:"joshphin langford",
        job:" to maintain cuteness overloaded",
        img:"https://tse3.mm.bing.net/th?id=OIP.mExC8AtmIvkaILulC3QTXwHaHa&pid=Api&P=0",
        text:"Josephine Langford (born 18 August 1997[1]) is an Australian actress. She is best known for her starring role as Tessa Young in the After film series. She also portrayed Emma Cunningham in the Netflix film Moxie while also portraying Zoey in upcoming Netflix romcom The Other Zoey and Katy Gibson in Gigi & Nate."
    }


];
//select iteams
const img=document.getElementById("image");
const name=document.getElementById("name");
const job=document.getElementById("job");
const info=document.getElementById("info");


const prevbtn=document.querySelector('.prev');
const nextbtn=document.querySelector('.next');

let current=0;
// window.addEventListener('DOMContentLoaded',function(){
// reviewperson(); 

// });
function reviewperson()
{
    const item=review[current];
    img.src=item.img
    job.textContent=item.job
    info.textContent=item.text
    name.textContent=item.name
}
prevbtn.addEventListener('click',function(){
    current=current-1;
    if(current<0)
    {
        current=review.length-1;
    }
    reviewperson();

});
nextbtn.addEventListener('click',function(){
    current++;
    if(current>review.length-1)
    {
        current=0;
    }
    reviewperson();
})