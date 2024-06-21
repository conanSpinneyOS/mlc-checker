const CardContainer = ({ filteredDocs }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            {filteredDocs.map((doc) => (
                <div key={doc.id} className="min-h-32 bg-white shadow-md rounded-lg p-2 ">

                    <div className="font-bold text-xl">{doc.name}</div>
                    <div className="flex flex-col">
                        <p><strong>Type:</strong> {doc.type}</p>
                        <p><strong>Valid For:</strong> {doc.validFor}</p>
                    </div>
                </div>

            ))}
        </div>
    )
};

export default CardContainer;
