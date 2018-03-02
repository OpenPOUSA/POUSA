$('body').on('change', '[name=harga_barang]', function(e) {
	calc();
});
$('body').on('click', '[name=harga_barang]', function(e) {
	calc();
});
$('body').on('keyup', '[name=harga_barang]', function(e) {
	calc();
});
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function calc() {
	var dr = parseInt($('[name=harga_barang]').val().split('.').join(""));
	console.log(dr);
	var rp = dr * 14200;
	var tx = rp / 10;
	var pr = rp / 10;
	if (pr < 100000) {
		pr = 100000;
	}
	var ed = rp + tx + pr;
	if (dr > 0) {
		$('#ed').html(ed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
		$('[name=harga_barang]').val(dr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
	} else {
		$('#ed').html('0');
		$('[name=harga_barang]').val('0');
	}
}