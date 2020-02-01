profils_list = [new Profil("unknow","unknow","unknow","unknow","unknow","unknow",0,0)];
threats_list = [new Threat("unknow","unknow","unknow","unknow","unknow","unknow",0,0)];



function loadProfils(){
	for (let i = 0; i < 99; i++) {
		let p = new Profil("unknow","unknow","unknow","unknow","unknow","unknow",0,0);
	 	profils_list.push(p);

		var newProfil = document.createElement('div');
		newProfil.setAttribute('class',' m-1 d-inline profil');
		newProfil.onclick = p.showDetail;
		newProfil.innerHTML = '<img class="rounded-image w-10" src="images/profil.png">';

		document.getElementById('background-flow').appendChild(newProfil);
	}
}


function loadThreats(){
	for (let i = 0; i < 99; i++) {
		let t = new Threat("unknow","unknow","unknow","unknow","unknow","unknow",0,0);
	 	profils_list.push(t);

		var newProfil = document.createElement('div');
		newProfil.setAttribute('class',' m-1 d-inline profil');
		newProfil.onclick = t.showDetail;
		newProfil.innerHTML = '<img class="rounded-image w-10" src="images/threat.png">';

		document.getElementById('background-flow').appendChild(newProfil);
	}
}

function closeDetail(){
	var profilDetail = document.getElementById('profil_detail');
	document.body.removeChild(profilDetail);
}


