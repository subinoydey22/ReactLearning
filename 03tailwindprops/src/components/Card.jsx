import React from 'react'

const Card = ({username='HC',designation='Test Designation',source='https://tse1.mm.bing.net/th/id/OIP.eoy8J05GbW2RtYoTypyO9QHaEW?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',myArr}) => {
   // console.log(props);
  return (
    <div>
        {/* <img src='https://i.ytimg.com/vi/ym17apxNaLE/maxresdefault.jpg' alt=''></img>
        <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>{"    "}
        <p>My name is Subinoy Dey and I am a full stack developer</p> */}
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={source} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {designation} 
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card