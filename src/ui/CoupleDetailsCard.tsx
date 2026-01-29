interface CoupleDetailsCardProps {
    name: string;
    details: string;
}

const CoupleDetailsCard: React.FC<CoupleDetailsCardProps> = ({ name, details }) => {
    return (
        <div className="lg:w-[30%] align-middle p-6 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-serif text-center text-black  italic tracking-wide font-bold mb-4">
                {name}
            </h2>
            <p className="text-md lg:text-lg font-serif text-center text-black max-w-sm">
                {details}
            </p>
        </div>
    )
}

export default CoupleDetailsCard