import { SiWhatsapp, SiGmail, SiGithub} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { Footers } from "./styles"
export function Footer() {
    return (
        <Footers>
            
            <div className='footer'>                 
                <ul>
                    <li><span>Telefone: (11) 98787-7320</span> <SiWhatsapp /></li>
                    <li><span><a href="https://github.com/feliippeee" rel="noopener noreferrer" target="_blank"><SiGithub /><span>GitHub</span>  <BsBoxArrowUpRight /></a></span></li>
                    <li><span> felipe.tecnosuporte@gmail.com</span> <SiGmail />  </li>
                </ul>
            </div>
        </Footers>
    )
}