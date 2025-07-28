import { IAgente } from "../../shared/interfaces/IAgente";
import Agente from "../Agente";
import "./Funcao.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  agentes: IAgente[];
}

const Funcao = (props: TimeProps) => {
  return props.agentes.length > 0 ? (
    <section
      className="funcao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="agentes">
        {props.agentes.map((agente) => (
          <Agente
            corDeFundo={props.corPrimaria}
            key={agente.nome}
            nome={agente.nome}
            funcao={agente.funcao}
            imagem={agente.imagem}
            data={agente.data}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Funcao;
