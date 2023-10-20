import { Business, Clients, Footer, Hero, Navbar, Testimonials } from "@/Landing/components";
import styles from "@/Landing/style";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Valida tu contador" />
            <div className=" w-full overflow-hidden">
                <div
                    className={`${styles.paddingX} ${styles.flexCenter} bg-dimPrimary`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                <div className={`${styles.bgAppDefaul} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>

                <div
                    className={`${styles.paddingX} ${styles.bgAppDefaul} ${styles.flexCenter}`}
                >
                    <div className={`${styles.boxWidth}`}>
                        <Business />
                        <Testimonials />
                        <Clients />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
