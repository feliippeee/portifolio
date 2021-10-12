import { SiWhatsapp, SiGmail, SiGithub} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { Footers } from "./styles"
export function Footer() {
    return (
        <Footers>
            
            <div className='footer'>                 
                <ul>
                    <li>
                    <a href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui"
                        rel="noopener noreferrer"
                        target="_blank">
                              (11) 98787-7320 <SiWhatsapp />
                    </a>
                    </li>
                    
                    <li>
                        <a href="https://github.com/feliippeee" rel="noopener noreferrer" target="_blank">
                            <div><SiGithub /></div>
                            <div>GitHub</div>
                            <div><BsBoxArrowUpRight /></div>
                            </a>
                    </li>
                    <li><span> felipe.tecnosuporte@gmail.com</span> <SiGmail />  </li>
                </ul>
            </div>
        </Footers>
    )
}