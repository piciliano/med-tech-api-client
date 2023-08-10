import * as yup from "yup"

const makeDeleteMedTechDateSchema = () => {
    return yup.object().shape({
        numero: yup.string().required()
    })
}
export { makeDeleteMedTechDateSchema }