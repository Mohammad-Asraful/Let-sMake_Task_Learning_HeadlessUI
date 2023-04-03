import React from 'react'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
   { id: 1, name: 'Durward Reynolds', unavailable: false },
   { id: 2, name: 'Kenton Towne', unavailable: false },
   { id: 3, name: 'Therese Wunsch', unavailable: false },
   { id: 4, name: 'Benedict Kessler', unavailable: true },
   { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const ListBox2 = () => {
   const [selectedPerson, setSelectedPerson] = useState(people[0])

   return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
         <Listbox.Button className='border border-black rounded-xl p-[5px_20px] w-[300px]'>{selectedPerson.name}</Listbox.Button>
         <Listbox.Options className='w-[300px]'>
            {people.map((person) => (
               <Listbox.Option
                  className='px-4 py-2 border border-black rounded w-full'
                  key={person.id}
                  value={person}
                  disabled={person.unavailable}
               >
                  {person.name}
               </Listbox.Option>
            ))}
         </Listbox.Options>
      </Listbox>
   )
}
export default ListBox2