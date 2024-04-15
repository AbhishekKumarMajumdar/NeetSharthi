import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    return (
        <div>

            <a href="https://api.whatsapp.com/send?phone=393661273612." className="float bounce flex justify-center items-center" target="_blank">
                <FaWhatsapp color='#fff' size={35} />
            </a>
        </div>
    )
}

export default Whatsapp