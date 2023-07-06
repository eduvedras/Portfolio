'use client'
export default function Gossip() {
    return (
        <main className='px-10 md:px-20 lg:px-40 bg-slate-900 w-full overflow-x-hidden'>
            <div className='pt-5 pb-5 flex justify-end'>
                <header className='fixed z-40'>
                    <button onClick={() => location.href = '/'} className='bg-gray-200 hover:bg-teal-800 rounded-md px-4 py-2 text-lg font-semibold text-gray-700 hover:text-teal-400'>Home</button>
                </header>
            </div>
            <div className='pb-5'>
                <h3 className='text-5xl font-medium'>Distributed Systems Project with Gossip Architecture</h3>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">1. Introduction</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                The objective of the Distributed Systems (DS) project was to develop the "Classes" system, 
                a service for enrolling in classes of a given curricular unit. The service is provided by 
                servers through calls to remote procedures. It is assumed that there 
                is only one class. The service can be accessed by three types of customers:
                <ul>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>i)</span> teachers, who can open and close registrations, as well as consult and change the status of registrations; </li>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>ii)</span> students who can consult and enroll; </li>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>iii)</span> the *administrators* who keep the service running. </li>
                </ul> 
                </p>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    The system was realized through a set of gRPC services implemented in the Java platform.
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">2. Service Interfaces</h3>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    The servers maintain the state necessary to provide the service. This status includes
                    the Class status that has the following state associated with it:
                <ul>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>i)</span> Class capacity; </li>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>ii)</span> Indication whether registration is open or closed; </li>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>iii)</span> List of students enrolled in the class. </li>
                    <li>&emsp; <span className='font-extrabold text-gray-200'>iv)</span> List of students whose registration was revoked (this can happen due to the eventual coherence model).</li>
                </ul> 
                </p>
                <p className='text-md leading-7 pt-2 text-gray-200'>
                    Each server exports multiple interfaces. Each interface is designed to expose data to 
                    different entities. As mentioned, the project considers that there are three different types 
                    of clients, namely teachers, students and administrators. Furthermore, the servers export 
                    a fourth interface designed to be invoked by other servers (in the case where the servers 
                    are replicated, and need to communicate with each other).
                </p>
                <div className="pt-4">
                    <h3 className="text-xl font-medium pb-2">2.1. Teacher interface</h3>
                    <ul>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    openEnrollments
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- receives the class capacity and opens enrollment on this class</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    closeEnrollments
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- closes class enrollment</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    list
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- lists enrollment status, displaying enrolled students list, canceled enrollment list, and total class capacity</p>
                        </li>
                        <li className="flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    cancelEnrollment
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- receives a student identifier, unsubscribing the student and placing him on the class's canceled list</p>
                        </li>
                    </ul>
                </div>
                <div className="pt-4">
                    <h3 className="text-xl font-medium pb-2">2.2. Student interface</h3>
                    <ul>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    list
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- lists enrollment status, displaying enrolled students list, canceled enrollment list, and total class capacity</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    enroll
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- receives the student name and identifier, enrolling the student</p>
                        </li>
                    </ul>
                </div>
                <div className="pt-4">
                    <h3 className="text-xl font-medium pb-2">2.3. Administrator interface</h3>
                    <ul>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    activate
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- put the server in ACTIVE mode (this is the default behavior), where it responds to all requests</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    deactivate
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- put the server in IDLE mode. In this mode, the server responds with the error "DISABLED" to all requests from teachers and students</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    dump
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- reports the server state</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    deactivateGossip
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- ends the deferred propagation process between replicas</p>
                        </li>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    activateGossip
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- starts the deferred propagation process between replicas</p>
                        </li>
                        <li className="flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    gossip
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- forces a replica to do a deferred propagation to the other replica(s)</p>
                        </li>
                    </ul>
                </div>
                <div className="pt-4">
                    <h3 className="text-xl font-medium pb-2">2.4. Interface between servers</h3>
                    <ul>
                        <li className="pb-2 flex">
                            <div className="rounded-lg border-1 bg-slate-800 border-slate-500 w-fit ">
                                <p className="py-1 px-2 font-mono">
                                    propagateState
                                </p>
                            </div>
                            <p className="text-md pt-1 text-gray-200">&nbsp; -- a server sends its status to another replica</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">3. Concurrence problems description</h3>
                <p className='text-md leading-7 pt-2 pb-2 text-gray-200'>
                    The service is provided by two or more servers that share state using an eventual control model, 
                    capable of integrating concurrent operations. Subscription operations can be done on either server, 
                    which propagate in deferred ("background") as changes to the other server. 
                    Whenever possible, concurrently executed operations are integrated into a common state. In this model,
                    some operations may be canceled later automatically by the system. For example, if two students 
                    reserve the last spot in a class, concurrently, using different servers. 
                </p>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    More specifically, 
                    consider a class with capacity for 2 students that is initially empty. Consider two students 
                    who simultaneously contact two different servers to register:
                </p>
                <div className="w-full rounded-lg border-2 bg-slate-950 border-slate-500 ">
                    <p className="pt-2 px-4 font-mono">- Student A registers on server S1</p>
                    <p className="pb-2 px-4 font-mono">- Student B registers on server S2</p>
                </div>
                <p className='text-md leading-7 pt-2 pb-2 text-gray-200'>
                    Temporarily, the servers will have inconsistent information: each of them has only one enrollment 
                    in this class, but from a different student. After the deferred propagation of the updates 
                    between the servers, both servers must have the same state, with both students appearing in 
                    the list of subscribers, in both replicas.
                </p>
                <p className='text-md leading-7 pt-2 pb-2 text-gray-200'>
                    Consider the same example, but now with 4 students:
                </p>
                <div className="w-full rounded-lg border-2 bg-slate-950 border-slate-500 ">
                    <p className="pt-2 px-4 font-mono">- Two students contact server S1</p>
                    <p className="pb-2 px-4 font-mono">- The other two contact the S2 server</p>
                </div>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    After doing the deferred propagation, it turns out that the total number of enrollments 
                    exceeds the class capacity, so two of these students will have to be placed on the canceled 
                    enrollment list.
                </p>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">4. Solution</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    To solve this problem, our solution was to send the time each subscription was 
                    made to the server that locally keeps a list of all updates. Then, when the gossip 
                    occurs, the server compares its list of updates with the one it received and if the 
                    total number of entries exceeds the capacity, it places the entries that are in both 
                    lists of updates in temporal order up to the capacity, the surpluses are discarded . If two 
                    entries were perfectly concurrent, give priority to the primary server.
                    Another situation that can cause inconsistencies happens when the teacher closes enrollments 
                    in the primary and an enrollment has been made in the secondary before the gossip takes place. 
                    To solve this problem we added a closeTime variable that is updated with the time the 
                    closeEnrollments command takes place, then when the primary server receives a gossip it 
                    compares the time the enrollment was made with this and decides whether to accept it or not. 
                    The following video shows the solution in action:
                </p>
                <video className='relative rounded-lg mx-auto' width="1000" height="800" controls>
                    <source src="/Distributed_Systems.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='pt-5 pb-5'>
                <h3 className="text-2xl font-medium">5. Learn more</h3>
                <p className='text-md leading-7 pt-2 pb-5 text-gray-200'>
                    If you want to learn more about the project, click <span onClick={() => location.href = 'https://github.com/eduvedras/Distributed-Systems/'} className='font-extrabold text-gray-200 hover:text-teal-500'>here</span> to see the source code of the project and its report.
                </p>
            </div>
        </main>
    )
}