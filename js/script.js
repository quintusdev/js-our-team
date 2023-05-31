//creo l'array con le informazioni di ogni membro del team

const team_info = [
{ 'name': 'Wayne Barnett',
'role': 'Founder & CEO',
'image': 'wayne-barnett-founder-ceo.jpg'
},
{ 'name': 'Angela Caroll',
'role': 'Chief Editor',
'image': 'angela-caroll-chief-editor.jpg'
},
{ 'name': 'Walter Gordon',
'role': 'Office Manager',
'image': 'walter-gordon-office-manager.jpg'
},
{ 'name': 'Angela Lopez',
'role': 'Social Media Manager',
'image': 'angela-lopez-social-media-manager'
},
{ 'name': 'Scott Estrada',
'role': 'Developer',
'image': 'scott-estrada-developer.jpg'
},
{ 'name': 'Barbara Ramos',
'role': 'Graphic Designer',
'image': 'barbara-ramos-graphic-designer.jpg'
},
];

//stampo su console log le informazioni per ogni membro del team

console.log(team_info);

//RECUPERO IL CONTENITORE DAL DOM

const teaminfo = document.getElementById('teaminfo');

//ciclo l'array con le informazioni del team
for (let i = 0; i < team_info.length; i++) {
    //la info che sto ciclando la salvo in una variabile
    let info = team_info[i];
    
    //creo l'elemento nel DOM che contiene le info del team
    let infoteam = `<div class="infoteam">
        <p>${info.name}</p>
        <p>${info.role}</p>
        </div>`
    
    //concateno le nuove info alle precedenti
    teaminfo.innerHTML += infoteam;
}