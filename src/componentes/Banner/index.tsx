import "./Banner.css";

interface BannerProps {
  endereco: string;
  textoAlternativo?: string; // opcional por causa do ?
}

function Banner({ endereco, textoAlternativo }: BannerProps) {
  return (
    <header className="banner">
      <img src={endereco} alt={textoAlternativo} />
    </header>
  );
}

export default Banner;
