import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ModalComparator({ comparator, setCategory }) {
    const categories = ["Smartphone", "Tablet", "Smartwatch"];
    const [show, setShow] = useState(true)

    function handleClick(category) {
        setCategory(category);
        setShow(false)
    }

    useEffect(() => {
        if (comparator) {
            setShow(true)
        }
    }, [comparator])
    return comparator && show && createPortal(
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
            style={{ zIndex: 1050 }}
        >
            <div className="bg-white p-4 rounded shadow">
                <h2 className="mb-3">Seleziona una categoria</h2>
                <div className="d-flex flex-wrap gap-2">
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
        </div>,
        document.body
    );
}
