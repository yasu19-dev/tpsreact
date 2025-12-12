export default function Button(){
    const handleClick = (e) => e.target.textContent = 'You clicked ✅';
    return (<button onDoubleClick={(e)=> handleClick(e)}>Click me 😏</button>)
}