/* eslint-disable  @typescript-eslint/no-explicit-any */
type buttonProps = {
    text:any, Icon?:string, className:string
}
export default function Button({text,Icon, className}:buttonProps){
    return (
        <button className={`text-center  transition-all duration-300 hover:scale-105 hover:shadow-lg h-9 md:h-14  ${className}`}>
        <span>{text}</span><span>{Icon}</span>
        </button>
    )
}
