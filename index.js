var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var row = document.getElementById('row');

var containerFluid=document.getElementById('container-fluid');
var alert=document.getElementById('alert');
var submitbtn=document.getElementById('submit');

var container=[]; 

function addDetails() {
    var details = {
        name: siteName.value,
        url: siteUrl.value
    };
    container.push(details);
    console.log(container);   
    if(siteUrl.classList.contains('is-valid')&& siteName.classList.contains('is-valid')){
        displayDatils();
    }
    else {
        alert.classList.remove('d-none')
    }
    clearForm()




}

function displayDatils() {
    var cartoona = '';
    for (var i = 0; i < container.length; i++) {
        cartoona += ` <div class="col-lg-3">
                    <div class="cardBody">
                        <p class="text-center pt-2">${i + 1}</p>
                    </div>
                </div>


                <div class="col-lg-3">
                    <div class="cardBody">
                        <p class="text-center pt-2">${container[i].name}</p>
                    </div>
                </div>
                
                <div class="col-lg-3">
                    <div class="cardBody position-relative ">
                        <div class="text-center pt-2 mx-auto"> <p class="text-center py-2"><a href="${container[i].url}" target="_blank" ><button class="btn btn-visit text-center position-absolute px-2 btn-sm"><i class="fa-solid fa-eye my-auto pe-2"></i> Visit </button></a></p></div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="cardBody position-relative">
                        <div class="text-center pt-2 mx-auto"> <button class="btn btn-delete text-center position-absolute px-2 py-1 btn-sm" onclick=' Delete(${i})'> <i class="fa-solid fa-trash-can my-auto pe-2"></i> Delete</button></div>
                    </div>
                </div>



                <hr class="p-0 m-0 ">`;





    }

    row.innerHTML = cartoona;
    row.classList.add('h-auto');
    siteName.classList.remove('is-valid');
    siteUrl.classList.remove('is-valid');
    siteName.classList.remove('is-invalid');
    siteUrl.classList.remove('is-invalid');

}


function clearForm() {
    siteName.value = '';
    siteUrl.value = '';
}




function Delete(index){
    container.splice(index,1);
    localStorage.setItem('list',JSON.stringify(container));
    displayDatils();

}


function validation(input){
    var regex={
        siteName:/\w{3,}$/,
        siteUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    };

    if(regex[input.id].test(input.value)){
       input.classList.add('is-valid');
       input.classList.remove('is-invalid');
       alert.classList.add('d-none')
    }

    else {

       input.classList.add('is-invalid');
       input.classList.remove('is-valid');
       //alert
    //    alert.classList.remove('d-none')

        
    }
   
}


function cancel(){
    alert.classList.add('d-none');
}





