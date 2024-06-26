import Card from "./Card";

const CardContainer = ({ filteredDocs }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            {filteredDocs.map((doc) => (
                <Card doc={doc} key={doc.id} />
            ))}
        </div>
    )
};

export default CardContainer;
