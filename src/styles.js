import { makeStyles } from '@material-ui/core/styles'; // mui based styling
// creating a hook
const useStyles = makeStyles((theme) => ({
    // we dont want to put styling right into the jsx.
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',

    },
    button: {
        marginTop: '40px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardGrid: {
        padding: '20px 0'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9  
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#01579b',
        padding: '20px 0',
        color: '#fff'
    },
    form: {
        justifyContent: 'center',
        padding: '40px'
    },
    formControl: {
        width: '50%',
    },
    sec: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default useStyles;