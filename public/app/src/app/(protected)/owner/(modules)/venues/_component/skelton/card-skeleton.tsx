"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
function createArray(length, value = null) {
  return Array(length).fill(value);
}
export default function CardSkeleton({ limit }) {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const totalCards = createArray(5)
    setCards(totalCards)
  }, [])
  return (
    <div className="grid xl:grid-cols-4 grid-cols-2 gap-5">
      {cards.map((card, _k) => {
        return (
          <section key={_k} className="w-full">
            <Card className="w-full p-4 rounded-md">
              <div className="h-[191px] w-full mb-4 rounded-md">
                <Skeleton className="w-full h-[191px]" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <Skeleton className="w-1/12	h-2" />
                  <Skeleton className="w-1/12	h-2" />
                </div>

                <Skeleton className="w-5/6 h-4 mb-1.5" />

                <Skeleton className="w-full h-2 mb-1.5" />
                <Skeleton className="w-full h-2 mb-1.5" />

                <div className="mb-4 flex space-x-4">
                  <Skeleton className="w-1/12 h-3" />
                  <Skeleton className="w-1/12 h-3" />
                </div>
                <Skeleton className="w-full	 h-10" />
              </div>
            </Card>
          </section>

        )



      })}

    </div>
  );
};
