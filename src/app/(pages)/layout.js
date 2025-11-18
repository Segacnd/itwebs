import Footer from '../../components/footer/Footer'
import * as globalStyles from './global.module.css';
import UpButton from '../../components/global/UpButton';

export default function RootLayout({ children }) {
    return (
        <>
            <div className={globalStyles.page}>
                {children}
                <UpButton />
                <Footer />
            </div>
        </>
    )
}