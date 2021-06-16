import Layout from "../components/Layout";


export const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">No se pudo cargar la pagina: Status Code {statusCode}</p>
                ): (
                    <p>No se pudo cargar la pagina</p>
                )
            }

        </Layout>
    )
}
export default _error;
