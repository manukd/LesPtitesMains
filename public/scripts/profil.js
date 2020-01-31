class Profil{
	
	constructor(string) {
		this.name = string;
	}


	showDetail(){
		var detail_view = document.createElement('div');
		detail_view.id = "profil_detail"
		detail_view.setAttribute('class',' bg-light search-block p-5 w-80 l-10');
		detail_view.innerHTML = '<button class="btn btn-danger" type="button" onclick="closeDetail();">X</button>';


		document.body.appendChild(detail_view);
	}
}