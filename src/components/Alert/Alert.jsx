import { AlertBox } from "./styles";

function Alert({ type, message }) {
  return <AlertBox type={type}>{message}</AlertBox>;
}

export default Alert;
