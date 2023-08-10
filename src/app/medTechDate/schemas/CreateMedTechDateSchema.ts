import * as yup from "yup"

const makeCreateMedTechDateSchema = () => {
    return yup.object().shape({
        name: yup.string().required("nome nao informado!"),
        numero: yup.string().required("numero nao informado"),
        status: yup.string().required("informar o status!"),
        obs: yup.string().required("informar a observação!")
    })
}
export { makeCreateMedTechDateSchema }