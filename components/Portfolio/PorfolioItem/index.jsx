import ImageSlider from '../ImageSlider';

export default function PortfolioItem({ title, subtitle, slides }) {
  return (
    <div className="flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg p-2">
      <ImageSlider slides={slides} />
      <div className="flex flex-col text-lg text-white p-2">
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="text-white text-lg font-medium">{title}</p>
      </div>
    </div>
  );
}