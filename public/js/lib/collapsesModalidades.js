function radioDeficiencia(){
    /*deficiencia*/
    if($('#deficienciaSim').is(':checked')){
        $('#collapseDeficiencia').collapse('show');
    }else{
        $('#collapseDeficiencia').collapse('hide');
    }
}


function radioCollapse() {
    /*edu infant*/
            if($('#eduInfant').is(':checked')){
                $('#collapseEduInfant').collapse('show');
                $('#collapsetodos').collapse('show');
            }else{
                $('#collapseEduInfant').collapse('hide');
            }
    /*ens fundam*/
            if($('#ensFundam').is(':checked')){
                $('#collapseEnsFund').collapse('show');
                $('#collapsetodos').collapse('show');
            }else{
                $('#collapseEnsFund').collapse('hide');
            }
    /*ens medio*/
            if($('#ensMedio').is(':checked')){
                $('#collapseEnsMedio').collapse('show');
                $('#collapsetodos').collapse('show');
            }else{
                $('#collapseEnsMedio').collapse('hide');
            }
    /*edu esp*/
            if($('#eduEspec').is(':checked')){
                $('#collapseEduEsp').collapse('show');
                $('#collapsetodos').collapse('show');
            }else{
                $('#collapseEduEsp').collapse('hide');
            }
        };