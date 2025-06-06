import { createPortal } from "react-dom";

export default function ModalComparator({ setCategory, setComparator, showModal, setShowModal }) {
    const categories = ["Smartphone", "Tablet", "Smartwatch"];

    function handleClick(category) {
        setCategory(category);
        setShowModal(false)
        setComparator(true)
    }

    return showModal && createPortal(
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
            style={{ zIndex: 10500 }}
        >
            <div className="bg-white p-4 rounded shadow position-relative">
                <button
                    className="btn btn-danger position-absolute top-0 end-0 m-2 mb-5 pb-2"
                    onClick={() => setShowModal(false)}
                />
                <h2 className="mb-3">Seleziona una categoria</h2>
                <div className="d-flex flex-wrap gap-2 justify-content-between">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className="btn btn-outline-primary"
                            onClick={() => handleClick(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        ,
        document.body
    );
}
