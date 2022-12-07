export default function Button({ title, handleClick }) {
    const style = {
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      padding: "10px 15px",
      margin: "10px",
      width: "100px",
      cursor: "pointer"
    };
    return (
      <button style={style} onClick={handleClick}>
        {title}
      </button>
    );
  }
  