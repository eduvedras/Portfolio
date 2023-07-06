'use client'
export default function Overcooked() {
    return (
        <main className='px-10 md:px-20 lg:px-40 bg-slate-900 w-full overflow-x-hidden'>
            <div className='pt-5 pb-5 flex justify-end'>
                <header className='fixed z-40'>
                    <button onClick={() => location.href = '/'} className='bg-gray-200 hover:bg-teal-800 rounded-md px-4 py-2 text-lg font-semibold text-gray-700 hover:text-teal-400'>Home</button>
                </header>
            </div>
            <div className='pb-5'>
                <h3 className='text-5xl font-medium'>Overcooked-AI a fully cooperative task</h3>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Introduction</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    <span onClick={() => location.href = 'https://github.com/HumanCompatibleAI/overcooked_ai'} className='font-extrabold text-gray-200 hover:text-teal-500'>Overcooked-AI</span> is a benchmark environment designed to test the
                    performance of fully cooperative task coordination, based on the
                    popular video game Overcooked. In this environment, agents must
                    work together to deliver soups as fast as possible by coordinating
                    tasks and distributing them amongst each other. The game requires
                    effective communication, planning, and decision-making, making
                    it a challenging test of cooperation. The main motivation behind this project subject is to learn more
                    about coordination and cooperation in a multi-agent system in a
                    visual way.
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Overall description</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    In this project Q-Learning
                    and SARSA were used to train the agents, then to compare the two 
                    algorithms we used a metric that takes into account not only
                    the number of soups delivered but also other sub-goals. The following video shows
                    interesting behaviors that the agents learned during the training for each algorithm. 
                </p>
                <video className='relative rounded-lg mx-auto' width="1000" height="800" controls>
                    <source src="/AASMA.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Learn more</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    If you want to learn more about the project, click <span onClick={() => location.href = '/AASMA-report.pdf'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to read the report
                    and get a more detailed explanation about the results.
                </p>
            </div>
        </main>
    )
}