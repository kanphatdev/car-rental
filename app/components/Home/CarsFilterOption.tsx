import React, { useState, useEffect } from 'react';

function CarsFilterOption({ carsList,setBrand }: any) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });

    setBrandList(Array.from(BrandSet));
  };
 
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div className="">
        <h2 className="capitalize text-[30px] font-bold">Car Catalog</h2>
        <h2 className="capitalize">Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5 mx-5">
      
        <select className="select select-ghost w-full max-w-lg" onChange={(e)=>setBrand(e.target.value)
        }>
          <option disabled defaultValue className='capitalize'>Manufacturer</option>
          {brandList.map((brand: string, index: number) => (
            <option key={index} className='capitalize'>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;
