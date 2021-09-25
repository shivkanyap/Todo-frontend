import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },

    card: {
      height: "max-content",
      width: "100%",
      borderRadius: 12,
      paddingLeft: "39px",
      paddingRight: "39px",
      paddingBottom: "39px",
      paddingTop: "25px",
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 8,
      height: 55,
    },

    cardUpload: {
      height: "max-content",
      width: "100%",
      borderRadius: 12,
      margin: "20px",
      padding: "25px 30px"
    },
    cardHeaderUpload: {
      height: 30,
      borderRadius: 8
    },
    cardHeaderTitleUpload: {
      fontSize: 14,
      fontFamily: "poppins",
      fontWeight: "semibold",
      color: "white",
      textAlign: "center"
    },

    cardHeaderTitle: {
      fontSize: 18,
      fontFamily: "poppins",
      fontWeight: "semibold",
      color: "white",
      textAlign: "center",
    },

    inputContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "left",
      marginTop: 30,
    },
    
    textField: {
      width: "80%",
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },

    items: {
      width: "100%",
      margin: "0 10px",
    },
    
    required: {
        color: "red",
    },
    
    tableCard: {
      height: 'max-content',
      width: '100%',
      borderRadius: 12,
      padding: '10px',
    },

    table: {
      width: '100%',
      borderRadius: '8px',
    },
    tableHeader: {
      height: 55,
    },

    tableCell: {
      width: '30px'
    },
    thCell: {
      color: "white",
      fontWeight: 'regular',
      fontSize: 15,
      fontFamily: "poppins"
    },
    tbCell: {
      fontSize: 12,
      fontFamily: "poppins",
      fontWeight: "regular"
    },

    tableRow: {
      '&:hover': { background: "#EDEDED", },
    },
    
    updateBtn: {
      marginTop: 30,
      fontFamily: "poppins",
      color: "white",
    },
  }
})

export default useStyles;
