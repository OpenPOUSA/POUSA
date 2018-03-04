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
    if (charCode == 44) {
    	return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function calc() {
	var number = $('[name=harga_barang]').val().split('.').join("");
	var comma = number.substr(number.length - 1, 1) == ',';
	var dec = number.split(',');
	if (dec.length > 1) {
		var dr = parseFloat(dec[0]+"."+dec[1]);
	} else {
		var dr = parseFloat(dec[0]);
	}
	if (isNaN(dr)) {
		$('#ed').html('0');
		$('[name=harga_barang]').val(comma ? '0,' : '');
		return;
	}
	console.log(dr);
	var rp = dr * 14200;
	if (rp > 1000000) {
		var tx = rp * 15 /100;
		var pr = rp * 15 / 100;
	} else {
		var tx = rp / 10;
		var pr = rp / 10;
	}
	if (pr < 100000) {
		pr = 100000;
	}
	var ed = rp + tx + pr;
	if (dr > 0) {
		var edS = ed.toString().split('.');
		if (edS.length > 1) {
			$('#ed').html(edS[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+","+edS[1].substr(0, 2));
		} else {
			$('#ed').html(ed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
		}
		if (dec.length > 1) {
			$('[name=harga_barang]').val(dec[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+","+dec[1]);
		} else {
			$('[name=harga_barang]').val(dr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (comma ? ',' : ''));
		}
	} else {
		$('#ed').html('0');
		$('[name=harga_barang]').val(comma ? '0,' : '0');
	}
}