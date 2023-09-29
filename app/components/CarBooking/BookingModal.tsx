import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModal({ car }: any) {
    return (


        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <div className="border-b-[1px] pb-2">
                <h3 className="capitalize text-[30px] font-light text-gray-400">
                    rent a car now
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="capitalize">
                    <Form/>
                </div>
                <div className="capitalize">
                   <CarCard car={car}/>
                </div>
            </div>
            <div className="modal-action">
                <button className="btn">Close</button>

            </div>
        </form>


    )
}

export default BookingModal