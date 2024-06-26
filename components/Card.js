const Card = ({doc}) => {

    return (
        <div className="bg-white shadow-md rounded-lg p-2 ">
            <div className="font-bold sm:text-xl">{doc.name}</div>
        </div>
    )
}

export default Card;