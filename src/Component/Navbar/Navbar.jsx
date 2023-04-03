import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
   return (
      <>
         <div className='w-full flex justify-between items-center px-8 text-white'>
            <h1 className='text-2xl font-bold text-[#00df9a]'>React.</h1>
            <nav>
               <ul className='flex items-center'>

                  <li className="p-4">
                     <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-black">
                           Main Menu
                           <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >

                           <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                 {({ active }) => (
                                    <a
                                       href="@"
                                       className={classNames(
                                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                       )}
                                    >
                                       My menu
                                    </a>
                                 )}
                              </Menu.Item>

                              <Menu.Item>
                                 {({ active }) => (
                                    <a
                                       href="@"
                                       className={classNames(
                                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                       )}
                                    >
                                       Account Menu
                                    </a>
                                 )}
                              </Menu.Item>
                           </Menu.Items>

                        </Transition>
                     </Menu>
                  </li>

                  <li className='p-4'>
                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Home
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                           </Menu.Button>
                        </div>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Support
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          License
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <form method="POST" action="@">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <button
                                             type="submit"
                                             className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                             )}
                                          >
                                             Sign out
                                          </button>
                                       )}
                                    </Menu.Item>
                                 </form>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </li>

                  <li className='p-4'>
                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Banking
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                           </Menu.Button>
                        </div>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Support
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          License
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <form method="POST" action="@">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <button
                                             type="submit"
                                             className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                             )}
                                          >
                                             Sign out
                                          </button>
                                       )}
                                    </Menu.Item>
                                 </form>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </li>

                  <li className='p-4'>
                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Company
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                           </Menu.Button>
                        </div>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Support
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          License
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <form method="POST" action="@">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <button
                                             type="submit"
                                             className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                             )}
                                          >
                                             Sign out
                                          </button>
                                       )}
                                    </Menu.Item>
                                 </form>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </li>

                  <li className='p-4'>
                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Resources
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                           </Menu.Button>
                        </div>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Support
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          License
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <form method="POST" action="@">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <button
                                             type="submit"
                                             className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                             )}
                                          >
                                             Sign out
                                          </button>
                                       )}
                                    </Menu.Item>
                                 </form>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </li>
                  {/*  */}

                  <li className='p-4'>

                     <Menu as="div" className="relative inline-block text-left">
                        <div>
                           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Contact Us
                              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                           </Menu.Button>
                        </div>

                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-100"
                           enterFrom="transform opacity-0 scale-95"
                           enterTo="transform opacity-100 scale-100"
                           leave="transition ease-in duration-75"
                           leaveFrom="transform opacity-100 scale-100"
                           leaveTo="transform opacity-0 scale-95"
                        >
                           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Account settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          Support
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href="@"
                                          className={classNames(
                                             active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                             'block px-4 py-2 text-sm'
                                          )}
                                       >
                                          License
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <form method="POST" action="@">
                                    <Menu.Item>
                                       {({ active }) => (
                                          <button
                                             type="submit"
                                             className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                             )}
                                          >
                                             Sign out
                                          </button>
                                       )}
                                    </Menu.Item>
                                 </form>
                              </div>
                           </Menu.Items>
                        </Transition>
                     </Menu>

                  </li>
               </ul>
            </nav>
         </div>
      </>
   )
}

export default Navbar