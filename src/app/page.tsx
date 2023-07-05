import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='h-screen px-10 md:px-20 lg:px-20 bg-slate-900 grid grid-cols-3 gap-16 overflow-hidden'>
      <section className="h-screen col-span-1">
        <div className='p-10'>
          <div className='relative rounded-full w-60 h-60 mx-auto'>
            <Image src='/profilepic.jpg' alt='profile picture' className='rounded-full' layout='fill'/>
          </div>
        </div>
        <div className='text-center just'>
          <h2 className='text-5xl text-teal-500 font-medium'>Eduardo Miranda</h2>
          <h3 className='text-2xl py-2'>Software Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-300'>Hi, I am a computer science student from Portugal, 
            currently studying at <span className='font-extrabold text-gray-200'>Instituto Superior Técnico</span>. I have already 
            completed my bachelor's degree in computer science and am currently pursuing a master's degree with a specialization in Software Engineering and 
            Artificial Intelligence. I am eager to gain work experience and contribute to an exciting new project.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16'>
          <FaGithub/>
          <FiMail/>
          <FaLinkedin/>
        </div>
       
      </section>
      
      <section className='col-span-2'>
        <div className='pt-10 pb-5'>
          <h3 className='text-3xl font-medium'>Projects</h3>
        </div>
        <div className='h-3/5 flex'>
        <div className='flex-1 flex overflow-hidden'>
          <div className='grid gap-5 overflow-y-auto no-scrollbar flex-1'>
            <div className='max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg shadow-slate-600 bg-slate-600'>
              <Image className='rounded-lg w-1/2' src='/Pokemon.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pokemon TCG visualization</div>
                <p className=" text-gray-100 text-base">
                  A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three
                  idioms that are connected with each other to perform complex searches.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">D3.js</span>
                </div>
              </div>
            </div>
            <div className='max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg shadow-slate-600 bg-slate-600'>
              <Image className='rounded-lg w-1/2' src='/Pokemon.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pokemon TCG visualization</div>
                <p className=" text-gray-100 text-base">
                  A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three
                  idioms that are connected with each other to perform complex searches.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">D3.js</span>
                </div>
              </div>
            </div>
            <div className='max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg shadow-slate-600 bg-slate-600'>
              <Image className='rounded-lg w-1/2' src='/Pokemon.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pokemon TCG visualization</div>
                <p className=" text-gray-100 text-base">
                  A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three
                  idioms that are connected with each other to perform complex searches.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">D3.js</span>
                </div>
              </div>
            </div>
            <div className='max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg shadow-slate-600 bg-slate-600'>
              <Image className='rounded-lg w-1/2' src='/Pokemon.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pokemon TCG visualization</div>
                <p className=" text-gray-100 text-base">
                  A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three
                  idioms that are connected with each other to perform complex searches.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">D3.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}
