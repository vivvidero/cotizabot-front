import { Dispatch, FC, SetStateAction, useContext } from 'react'
import plus from '../../../assets/icons/Plus.png'
import { SingleSpace, Spaces } from '../../../types/Spaces'
import { LoadingContext } from '../../../context/LoadingContext'
import api from '../../../api'
import { NewProjectContext } from '../../../context'

interface ImagePreview {
    url: string,
    name: string,
}

const initialImagePreview: ImagePreview = {
    url: '',
    name: ''
}

interface Props {
    setSpace: Dispatch<SetStateAction<SingleSpace>>
    singleSpace: Spaces,
    space: SingleSpace,
    formDataSpaceTypo: FormData
    setFormDataSpaceTypo: Dispatch<SetStateAction<FormData>>
    setImagePreviewactualstatus: Dispatch<SetStateAction<ImagePreview>>
    setImagePreview3D: Dispatch<SetStateAction<ImagePreview>>
}

export const AddTipologyButton: FC<Props> = ({ setSpace, singleSpace, space, formDataSpaceTypo, setFormDataSpaceTypo, setImagePreviewactualstatus, setImagePreview3D }) => {

    const { setLoading } = useContext(LoadingContext)
    const { newProject } = useContext(NewProjectContext)

    const saveAndAddTipology = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLoading(true)

        if (!newProject.activeTypologyId) {
            console.log("NO HAY ID DE TIPOLOGIA");
            setLoading(false)
            return
        }
        const jsonBlobSpace = new Blob([JSON.stringify(space)], { type: 'application/json' });
        const jsonBlobTypologyId = new Blob([JSON.stringify({ typologyId: newProject?.activeTypologyId })], { type: 'application/json' });

        formDataSpaceTypo.append('space', jsonBlobSpace, 'space.json')
        formDataSpaceTypo.append('typologyId', jsonBlobTypologyId, 'typologyId.json')

        // POST ESPACIO
        try {
            api.post('/spaces', formDataSpaceTypo)
                .then((data) => {
                    console.log(data.data);
                    setSpace({
                        spacetype: singleSpace?.name,
                        roomnumber: singleSpace?.roomnumber,
                        spaceid: singleSpace?.spaceid
                    })
                    setFormDataSpaceTypo(new FormData)
                    setImagePreview3D(initialImagePreview)
                    setImagePreviewactualstatus(initialImagePreview)
                })
                .then(() => {
                    alert('Tipologia de espacio guardado')
                    setLoading(false)
                })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='font-medium my-4'>
            <h3 className='mb-4'>Información tipologías posibles (opcional)</h3>
            <button className='bg-white p-2 flex gap-4 items-center cursor-pointer  hover:bg-slate-100 transition-all w-full' onClick={saveAndAddTipology}>
                <div className='bg-platinum py-2 px-4 rounded-md'>
                    <img src={plus} alt='plus' />
                </div>
                <p>Guardar y Agregar nueva tipología</p>
            </button>
        </div>
    )
}
