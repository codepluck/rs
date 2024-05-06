import {cn} from "@/lib/utils"

interface ErrorComponentProps {
    error: string | any
    className?: string
}

export default function Error({error, className}: ErrorComponentProps) {
    return (
        <>
            {error && (
                <span
                    className={cn(
                        "mt-0 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block",
                        className
                    )}>
                    {error}
            </span>
            )}
        </>
    )
}
