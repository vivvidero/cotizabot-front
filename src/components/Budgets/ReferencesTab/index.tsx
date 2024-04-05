import { FormEvent, useContext } from "react"
import { LoadingContext } from "../../../context/LoadingContext"
import { Spinner } from "../.."
import { Link, useNavigate } from "react-router-dom"
import { ReferencesForm } from "./ReferencesForm"
import { NewApuContext } from "../../../context/NewApuContext"



export const ReferencesTab = () => {

    const { loading, error, setError } = useContext(LoadingContext)
    const navigate = useNavigate()
    const { referencesForms, setFeferencesForms, referencesCheck, infoCheck } = useContext(NewApuContext)

    const addReference = () => {
        if (referencesForms.length < 5) {
            const updateArray = referencesForms.concat(referencesForms.length + 1)
            setFeferencesForms(updateArray)
        } else {
            setError("Alcanzaste el limite maximo de referencias")
            setTimeout(() => {
                setError('')
            }, 4000);
        }
    }


    const goToDataSheet = (e: FormEvent) => {
        e.preventDefault()
        if (!referencesCheck) {
            setError("Todos los campos son obligatorios")
            setTimeout(() => {
                setError('') 
            }, 3000);
            return
        }
        navigate('/admin/budgets/apus/create/data-sheet')
    }

    if (!infoCheck ) {
        navigate('/admin/budgets/apus/create/general-info')
    }

    return (
        <>
            {referencesForms.map((form) => <ReferencesForm key={form} formNumber={form} />)}

            <div className="flex gap-4 w-full px-8 mb-4">
                <button onClick={addReference} className="flex items-center cursor-pointer justify-center gap-2 py-2 w-52 h-8 rounded-full text-base font-roboto font-[500] hover:scale-95 duration-200 border bg-dorado text-vivvi border-vivvi" disabled={loading}>
                    Agregar referencia
                </button>

            </div>
            {
                error
                &&
                <div className='bg-vivvi p-4 text-white m-4'>
                    {error}
                </div>
            }
            <div className="flex gap-4 w-full px-8">
                <button className="flex items-center cursor-pointer justify-center gap-2 py-2 w-52 h-8 rounded-full text-base font-roboto font-[500] hover:scale-95 duration-200 border bg-dorado text-vivvi border-vivvi" disabled={loading} onClick={goToDataSheet}>
                    {loading ? <Spinner /> : "Continuar"}
                </button>
                <Link to={'/admin/budgets/apus'} className="flex items-center cursor-pointer justify-center gap-2 py-2 w-52 h-8 rounded-full text-base font-roboto font-[500] hover:scale-95 duration-200 border bg-transparent text-vivvi border-vivvi" >
                    Cancelar
                </Link>
            </div>

        </>
    )
}
