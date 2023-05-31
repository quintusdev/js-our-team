//creo l'array con le informazioni di ogni membro del team

//creo l'array per inserire le immagini negli oggetti
const imgArray = ['wayne-barnett-founder-ceo.jpg', 'angela-caroll-chief-editor.jpg', 'walter-gordon-office-manager.jpg', 'angela-lopez-social-media-manager.jpg', 'scott-estrada-developer.jpg', 'barbara-ramos-graphic-designer.jpg'];

const team_info = [
{ 'name': 'Wayne Barnett',
'role': 'Founder & CEO',
'image': imgArray[0]
},
{ 'name': 'Angela Caroll',
'role': 'Chief Editor',
'image': imgArray[1]
},
{ 'name': 'Walter Gordon',
'role': 'Office Manager',
'image': imgArray[2]
},
{ 'name': 'Angela Lopez',
'role': 'Social Media Manager',
'image': imgArray[3]
},
{ 'name': 'Scott Estrada',
'role': 'Developer',
'image': imgArray[4]
},
{'name': 'Barbara Ramos',
'role': 'Graphic Designer',
'image': imgArray[5]
}
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
        <img src="./img/${info.image}">
        <p>${info.name}</p>
        <p>${info.role}</p>
        </div>`
    
    //concateno le nuove info alle precedenti
    teaminfo.innerHTML += infoteam;
}