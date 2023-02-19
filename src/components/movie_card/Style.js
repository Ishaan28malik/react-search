import { Colors } from "../../constants";

export const Style = (theme) => ({
  container: {
    width: "18%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "10px 10px 5px -6px rgba(0,0,0,0.66)",
    marginRight: "2%",
    marginTop: "2%",
    borderRadius: 10,
    overflow: "hidden",
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
        transform: "scale(1.1)"
    }
  },
  content: {
    background: Colors.secondary,
    padding: "1.2em",
    color: Colors.fontColor,
    height: '100%'
  },
  addContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});
