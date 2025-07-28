import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio: boolean;
}

const CampoTexto = (props: CampoTextoProps) => {
  
  const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={`${props.placeholder}...`}
      />
    </div>
  );
};

export default CampoTexto;
