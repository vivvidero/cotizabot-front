import logoVerde from "../../../assets/images/Logo-verde.png"
import logoBlanco from "../../../assets/images/Logo.png"
import arrow from "../../../assets/icons/Arrow---Down-2.png"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {

    const { pathname } = useLocation()
    const showHouse = pathname === '/login' || pathname === '/project' ? false : true


    return (
        <div className='flex justify-between bg-vivvi w-full h-16 '>
            <div className="flex">
                <Link to={"/admin/projects"} >
                    <div className={`${showHouse ? 'bg-vivvi' : 'bg-dorado'} py-5 px-10 grid place-content-center`}>
                        <img src={showHouse ? logoBlanco : logoVerde} alt="logo" />
                    </div>

                </Link>
            </div>
            <div className="flex justify-between items-center px-10">
                <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center text-xl " >
                    V
                </div>
                <h2 className="text-lg text-white mx-3">Valeria Castro</h2>
                <div>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}
