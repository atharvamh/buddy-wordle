import logo from "../assets/logo.jpg";

export default function Header(){
    return (
        <div className="header">
            <p> <img src={logo} width={"auto"} height={50}/> </p>
            <p className="header-title">BWORDLE</p>
        </div>
    )
}