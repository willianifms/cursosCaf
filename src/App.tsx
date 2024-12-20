import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";

const sections = [
  {
    title: "Listagem",
    videos: [
      { title: "Vídeo Listagem 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Vídeo Listagem 2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
  {
    title: "Pendentes",
    videos: [
      { title: "Vídeo Pendentes 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { title: "Vídeo Pendentes 2", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
  {
    title: "Aguardando Orçamento",
    videos: [
      { title: "Vídeo Aguardando 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
  // Outras seções omitidas para brevidade
];

function App() {
  return (
    <>
      <Header/>
<main className="container my-4">
<h1 className="text-center mb-5">Painel de Vídeos</h1>

{/* Accordion para as seções */}
<div className="accordion" id="videoAccordion">
  {sections.map((section, index) => (
    <div key={index} className="accordion-item">
      {/* Cabeçalho do Dropdown */}
      <h2 className="accordion-header" id={`heading-${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${index}`}
          aria-expanded="false"
          aria-controls={`collapse-${index}`}
        >
          {section.title}
        </button>
      </h2>

      {/* Conteúdo do Dropdown */}
      <div
        id={`collapse-${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${index}`}
        data-bs-parent="#videoAccordion"
      >
        <div className="accordion-body">
          <div className="row g-4">
            {section.videos.map((video, idx) => (
              <div key={idx} className="col-lg-6 col-md-12">
                <VideoCard title={video.title} src={video.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</main>
    </>
  );
}

export default App;
