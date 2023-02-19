import { Colors } from "../../constants";

export const Style = theme => ({
    container: {
        padding: '0.8em 1.8em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    headerTitle: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    logo: {
        background: Colors.secondary,
        color: Colors.primary,
        fontSize: '2em',
        width: 50,
        height: 50,
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '0.5em',
    }
})