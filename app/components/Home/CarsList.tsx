import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal'

function CarsList(props: any) {
  const [selectedCar,setselectedCar]= useState<any>([]);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {props.carsList.map((car: any, index: number) => (
        //carlist
        <div className="" key={index} onClick={()=>{document.getElementById('my_modal_1').showModal();setselectedCar(car)}}>
          {/*car card  */}
          <CarCard car={car} />
          {/* carcard */}
        </div>
        //carlist
      ))}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
 <BookingModal car={selectedCar}/>
</dialog>
    </div>
  )
}

export default CarsList