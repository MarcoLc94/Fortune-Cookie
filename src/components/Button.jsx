import "../styles/Button.css";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Abrir Otra Galleta</button>
    </div>
  );
};

export default Button;
