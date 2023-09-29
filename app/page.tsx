"use client";
//================================================================
import Navbar from './components/Navbar'
import Hero from "./components/Home/Hero"
import SearchInput from './components/Home/SearchInput';
import CarsFilterOption from './components/Home/CarsFilterOption';
import { getCarList } from '@/services';
import { useEffect, useState } from 'react';
import CarsList from './components/Home/CarsList';
//==========================================================
export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const result: any = await getCarList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  }
const filterCarList=(brand:string)=>{
const filterList= carsOrgList.filter((item:any)=>item.carBrand==brand);
setCarsList(filterList);
}
  return (
    <main className="">
      <Navbar />
      <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <CarsFilterOption carsList={carsOrgList}  setBrand={(value:string)=>filterCarList(value)
        }/>
        <CarsList carsList={carsList} />
      </div>
    </main>
  )
}
