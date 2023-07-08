'use client'
export default function Planet() {
    return (
        <main className='px-10 md:px-20 lg:px-40 bg-slate-900 w-full overflow-x-hidden'>
            <div className='pt-5 pb-5 flex justify-end'>
                <header className='fixed z-40'>
                    <button onClick={() => location.href = '/'} className='bg-gray-200 hover:bg-teal-800 rounded-md px-4 py-2 text-lg font-semibold text-gray-700 hover:text-teal-400'>Home</button>
                </header>
            </div>
            <div className='pb-5'>
                <h3 className='text-5xl font-medium'>Space Debris</h3>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Introduction</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    The escalating issue of space debris presents a critical challenge for the future of space 
                    exploration and satellite operations. As human activities in space continue to expand, it is 
                    crucial that we prioritize efforts to mitigate and reduce the accumulation of space junk to 
                    ensure the long-term sustainability and safety of space activities.
                </p>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    This is why in this project we implemented a simulation of the space debris problem.
                    A spaceship that has to collect debris in the exosphere of a planet.
                    This is a project built for the CG class and its objectives were: 
                    <ul>
                        <li>&emsp; <span className='font-extrabold text-gray-200'>i)</span> to explore the virtual camera concept; </li>
                        <li>&emsp; <span className='font-extrabold text-gray-200'>ii)</span> understand the differences between fixed camera and mobile camera; </li>
                        <li>&emsp; <span className='font-extrabold text-gray-200'>iii)</span> understand the differences between orthogonal projection and perspective projection; </li>
                        <li>&emsp; <span className='font-extrabold text-gray-200'>iv)</span> understand basic animation technique and collision detection. </li>
                    </ul> 
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Overall description</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    The project consists of a spaceship that flies at a distance of 1.20*R of the center of the planet
                    with the objective of collecting debris, R being the planet's radius. There are 20 debris distributed randomly in the exosphere
                    with varying sizes, colors and shapes. The spaceship is controlled by the user using the arrows keys,
                    the user can also change the camera view by pressing the keys 1, 2 and 3, where 1 is the frontal view,
                    2 is the perspective view and 3 is a perspective view that follows the spaceship. The collisions
                    are detected through spheres that surround the spaceship and the debris. Finally to optimize the program
                    the detection of collisions calculations are only done for the debris in the same quadrant as the spaceship.
                    The following video shows the project in action:
                </p>
                <video className='relative rounded-lg mx-auto' width="1000" height="800" controls>
                    <source src="/Planet.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Learn more</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    If you want to learn more about the project, click <span onClick={() => location.href = 'https://github.com/eduvedras/SpaceDebris'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to 
                    see the source code and <span onClick={() => location.href = 'https://eduvedras.github.io/SpaceDebris/'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to try it for yourself.
                </p>
            </div>
        </main>
    )
}