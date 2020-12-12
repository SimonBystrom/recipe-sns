import {useState, useRef, useEffect} from 'react'

export default function useHover(){
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)

    function enter(){
        setIsHovered(true)
    }
    function leave(){
        setIsHovered(false)
    }

    useEffect(()=> {

        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        return () => {
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    })

    return [isHovered, ref]
}