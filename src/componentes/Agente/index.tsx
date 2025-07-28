import "./Agente.css";

interface AgenteProps {
  nome: string;
  imagem: string;
  funcao: string;
  corDeFundo: string;
  data: string;
}

const Agente = ({ nome, imagem, funcao, corDeFundo, data }: AgenteProps) => {
  return (
    <div className="agente">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="Arthur Manenti" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Agente;
