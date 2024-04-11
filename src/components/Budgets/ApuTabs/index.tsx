import { NavLink } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext } from 'react';
import { ApusContext } from '../../../context/ApusContext';
export const ApuTabs = () => {

    const {  infoCheck, dataSheetCheck, referencesCheck } = useContext(ApusContext)
    

    return (
        <nav className='w-full grid grid-cols-3 h-16 text-center bg-white shadow-sm mt-4'>
            {
                infoCheck
                    ?
                    <NavLink aria-disabled={'true'} to={'general-info'} className={({ isActive }) =>
                        isActive
                            ? "text-vivvi border-2 border-b-vivvi p-2 rounded font-[500] w-full flex gap-2 justify-center items-center  border-platinum"
                            : " font-[400]  w-full flex gap-2 justify-center items-center border border-platinum"
                    } >
                        <CheckCircleIcon className='text-vivvi' />
                        <p>Informacion general</p>
                    </NavLink>
                    :
                    <div className=" font-[400]   w-full flex gap-2 justify-center items-center border border-platinum">
                        <CheckCircleOutlineIcon className='text-vivvi' />
                        <p>Informacion general</p>
                    </div>
            }

            {
                infoCheck
                    ?
                    <NavLink to={'references'} className={({ isActive }) =>
                        isActive
                            ? "text-vivvi border-2 border-b-vivvi p-2 rounded font-[500] w-full flex gap-2 justify-center items-center border-platinum"
                            : " font-[400]   w-full flex gap-2 justify-center items-center border border-platinum"
                    } >
                        {
                            referencesCheck
                                ?
                                <CheckCircleIcon className='text-vivvi' />
                                :
                                <CheckCircleOutlineIcon className='text-vivvi' />
                        }

                        <p>Crear referencias</p>
                    </NavLink>
                    :
                    <div className=" font-[400]   w-full flex gap-2 justify-center items-center border border-platinum">
                        <CheckCircleOutlineIcon className='text-vivvi' />
                        <p>Crear referencias</p>
                    </div>
            }
            {
                referencesCheck && infoCheck
                    ?
                    <NavLink to={'data-sheet'} className={({ isActive }) =>
                        isActive
                            ? "text-vivvi border-2 border-b-vivvi p-2 rounded font-[500] w-full flex gap-2 justify-center items-center  border-platinum"
                            : " font-[400]  w-full flex gap-2 justify-center items-center border border-platinum"
                    } >
                        {
                            dataSheetCheck
                                ?
                                <CheckCircleIcon className='text-vivvi' />
                                :
                                <CheckCircleOutlineIcon className='text-vivvi' />
                        }
                        
                        <p> Ficha técnica</p>
                    </NavLink>
                    :
                    <div className=" font-[400]   w-full flex gap-2 justify-center items-center border border-platinum">
                        <CheckCircleOutlineIcon className='text-vivvi' />
                        <p>Ficha técnica</p>
                    </div>
            }

        </nav>
    )
}
