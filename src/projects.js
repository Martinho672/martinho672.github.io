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
        backgroundHeight: 'h-8'
    },
    {
        title: 'Centro de Memória',
        imageUrl: cdm,
        backgroundColor: '#242018',
        backgroundHeight: 'h-16',
        description: "Site desenvolvido para o Centro de Memória do IFMG, utilizando Wordpress como principal ferramenta."
    }

];


