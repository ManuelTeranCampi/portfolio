import Layout from "../components/Layout";
import Link from "next/link";

export const custom404 = () => (
        <Layout footer={false}>
            <div class="text-center">
                <h1>404</h1>
                <p>Esta página no existe por favor retorna a la página
                    <Link href="/">
                        <a>  principal</a>
                    </Link>
                </p>
            </div>
        </Layout>
    )

export default custom404;
