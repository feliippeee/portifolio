import { SiWhatsapp, SiGmail, SiGithub} from "react-icons/si";

import styles from './styles.module.scss';
export function Footer() {
    return (
            <div className={styles.footer}>                 
                <ul>
                    <li><span>Telefone: (11) 98787-7320</span> <SiWhatsapp /></li>
                    <li><a href="https://github.com/feliippeee" target="_blank"><SiGithub /> GitHub</a></li>
                    <li><span> felipe.tecnosuporte@gmail.com</span> <SiGmail />  </li>
                </ul>
            </div>
    )
}