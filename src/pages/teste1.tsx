import Image from "next/image";
import {  GetStaticProps } from 'next';

type Profile = {
    name: string;
    bio: string;
    avatar_url: string;
}
type RepositoriesProps = {
    profile: Profile;
}

export default function Teste1({profile}: RepositoriesProps) {
    return (       
            <div>
                <h1>Perfil</h1>
                <p>name: {profile.name}</p>
                <p>Bio: {profile.bio}</p>
                <p>avatar: <Image src={profile.avatar_url} alt=""  width="500" height="300" /></p>
            </div>
          
    ) ;
}



export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://api.github.com/users/feliippeee')
    const data = await response.json();
    console.log(data);
    return { 
        props: {
            profile: data
        },
        revalidate: 30,
        
    }
}

