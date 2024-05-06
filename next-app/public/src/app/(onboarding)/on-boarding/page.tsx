"use client"

import Icons from "@/components/icons";
import {OnBoardingContextProvider} from "@/app/(onboarding)/on-boarding/context";
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {phoneRegex} from "@/lib/utils";
import {useForm} from "react-hook-form";
import {FormControl, Form, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {saveVenue} from "@/server-actions/venue";

const venueFormSchema = z.object({
    venue_name: z
        .string()
        .min(2, {
            message: "Event Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Event Name must not be longer than 30 characters.",
        }),
    venue_contact_number: z
        .string()
        .regex(phoneRegex, 'Invalid Number!'),
    venue_email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    venue_address: z
        .string()
        .max(160)
        .min(4)
})

type VenueFormValues = z.infer<typeof venueFormSchema>

// This can come from your database or API.
const defaultValues: Partial<VenueFormValues> = {}
export default function OnBoarding() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<VenueFormValues>({
        resolver: zodResolver(venueFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const onSubmit = (data: any) => {
       saveVenue(data);
    }

    return (
        <>
            <OnBoardingContextProvider>
                <section className={"section w-full"}>
                    <section className={"container mx-auto"}>
                        <section className={"my-24 w-7/12 mx-auto"}>
                            <section className="step-venue" id={"1"}>
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle>OK Tell us About Your Business</CardTitle>
                                        <CardDescription>Please enter your business details</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                                <article className={"flex w-full space-x-8"}>
                                                    <section className={"w-1/2"}>
                                                        <FormField
                                                            control={form.control}
                                                            name="venue_name"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>Event Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Event Name" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </section>
                                                    <section className={"w-1/2"}>
                                                        <FormField
                                                            control={form.control}
                                                            name="venue_contact_number"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>Venue Contact Number</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Contact Number" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </section>
                                                </article>
                                                <article className={"flex w-full space-x-8"}>
                                                    <section className={"w-1/2"}>
                                                        <FormField
                                                            control={form.control}
                                                            name="venue_email"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>Event Email</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Event Email Address" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </section>
                                                    <section className={"w-1/2"}>
                                                        <FormField
                                                            control={form.control}
                                                            name="venue_address"
                                                            render={({field}) => (
                                                                <FormItem>
                                                                    <FormLabel>Venue Address</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Venue Address" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage/>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </section>
                                                </article>
                                                <article className={"w-full flex justify-end space-x-8"}>
                                                    <Button type="submit">..Next</Button>
                                                </article>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            </section>
                        </section>
                    </section>
                </section>
            </OnBoardingContextProvider>
        </>
    )
}
