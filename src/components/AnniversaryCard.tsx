
interface AnniversaryCardProps {
  year: number;
  description: string;
}

const AnniversaryCard = ({ year, description }: AnniversaryCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all animate-slide-up">
      <div className="flex items-start gap-4">
        <span className="font-alegreya text-2xl text-ephemeri">{year}</span>
        <p className="font-labrada text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AnniversaryCard;
