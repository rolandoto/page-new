import React from "react"
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"
import pdf from "../../Image/LLERASPARK.pdf"
import logo from "../../Image/logolleras.png"
const Footer =() =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/llerasparkconcept", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/llerasparkconcept_/", "_blank");
    };

    return (
            <footer className="bg-white   text-black py-8">
                <div className="mx-auto max-w-7xl p-4  flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex">
                    <img
                        src={logo}
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        className="w-48 mb-4"
                    />
                </div>
                <div>
                    <div className="">
                        <ul className="space-y-2">
                            <li className="flex items-center"> <IconFaWhatsapp /> +57 305 289 77 66</li>
                            <li className="flex items-center mr-6">  <IconsMdEmail />  reservas@lleraspark.com</li>
                            <li className="flex items-center"> <IconFaMapMarkerAlt/>  Cra. 38 #8 - 83                            </li>
                        </ul>
                    </div>
                    <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram   onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                             
                            </div>
                    </div>
                </div>
               
                <div className=" ">
                    <div class=" flex items-center justify-center ">
                    <div class="w-full max-w-md mt-6">
                            <h2 class="text-center text-xl font-semibold mb-6">Navegación</h2>
                            <a target="_blank" href={pdf} className="text-black"> Términos y Condiciones del sitio web</a>.
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-black mt-8">
               
                    <div className=" flex  flex-col sm:flex-row  justify-between mt-8 mx-auto max-w-7xl items-center">
                            <div>
                            © Copyright. Todos los derechos reservados.
                            </div>
                          
                                    <div className=" ">
                                    <div className="flex space-x-4">
                                    <img 
                                        src="https://github.com/rolandoto/image-pms/blob/main/payment.png?raw=true" 
                                        alt="Métodos de pago" 
                                        width="200" 
                                        height="100" 
                                    />
                                    </div>
                            </div>
                        </div>
                
                </div>
            </footer>
    )
}
export default Footer