import { useEffect, useRef } from "react"


//custom hook to call the close function when user click outside the modal
export function useOutsideClick(handler, setCaptureEvent = true) {
    
    const modalRef = useRef()
    
    useEffect(() => {
        function handleClick(e) {
            if(modalRef.current && !modalRef.current.contains(e.target)) {
                handler()
            } 
        }

        document.addEventListener('click', handleClick, setCaptureEvent)

        return () => document.removeEventListener('click', handleClick, setCaptureEvent)
    }, [handler, setCaptureEvent])



    return {modalRef}
}