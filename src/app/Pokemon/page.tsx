'use client'
export default function Pokemon() {
    return (
        <main className='px-10 md:px-20 lg:px-40 bg-slate-900 w-full overflow-x-hidden'>
            <div className='pt-5 pb-5 flex justify-end'>
                <header className='fixed z-40'>
                    <button onClick={() => location.href = '/'} className='bg-gray-200 hover:bg-teal-800 rounded-md px-4 py-2 text-lg font-semibold text-gray-700 hover:text-teal-400'>Home</button>
                </header>
            </div>
            <div className='pb-5'>
                <h3 className='text-5xl font-medium'>Pokemon TCG visualization</h3>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Introduction</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    Pokemon TCG has been through the ages and is still one of
                    the most popular card games. A couple of years ago, while
                    I was still in school, everyone used to play it. The
                    competition was tough, everyone was trying to have the
                    invincible deck. Even if it was done in a naïve way, I was
                    always trying to understand how each type measures against
                    each other with the different stats, how rare cards measures
                    against the common ones and what were the strongest cards
                    to counter each type.
                    Some time has passed, and I am finally able to answer the
                    questions we were asking ourselves as children, with a clear,
                    easy to use and interactive visualization. To achieve that, this project
                    displays how types affect the hp, how certain cards
                    correlate according to level, hp, damage and energy cost
                    and how is the distribution of cards between the different
                    categories the following five attributes, evolution, rarity,
                    type, resistances, weaknesses.
                </p>
                <p className='text-md leading-7 text-gray-200'>
                    The data used in this project is from the <span className='font-extrabold text-gray-200 hover:text-teal-500'>Pokémon
                    TCG</span> official site that has a database with all the cards since
                    1999.
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Overall description</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    The project consists of 3 idioms and a search bar.
                    The search is on the left of the screen to the right is the first
                    idiom (boxplot), under this idiom is the second one (parallel
                    coordinates) and on the right most side of the screen is the
                    third idiom (parallel sets). The following video explains in detail 
                    what each idiom does and how to use them:
                </p>
                <video className='relative rounded-lg mx-auto' width="1000" height="800" controls>
                    <source src="/VI-25_Video.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Learn more</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    If you want to learn more about the project, click <span onClick={() => location.href = '/VI-25_Report.pdf'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to read the report
                    of the project and <span onClick={() => location.href = 'https://eduvedras.github.io/Pokemon-Vis/'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to try it for yourself. 
                </p>
            </div>
        </main>
    )
}