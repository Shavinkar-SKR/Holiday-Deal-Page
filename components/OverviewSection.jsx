function toEmbedURL(url) {
  const videoId = url?.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
}

function OverviewSection({ overview, video }) {
  const embedURL = video ? toEmbedURL(video) : "";
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Overview
      </h2>

      <div
        className="prose prose-lg max-w-none text-gray-700 mx-auto"
        dangerouslySetInnerHTML={{ __html: overview }}
      />

      {video && (
        <div className="mt-8">
          <iframe
            src={embedURL}
            className="w-full aspect-video rounded-2xl shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default OverviewSection;
