import { Card, CardContent } from "@/components/ui/card";

// images
import img1 from "@/public/images/all-img/colored-img-1.png"
import img2 from "@/public/images/all-img/colored-img-2.png"
import author1 from "@/public/images/all-img/author-1.png"
import author2 from "@/public/images/all-img/author-2.png"

import fbIcon from "@/public/images/social/facebook-1.png"
import linkedinIcon from "@/public/images/social/linkedin-1.png"
import redditIcon from "@/public/images/social/reddit-circle.png"
import pinterestIcon from "@/public/images/social/pinterest-circle.png"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function VenueCard({ venue }) {
    const socials = [
        {
            icon: fbIcon,
            link: "#",
        },
        {
            icon: linkedinIcon,
            link: "#",
        },
        {
            icon: redditIcon,
            link: "#",
        },
        {
            icon: pinterestIcon,
            link: "#",
        }
    ];
    const socialsInfo = [
        {
            title: "Followers",
            value: "16.5k"
        },
        {
            title: "Following",
            value: "11.3k"
        },
        {
            title: "Total Post",
            value: "1.4k",
        }
    ]
    console.log(venue, ' venuevenuevenue')
    return (
        <>
            <Card>
                <CardContent className="p-0">
                    <div>
                        <Image
                            src={venue?.details?.banner_image}
                            alt="User Card Image"
                            className="w-full h-full object-cover"
                            height={venue?.details?.banner_height || 400}
                            width={venue?.details?.banner_height || 400}
                            priority={true}
                        />
                    </div>
                    <div className="flex gap-2.5 px-4 pt-4">
                        <div className="flex-none w-12 h-12 rounded-full">
                            <Image
                                src={venue?.owner?.avatar}
                                alt="author image"
                                className="w-full h-full object-cover rounded-full"
                                priority={true}
                                height={venue?.owner?.avatar_height || 24}
                                width={venue?.owner?.avatar_height || 24}
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-default-900">
                                {venue?.name || ''}
                            </h3>
                            <h5 className="text-sm text-default-600">
                                {venue?.title || ''}
                            </h5>
                        </div>
                    </div>
                    <div className="border border-dashed border-default-200 my-5"></div>
                    <div className="mt-4 flex justify-between px-4">
                        {
                            socialsInfo.map((item, index) => (
                                <div key={`user-card-${index}`} className="flex flex-col items-center text-center ">
                                    <h3 className="text-xs text-default-600 mb-0.5">{item.title}</h3>
                                    <p className="text-base font-semibold text-default-900">{item.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </>

    );
};

VenueCard;