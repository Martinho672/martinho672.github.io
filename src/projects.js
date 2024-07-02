import ifmg from './assets/images/projects/+ifmg.png';
import cortai from './assets/images/projects/cortai-logo.png';

import cdm from './assets/images/projects/cdm-logo.png';

export const projects = [
    {
        title: 'Cortaí',
        imageUrl: cortai,
        backgroundColor: '#F17228',
        backgroundHeight: 'h-26',
        description: "Aplicativo completo para o gerenciamento e agendamento de Barbeiros e Salões de beleza.Todo o aplicativo foi desenvolvido utilizando o Flutter como Framework principal para o Frontend da aplicação no entando, no backend foi utilizado em sua maior parte Php/Laravel."
    },
    {
        title: 'Autohouse',
        imageUrl: "",
        backgroundColor: '#1848A0',
        description: "Aplicativo para o gerenciamento de de cargas remotas para automação residencial, desenvolvido durante um projeto de pesquisa, as principais tecnologias utilizadas foram o Dart/Flutter e Firebase para o gerenciamento de dados e notificações."
    },
    {
        title: '+IFMG',
        imageUrl: ifmg,
        backgroundColor: '#1C98ED',
        backgroundHeight: 'h-8',
        description: "Desenvolvi uma aplicação móvel para exibição de notícias da instituição e acesso a programas de cursos online, utilizando Dart/Flutter e Google Firebase, integrando recursos de autenticação e banco de dados em tempo real."
    },
    {
        title: 'Centro de Memória',
        imageUrl: cdm,
        backgroundColor: '#242018',
        backgroundHeight: 'h-16',
        description: "Desenvolvi um site focado em apresentar a história da Instituição IFMG, utilizando Wordpress para integrar conteúdos em vídeo, imagens e texto, oferecendo uma plataforma rica e interativa para os visitantes."
    }

];


