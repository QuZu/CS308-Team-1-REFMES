import AliPalabiyik from "../../components/refbar/refImage/ali-palabiyik.jpg"

function updateReferee(){

    return(

        <div className="container-fluid">

            <div className="row update-bar">
                <div className="col-3">

                    <div class="card" style="width: 100%;">
                    <img src= {AliPalabiyik} class="card-img-top" alt="referee"/>
                    <div class="card-body">
                        <h5 class="card-title">Ali Palabiyik</h5>
                    </div>
                    </div>

                </div>
                <div className="col-6">
                    <h1>Yellow card</h1>

                </div>
            </div>
        </div>


    )
}
export default updateReferee