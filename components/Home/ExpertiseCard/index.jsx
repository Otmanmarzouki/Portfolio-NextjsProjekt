export default function ExpertiseCard({ IconExpertise, ExpertiseTitle, ExpertiseDescription }) {
    return (
        <div className="flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg py-2 w-full">
            <div className="flex flex-row justify-center px-4">
                <div className="px-2">
                    {IconExpertise}
                </div>
                <div className="py-2">
                    <h6 className="font-bold">{ExpertiseTitle}</h6>
                </div>
            </div>
            <div className="flex flex-row w-full p-4">
                <div className="py-1 text-gray-400">
                    <p className="text-sm">- {ExpertiseDescription}</p>
                </div>
            </div>
        </div>
    );
}
