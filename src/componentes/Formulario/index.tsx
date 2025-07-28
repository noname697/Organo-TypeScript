import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IAgente } from "../../shared/interfaces/IAgente";

interface FormularioProps {
  aoAgenteCadastrado: (agente: IAgente) => void;
  funcoes: string[];
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [funcao, setFuncao] = useState("");
  const [data, setData] = useState("");

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.aoAgenteCadastrado({
      nome: nome,
      genero: genero,
      imagem: imagem,
      funcao: funcao,
      data: data,
    });
    setNome("");
    setGenero("");
    setImagem("");
    setFuncao("");
    setData("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Agente.</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Genêro"
          placeholder="Digite seu genêro"
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Data de entrada na função"
          placeholder=""
          valor={data}
          tipo="date"
          aoAlterado={(valor) => setData(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Função"
          itens={props.funcoes}
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
