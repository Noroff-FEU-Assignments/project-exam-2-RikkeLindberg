import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
                <main>
                    { children }
                </main>
            <Footer />
        </>
    )
}

Layout.protoTypes = {
    children: PropTypes.element.isRequired,
};