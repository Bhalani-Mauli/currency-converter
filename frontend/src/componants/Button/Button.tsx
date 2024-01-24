import "./button.css";

interface PropTypes {
  children: React.ReactNode;
  onClick: () => void;
}
export const Button: React.FC<PropTypes> = ({ children, onClick }) => {
  return (
    <div className="f-btn-wrapper">
      <div className="ring1 baseBtn"></div>
      <div className="ring2 baseBtn"></div>
      <div className="btn baseBtn" onClick={onClick}>
        {children}
      </div>
    </div>
  );
};
