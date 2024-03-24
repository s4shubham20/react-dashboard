import Modal from './Modal';
export default function Footer() {
    return (
        <>
            {/* <!--start overlay--> */}
            <div className="overlay toggle-icon"></div>
            {/* <!--end overlay--> */}
            {/* <!--Start Back To Top Button--> */}
            <a href="javascript:void(0)" className="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
            {/* <!--End Back To Top Button--> */}
            <footer className="page-footer">
                <p className="mb-0">Copyright © 2024. All right reserved.</p>
            </footer>
            <Modal/>
        </>
    )
}