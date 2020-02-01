class Profil{

	constructor(lastname, firstname, birth,genre, address, power, nbLifeSaved, nbBadGuys ) {
		this.lastname = lastname;
		this.firstname = firstname;
		this.birth = birth;
		this.genre = genre;
		this.address = address;
		this.power = power;
		this.nbLifeSaved = nbLifeSaved;
		this.nbBadGuys = nbBadGuys;
	}


	showDetail(){
		var detail_view = document.createElement('div');
		detail_view.id = "profil_detail"
		detail_view.setAttribute('class',' bg-light text-dark search-block p-5 w-80 l-10 text-left');
		detail_view.style.bottom = "30%";
		detail_view.innerHTML = '\
								<div class="row margin-t">\
		                            <div class="col">\
		                                <label class=" ">Nom : '+ this.lastname +'</label>\
		                            </div>\
		                            <div class="col">\
		                                <label class="">Prénom : '+ this.firstname +'</label>\
		                            </div>\
		                        </div>\
		                        <div class="row margin-t">\
		                            <div class="col">\
		                                <label class="">Date de naissance : '+ this.birth +'</label>\
		                            </div>\
		                            <div class="col">\
		                                <label class="">Genre : '+ this.genre +'</label>\
		                            </div>\
		                        </div>\
		                        <div class="row margin-t">\
		                            <div class="col">\
		                                <label class="">Adresse : '+ this.address +'</label>\
		                            </div>\
		                        </div>\
		                        <div class="row margin-t">\
		                            <div class="col">\
		                                <label class="">Pouvoir : '+ this.power +'</label>\
		                            </div>\
		                        </div>\
		                        <div class="row margin-t">\
		                            <div class="col">\
		                                <label class=" ">Nombre de vies sauvées : '+ this.nbLifeSaved +'</label>\
		                            </div>\
		                            <div class="col">\
		                                <label class="">Nombre de criminels arrêtés : '+ this.nbBadGuys +'</label>\
		                            </div>\
		                        </div></br>\
		                        	<button class="row btn btn-danger rounded-25 m-auto" type="button" onclick="closeDetail();">X</button>';


		document.body.appendChild(detail_view);
	}
}
