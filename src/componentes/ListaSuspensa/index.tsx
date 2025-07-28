import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  required: boolean;
  valor: string;
  itens: string[];
}

const ListaSuspensa = ({
  label,
  aoAlterado,
  itens,
  required,
  valor,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(e) => aoAlterado(e.target.value)}
        required={required}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
