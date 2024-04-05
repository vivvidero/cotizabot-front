import { NavLink, Outlet, useLocation } from "react-router-dom"
import { LinkButton } from "../.."

export const BudgetsNav = () => {

    // SIN USO POR AHORA.

    // BORRAR SI SE DEFINE NO USAR


    const budgetsLinks = ['APUS', 'Referencias', 'Insumos', 'Cáculos de catidades']
    const location = useLocation()

    return (
        <>
            <div className='flex justify-between my-6'>
                <nav>
                    <ul className='flex items-center gap-5 font-roboto text-xl font-normal text-cadet-gray'>
                        {budgetsLinks.map((link) => {
                            return (
                                <NavLink key={link} to={link.toLowerCase()} className={({ isActive }) =>
                                    isActive
                                        ? "text-vivvi bg-dorado p-2 rounded font-[500]"
                                        : "text-cadet-gray font-[400]"
                                }> {link} </NavLink>
                            )
                        })}
                    </ul>
                </nav>
                {location.pathname === "/admin/budgets"
                    &&
                    <LinkButton link="apus/create" bg="golden" >
                        Crear APU
                    </LinkButton>
                }
            </div>
            <Outlet />
        </>
    )
}
