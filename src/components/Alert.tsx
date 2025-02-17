import { FaCheckDouble } from "react-icons/fa6";

export default function Alert() {
    return (
        <>
            <div
                className="absolute z-50 flex w-3/4 max-w-96 h-24 bg-white rounded-xl overflow-hidden shadow-lg"
            >
                <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
                        fill="#66cdaa"
                        stroke="#66cdaa"
                        stroke-width="2"
                        stroke-linecap="round"
                    ></path>
                </svg>
                <div className="mx-2.5 overflow-hidden w-full">
                    <p
                        className="mt-1.5 text-xl font-bold text-[#66cdaa] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                        Enviado !
                    </p>
                    <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                        <br />
                        Tu mensaje ha sido enviado con exito.
                    </p>
                </div>
                <button className="w-16 cursor-pointer focus:outline-none">
                    <FaCheckDouble color="#00BB94" size={24}/>
                </button>
            </div>

        </>
    )
}
