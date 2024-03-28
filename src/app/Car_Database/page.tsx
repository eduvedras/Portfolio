'use client'
export default function Car_Database() {
    return (
        <main className='px-10 md:px-20 lg:px-40 bg-slate-900 w-full overflow-x-hidden'>
            <div className='pt-5 pb-5 flex justify-end'>
                <header className='fixed z-40'>
                    <button onClick={() => location.href = '/'} className='bg-gray-200 hover:bg-teal-800 rounded-md px-4 py-2 text-lg font-semibold text-gray-700 hover:text-teal-400'>Home</button>
                </header>
            </div>
            <div className='pb-5'>
                <h3 className='text-5xl font-medium'>Car Database</h3>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Introduction</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    This database is a project that I developed for three reasons the first one was to refresh my
                    knowledge about databases, the second one was to learn more about the flask framework. Lastly, 
                    it was a response to my father's request for a tool equipped with filtering and search capabilities 
                    to effectively monitor certain cars.     
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Overall description</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    The project consists of a database that contains information about cars, such as the brand, model, year, 
                    and price. The database is connected to a website that allows the user to search and filter cars based on the information 
                    that is stored in the database. The website also contains an add menu that allows the user to add cars to the
                    database and a remove menu to remove them.
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">Learn more</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    If you want to learn more about the project, click <span onClick={() => location.href = 'http://eduvedras.pythonanywhere.com/'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to try it for yourself. You can
                    also click <span onClick={() => location.href = 'https://github.com/eduvedras/Car-Database'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to see the source code of the project.
                </p>
            </div>
        </main>
    )
}