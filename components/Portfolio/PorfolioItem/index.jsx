import ImageSlider from '../ImageSlider';

export default function PortfolioItem({ title, subtitle, slides ,githubLink }) {
  return (
    <div className="flex  flex-col border border-gray-300 shadow-xl shadow-gray-600 rounded-lg p-2">
      <ImageSlider slides={slides} />
      <div className="flex flex-col text-lg text-white p-2">
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="dark:text-white text-gray-600 text-lg font-medium">{title}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-gray-600 hover:underline text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}