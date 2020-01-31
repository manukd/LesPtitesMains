profils_list = [new Profil()];

for (let i = 0; i < 99; i++) {
	let p = new Profil("unkonw");
 	profils_list.push(p);

	var newProfil = document.createElement('div');
	newProfil.setAttribute('class',' m-1 d-inline profil');
	newProfil.onclick = p.showDetail;
	newProfil.innerHTML = '<img class="rounded-image w-10" src="images/profil.png">';

	document.getElementById('background-flow').appendChild(newProfil);
}


function closeDetail(){
	var profilDetail = document.getElementById('profil_detail');
	document.body.removeChild(profilDetail);
}


