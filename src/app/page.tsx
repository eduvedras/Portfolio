'use client'
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className='h-screen px-10 md:px-20 lg:px-20 bg-slate-900 lg:grid lg:grid-cols-3 lg:gap-16 lg:overflow-hidden'>
      <section className="h-screen col-span-1">
        <div className='p-10'>
          <div className='relative rounded-full w-52 h-52 mx-auto'>
            <Image src='/profilepic.jpg' alt='profile picture' className='rounded-full' fill/>
          </div>
        </div>
        <div className='text-center just'>
          <h2 className='text-5xl text-teal-500 font-medium'>Eduardo Miranda</h2>
          <h3 className='text-2xl py-2'>Software Developer</h3>
          <p className='text-md p-5 leading-7 text-gray-300'>Hi, I am a computer science student from Portugal, 
            currently studying at <span onClick={() => location.href = 'https://tecnico.ulisboa.pt/en/'} className='font-extrabold text-gray-200 hover:text-teal-500'>Instituto Superior Técnico</span>. I have already 
            completed my bachelor&apos;s degree in computer science and am currently pursuing a master&apos;s degree with a specialization in Software Engineering and 
            Artificial Intelligence. I am eager to gain work experience and contribute to an exciting new project.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16'>
          <FaGithub onClick={() => location.href = 'https://github.com/eduvedras'} className='hover:text-teal-500'/>
          <FaLinkedin onClick={() => location.href = 'https://www.linkedin.com/in/em-miranda/'} className='hover:text-teal-500'/>
          <FaFile onClick={() => location.href = '/Eduardo_Miranda_1.pdf'} className='hover:text-teal-500'/>
        </div>
       
      </section>
      
      <section className='lg:col-span-2'>
        <div className='pt-10 pb-5'>
          <h3 className='text-3xl font-medium'>Projects</h3>
        </div>
        <div className='h-3/5 flex'>
        <div className='flex-1 flex overflow-hidden'>
          <div className='grid gap-5 overflow-y-auto no-scrollbar flex-1 rounded-lg'>
            <div onClick={() => router.replace('/Pokemon')} className='group max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg  bg-slate-800 hover:bg-slate-600 hover:shadow-slate-600 hover:text-teal-500'>
              <Image className='rounded-lg w-1/2' src='/Pokemon.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pokemon TCG visualization</div>
                <p className=" text-gray-100 text-base">
                  A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three
                  idioms that are connected with each other to perform complex searches.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">D3.js</span>
                </div>
              </div>
            </div>
            <div onClick={() => router.replace('/Overcooked')} className='group max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg  bg-slate-800 hover:bg-slate-600 hover:shadow-slate-600 hover:text-teal-500'>
              <Image className='rounded-lg w-1/2' src='/Overcooked-AI.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Overcooked-AI a fully cooperative task</div>
                <p className=" text-gray-100 text-base">
                  A multi-agent reinforcement learning (MARL) project to train agents to play the game Overcooked. The agents are trained using
                  Q-Learning and SARSA.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">Python</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">Jupyter Notebook</span>
                </div>
              </div>
            </div>
            <div onClick={() => router.replace('/Gossip')} className='group max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg  bg-slate-800 hover:bg-slate-600 hover:shadow-slate-600 hover:text-teal-500'>
              <Image className='rounded-lg w-1/2' src='/Gossip1.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Distributed Systems Project</div>
                <p className=" text-gray-100 text-base">
                  A Distributed Systems project that uses the gRPC framework and the gossip architecture to spread information between servers, 
                  solving concurrence problems.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">Java</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">gRPC</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">Maven</span>
                </div>
              </div>
            </div>
            <div onClick={() => router.replace('/Planet')} className='group max-w-sm w-full rounded-lg lg:max-w-full lg:flex shadow-lg  bg-slate-800 hover:bg-slate-600 hover:shadow-slate-600 hover:text-teal-500'>
              <Image className='rounded-lg w-1/2' src='/Planet.png' alt="Something" width={500} height={280}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Space Debris</div>
                <p className=" text-gray-100 text-base">
                  A three.js project that about a spaceship that has to collect debris in the exosphere of a planet. The project implements collisions, a movable camera and 
                  constant angular velocity.
                </p>
                <div className="pt-8">
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">JavaScript</span>
                  <span className="inline-block bg-gray-200 group-hover:bg-teal-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-teal-400 mr-2 mb-2">Three.js</span>
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
