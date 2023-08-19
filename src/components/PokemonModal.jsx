import { createPortal } from "react-dom";

function PokemonModal({ children, onClose }) {
  return createPortal(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
        backgroundColor: "white",
        border: "2px solid rgb(240, 240, 240)",
        borderRadius: "12px",
        position: "fixed",
        width: "80%",
        height: "80%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
      }}
    >
      <div
        style={{
          overflowY: "auto",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        <button
          style={{
            marginTop: "15px",
            marginRight: "30px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default PokemonModal;
