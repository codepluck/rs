// components/TableSkeleton.js

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const tableWrapper = () => {
    Array.from({ length: 10 }).map((_, index) => {
        console.log(index, 'indexindex')
        return (
            <div className="w-full" key={index} >
                <Skeleton className={`${(index == 0) ? "w-full h-[40px] mb-2" : "w-full h-[30px] my-2"}`} />
            </div >
        )
    })
}
const TableSkeleton = () => {
    return (

        <>
            <section className="w-full h-full rounded-md p-8">
                <section className="h-[40px] w-full mb-4 rounded-md">
                    <Skeleton className="w-full h-[40px]" />
                </section>
                <section className="h-[40px] w-full mb-4 rounded-md">
                    <article className='w-full grid grid-cols-5 mt-2 gap-5'>
                        {
                            Array.from({ length: 40 }).map((_, index) => {
                                console.log(index, 'indexindex')
                                return (
                                    <div className="w-full" key={index} >
                                        <Skeleton className={`${(index == 0) ? "w-full h-[40px] mb-2" : "w-full h-[30px] my-2"}`} />
                                    </div >
                                )
                            })
                        }
                    </article>
                    <div className="h-[40px] w-full mb-4 rounded-md">
                        <Skeleton className="w-full h-[40px] mt-6" />
                    </div>
                </section>
            </section>
        </>

    );
};

export default TableSkeleton;