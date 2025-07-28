import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "date" | "text" | "password" | "email" | "number";
}

const CampoTexto = ({
  aoAlterado,
  label,
  placeholder,
  valor,
  obrigatorio = false,
  tipo = "text",
}: CampoTextoProps) => {
  const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={`${placeholder}...`}
      />
    </div>
  );
};

export default CampoTexto;
