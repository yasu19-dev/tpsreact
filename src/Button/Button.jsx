import styles from './Button.module.css'
function Button(){

    const styleButton = {
    backgroundColor: 'hsl(160, 100%, 50%)',
    padding: "10px 20px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}
    return(
        <>
    <button className={styles.button}>Click me</button> 
    <br></br>
    <button style={styleButton}>Click me</button>
        </>
);
}

export default Button;