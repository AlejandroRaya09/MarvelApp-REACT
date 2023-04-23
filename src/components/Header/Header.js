import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import "./Header.scss";



export default function Header() {
    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/","")

    const [activeItem, setActiveItem] = useState(finalCurrentPath)
    const navigate = useNavigate();

    const handlerItemClick = (e, {name}) => {
        setActiveItem(name)
    
        navigate(`/${name}`)
    }


return(
    <div className="header-menu">
        <Menu secondary>
            <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={(handlerItemClick)}/>
            <Menu.Item name="series" active={activeItem === "series"} onClick={(handlerItemClick)}/>
            <Menu.Item name="comics" active={activeItem === "comics"} onClick={(handlerItemClick)}/>
        </Menu>
    </div>
)
}